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
}

interface FormActions {
    setServicioQuote: (newState: string) => void;
    updateField: (field: keyof FormState, value: any) => void;
    resetFormQuote: () => void;
    submitFormQuote: (data: FormState) => void;
}

export const useCotizacionStore = create(
    persist<FormState & FormActions>(
        (set) => ({
            // Estado inicial del formulario
            servicioQuote: '',
            origenQuote: '',
            destinoQuote: '',
            queEnviasQuote: '',
            cantidadPaquetesQuote: 0,
            pesoQuote: '',
            precioProductoQuote: 0,
            dondePagaQuote: false,

            // Método para actualizar el servicio seleccionado
            setServicioQuote: (newState) => set({ servicioQuote: newState }),

            // Métodos para actualizar los campos del formulario
            updateField: (field, value) =>
                set((state) => ({
                    ...state,
                    [field]: value,
                })),

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
                })),

            // Método para guardar todo el formulario
            submitFormQuote: (data) => set(() => ({ ...data })),
        }),
        {
            name: "cotizacion", // Nombre clave para la persistencia en localStorage
        }
    )
);