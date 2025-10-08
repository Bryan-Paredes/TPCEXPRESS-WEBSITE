import { create } from "zustand";
import { persist } from "zustand/middleware";
import { obtenerCotizacion } from "@/lib/cotizar";

interface FormState {
    tipoServicio: string;
    cantidadPaquetes: number;
    ciudadOrigen: string;
    ciudadDestino: string;
    ciudadOrigenNombre: string;
    ciudadDestinoNombre: string;
    tipoPaquete: string;
    costoProducto?: number;
    dondePaga: boolean;
    costoServicio?: number;
    isCalculatingQuote: boolean;
}

interface FormActions {
    setTipoServicio: (newState: string) => void;
    updateField: (field: keyof FormState, value: any) => void;
    resetFormQuote: () => void;
    submitFormQuote: (data: Omit<FormState, 'isCalculatingQuote'>) => void;
    calculateQuote: (params: { ciudadOrigenId: string; ciudadDestinoId: string }) => Promise<number>;
}


export const useCotizacionStore = create<FormState & FormActions>()(
    persist(
        (set, get) => ({
            // Estado inicial del formulario
            tipoServicio: '',
            cantidadPaquetes: 1,
            ciudadOrigen: '',
            ciudadDestino: '',
            ciudadOrigenNombre: '',
            ciudadDestinoNombre: '',
            tipoPaquete: '',
            costoProducto: 0,
            dondePaga: false,
            costoServicio: 0,
            isCalculatingQuote: false,


            // Método para actualizar el servicio seleccionado
            setTipoServicio: (newState) => set({ tipoServicio: newState }),

            // Métodos para actualizar los campos del formulario
            updateField: (field, value) => {
                set((state) => {
                    const updatedState = { ...state, [field]: value };

                    const newTotal = updatedState.calculateQuote({
                        ciudadOrigenId: updatedState.ciudadOrigen,
                        ciudadDestinoId: updatedState.ciudadDestino,
                    });

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
                    ciudadOrigenNombre: '',
                    ciudadDestinoNombre: '',
                    tipoPaquete: '',
                    costoProducto: 0,
                    dondePaga: false,
                    costoServicio: 0,
                    isCalculatingQuote: false,
                })),

            // Método para guardar todo el formulario
            submitFormQuote: (data) => {
                set(() => ({
                    ...data,
                    cantidadPaquetes: get().cantidadPaquetes,
                    setTotal: get().calculateQuote({ ciudadOrigenId: data.ciudadOrigen, ciudadDestinoId: data.ciudadDestino }),
                }))

            },


            // Método para calcular el total de la cotización
            calculateQuote: async (params: { ciudadOrigenId: string; ciudadDestinoId: string }) => {
                set(() => ({ isCalculatingQuote: true }));

                try {
                    const response = await obtenerCotizacion({
                        municipioOrigenId: params.ciudadOrigenId,
                        municipioDestinoId: params.ciudadDestinoId,
                    });

                    const total = parseFloat(response.data.costo) || 0; // Extract the numeric value from the response

                    set(() => ({ costoServicio: total, isCalculatingQuote: false }));

                    return total;
                } catch (error) {
                    set(() => ({ isCalculatingQuote: false }));
                    throw error;
                }
            },
        }),
        {
            name: "cotizacion", // Nombre clave para la persistencia en localStorage
        }
    )
);

