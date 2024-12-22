// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface CotizacionStore {
//     servicio: string;
//     setServicio: (newState: string) => void;
//     origen: string;
//     setOrigen: (newOrigen: string) => void;
//     destino: string;
//     setDestino: (newDestino: string) => void;
//     queEnvias: string;
//     setQueEnvias: (newQueEnvias: string) => void;
//     cantidadPaquetes: string
//     setCantidadPaquetes: (newCantidadPaquetes: string) => void;
//     peso: string;
//     setPeso: (newPeso: string) => void;
//     precioProducto: string;
//     setPrecioProducto: (newPrecioProducto: string) => void;
//     dondePaga: string;
//     setDondePaga: (newDondePaga: string) => void;
// }

// export const useCotizacionStore = create<CotizacionStore>()(persist((set) => {
//     return {
//         servicio: '',
//         setServicio: (newState) => set({ servicio: newState }),
//         origen: '',
//         setOrigen: (newOrigen) => set({ origen: newOrigen }),
//         destino: '',
//         setDestino: (newDestino) => set({ destino: newDestino }),
//         queEnvias: '',
//         setQueEnvias: (newQueEnvias) => set({ queEnvias: newQueEnvias }),
//         cantidadPaquetes: '',
//         setCantidadPaquetes: (newCantidadPaquetes) => set({ cantidadPaquetes: newCantidadPaquetes }),
//         peso: '',
//         setPeso: (newPeso) => set({ peso: newPeso }),
//         precioProducto: '',
//         setPrecioProducto: (newPrecioProducto) => set({ precioProducto: newPrecioProducto }),
//         dondePaga: '',
//         setDondePaga: (newDondePaga) => set({ dondePaga: newDondePaga }),
//     }
// }, {
//     name: 'cotizacion'
// }))

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
    servicio: string | '';
    origen: string | '';
    destino: string | '';
    queEnvias: string | '';
    cantidadPaquetes: string | '';
    peso: string | '';
    precioProducto: string | '';
    dondePaga: string | '';
}

interface FormActions {
    setServicio: (newState: string) => void;
    updateField: (field: keyof FormState, value: any) => void;
    resetForm: () => void;
    submitForm: (data: FormState) => void;
}

export const useCotizacionStore = create(
    persist<FormState & FormActions>(
        (set) => ({
            // Estado inicial del formulario
            servicio: '',
            origen: '',
            destino: '',
            queEnvias: '',
            cantidadPaquetes: '',
            peso: '',
            precioProducto: '',
            dondePaga: '',

            // Método para actualizar el servicio seleccionado
            setServicio: (newState) => set({ servicio: newState }),

            // Métodos para actualizar los campos del formulario
            updateField: (field, value) =>
                set((state) => ({
                    ...state,
                    [field]: value,
                })),

            // Método para resetear el formulario
            resetForm: () =>
                set(() => ({
                    origen: '',
                    destino: '',
                    queEnvias: '',
                    cantidadPaquetes: '',
                    peso: '',
                    precioProducto: '',
                    dondePaga: '',
                })),

            // Método para guardar todo el formulario
            submitForm: (data) => set(() => ({ ...data })),
        }),
        {
            name: "cotizacion", // Nombre clave para la persistencia en localStorage
        }
    )
);