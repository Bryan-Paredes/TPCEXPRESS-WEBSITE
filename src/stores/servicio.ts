import calculateQuote from "@/config/calculateQuote";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
    servicioQuote: string;
    origenQuote: string;
    destinoQuote: string;
    queEnviasQuote: string;
    cantidadPaquetesQuote: number;
    pesoQuote: string;
    precioProductoQuote: number;
    dondePagaQuote: boolean;
    setTotal: number;
}

interface FormActions {
    setServicioQuote: (newState: string) => void;
    updateField: (field: keyof FormState, value: any) => void;
    resetFormQuote: () => void;
    submitFormQuote: (data: FormState) => void;
    calculateQuote: () => number;
}


export const useCotizacionStore = create<FormState & FormActions>()(
    persist(
        (set, get) => ({
            // Estado inicial del formulario
            servicioQuote: '',
            origenQuote: '',
            destinoQuote: '',
            queEnviasQuote: '',
            cantidadPaquetesQuote: 0,
            pesoQuote: '',
            precioProductoQuote: 0,
            dondePagaQuote: false,
            setTotal: 0,


            // Método para actualizar el servicio seleccionado
            setServicioQuote: (newState) => set({ servicioQuote: newState }),

            // Métodos para actualizar los campos del formulario
            updateField: (field, value) => {
                set((state) => {
                    const updatedState = { ...state, [field]: value };

                    const newTotal = updatedState.calculateQuote()

                    return { ...updatedState, setTotal: newTotal };
                })
            },



            // Método para resetear el formulario
            resetFormQuote: () =>
                set(() => ({
                    servicioQuote: '',
                    origenQuote: '',
                    destinoQuote: '',
                    queEnviasQuote: '',
                    cantidadPaquetesQuote: 0,
                    pesoQuote: '',
                    precioProductoQuote: 0,
                    dondePagaQuote: false,
                    setTotal: 0,
                })),

            // Método para guardar todo el formulario
            submitFormQuote: (data) => {
                set(() => ({
                    ...data,
                    setTotal: get().calculateQuote(),
                }))

            },


            // Método para calcular el total de la cotización
            calculateQuote: () => {
                const state = get();

                const total = calculateQuote(state.cantidadPaquetesQuote, state.precioProductoQuote, state.dondePagaQuote, state.servicioQuote);

                set(() => ({ setTotal: total }));

                return total;
            },
        }),
        {
            name: "cotizacion", // Nombre clave para la persistencia en localStorage
        }
    )
);

