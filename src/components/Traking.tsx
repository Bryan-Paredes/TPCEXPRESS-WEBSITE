import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Search, Box, Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { getGuiaTracking } from "@/lib/guia-traking";
import { TrackingResult } from "./Result";
import type { GuiaSeguimiento } from "@/types/seguimiento";

interface TrackingForm {
  trackingNumber: string;
}

export function Tracking() {
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GuiaSeguimiento | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TrackingForm>();

  const onSubmit: SubmitHandler<TrackingForm> = async (data) => {
    console.log(data);

    try {
      const guia = await getGuiaTracking(data.trackingNumber);
      setResult(guia);

      console.log(guia);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setError(error.message as string);
      }
    } finally {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-[3px]">
          <CardContent className="bg-white p-6 rounded-sm">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Ingresa tu número de guía (ej: ABC123456789 o XYZ987654321)"
                  {...register("trackingNumber", {
                    required: "Este campo es obligatorio",
                  })}
                  className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                />
                <Box className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                {errors.trackingNumber && (
                  <p className="text-red-500 text-base font-medium mt-2">
                    {errors.trackingNumber.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg duration-300 disabled:cursor-progress disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Buscando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Rastrear
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </div>
      </Card>

      {error ? (
        <div>
          <Card className="border-0 shadow-lg bg-red-50 border-l-4 border-l-red-500">
            <CardContent className="p-6 flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-red-700 font-medium">{error}</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <TrackingResult guia={result} />
      )}
    </div>
  );
}
