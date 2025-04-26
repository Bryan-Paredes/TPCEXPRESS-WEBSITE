import calculateQuote from "@/config/calculateQuote";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
    tipoServicio: string;
    cantidadPaquetes: number;
    ciudadOrigen: string;
    ciudadDestino: string;
    tipoPaquete: string;
    costoProducto: number;
    dondePaga: boolean;
    costoServicio: number;
}

interface FormActions {
    setTipoServicio: (newState: string) => void;
    updateField: (field: keyof FormState, value: any) => void;
    resetFormQuote: () => void;
    submitFormQuote: (data: FormState) => void;
    calculateQuote: () => number;
}


export const useCotizacionStore = create<FormState & FormActions>()(
    persist(
        (set, get) => ({
            // Estado inicial del formulario
            tipoServicio: '',
            cantidadPaquetes: 1,
            ciudadOrigen: '',
            ciudadDestino: '',
            tipoPaquete: '',
            costoProducto: 0,
            dondePaga: false,
            costoServicio: 0,


            // Método para actualizar el servicio seleccionado
            setTipoServicio: (newState) => set({ tipoServicio: newState }),

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
                    tipoServicio: '',
                    cantidadPaquetes: 1,
                    ciudadOrigen: '',
                    ciudadDestino: '',
                    tipoPaquete: '',
                    costoProducto: 0,
                    dondePaga: false,
                    costoServicio: 0,
                })),

            // Método para guardar todo el formulario
            submitFormQuote: (data) => {
                set(() => ({
                    ...data,
                    cantidadPaquetes: get().cantidadPaquetes,
                    setTotal: get().calculateQuote(),
                }))

            },


            // Método para calcular el total de la cotización
            calculateQuote: () => {
                const state = get();

                const total = calculateQuote(state.costoProducto, state.dondePaga, state.tipoServicio, state.ciudadOrigen, state.ciudadDestino);

                set(() => ({ costoServicio: total }));

                return total;
            },
        }),
        {
            name: "cotizacion", // Nombre clave para la persistencia en localStorage
        }
    )
);

