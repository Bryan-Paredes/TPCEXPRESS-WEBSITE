import {
  Form,
  Input,
  Select,
  SelectItem,
  Button,
  Switch,
  Card,
  CardBody,
  Image,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import QuoteModal from "./QuoteModal";
import { useCotizacionStore } from "@/stores/servicio";
import { formatMonto } from "@/config/formatMonto";
import { getMunicipios } from "@/lib/obtener-municipios";
import type { Datum } from "@/types/municipios";
import { packageList } from "@/config/site";

interface QuoteFormValues {
  tipoServicio: string;
  ciudadOrigen: string;
  ciudadDestino: string;
  tipoPaquete: string;
  costoProducto: string;
  dondePaga: boolean;
}

export default function QuoteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [municipios, setMunicipios] = useState<Datum[]>([]);

  useEffect(() => {
    async function fetchMunicipios() {
      const data = await getMunicipios();
      setMunicipios(data.data);
    }

    fetchMunicipios();
  }, []);

  const { control, handleSubmit, reset, watch, setValue } =
    useForm<QuoteFormValues>();

  const { tipoServicio, submitFormQuote, resetFormQuote, calculateQuote } =
    useCotizacionStore();

  const currentPaquete = watch("tipoPaquete");

  // const addPackageSection = () => {
  //   if (packageSections.length < 4) {
  //     const newIndex = Math.max(...packageSections) + 1;
  //     setPackageSections([...packageSections, newIndex]);
  //     setValue("paquetes", [...currentPaquetes, ""]);
  //   }
  // };

  // const removePackageSection = (indexToRemove: number) => {
  //   if (packageSections.length > 1) {
  //     const newSections = packageSections.filter((_, i) => i !== indexToRemove);
  //     setPackageSections(newSections);
  //     const newPaquetes = currentPaquetes.filter((_, i) => i !== indexToRemove);
  //     setValue("paquetes", newPaquetes);
  //   }
  // };

  const onSubmit: SubmitHandler<QuoteFormValues> = async (data) => {
    const { costoProducto, dondePaga, tipoPaquete, ...rest } = data;

    const newCost = Number(costoProducto);

    // Find municipality names for the selected IDs
    const origenMunicipio = municipios.find((m) => m.id === data.ciudadOrigen);
    const destinoMunicipio = municipios.find(
      (m) => m.id === data.ciudadDestino
    );

    // Filter out empty packages and create package summary
    // const validPaquetes = paquetes.filter((p) => p.trim() !== "");
    // const tipoPaquete = validPaquetes.join(", ");

    // console.log({
    //   ...data,
    //   costoProducto: newCost,
    //   cantidadPaquetes: 1,
    //   dondePaga: dondePaga || false,
    //   ciudadOrigenNombre: origenMunicipio?.nombre || "",
    //   ciudadDestinoNombre: destinoMunicipio?.nombre || "",
    //   tipoPaquete: currentPaquete,
    //   tipoServicio: rest.tipoServicio,
    //   ciudadOrigen: rest.ciudadOrigen,
    //   ciudadDestino: rest.ciudadDestino,
    // });

    submitFormQuote({
      costoProducto: newCost,
      cantidadPaquetes: 1,
      dondePaga: dondePaga || false,
      ciudadOrigenNombre: origenMunicipio?.nombre || "",
      ciudadDestinoNombre: destinoMunicipio?.nombre || "",
      tipoPaquete: currentPaquete,
      tipoServicio: tipoServicio,
      ciudadOrigen: rest.ciudadOrigen,
      ciudadDestino: rest.ciudadDestino,
    });

    setIsOpen(true);

    // Calculate quote after opening modal to show loading state
    await calculateQuote({
      ciudadOrigenId: data.ciudadOrigen,
      ciudadDestinoId: data.ciudadDestino,
    });
  };

  return (
    <div>
      <Form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="ciudadOrigen"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Selecciona Origen"
              variant="bordered"
              value={field.value}
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {municipios.map(({ id, nombre }) => (
                <SelectItem key={id}>{nombre}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Origen" }}
        />
        <Controller
          control={control}
          name="ciudadDestino"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Selecciona Destino"
              variant="bordered"
              value={field.value}
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {municipios.map(({ id, nombre }) => (
                <SelectItem key={id}>{nombre}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Destino" }}
        />
        {/* Dynamic Package Sections */}
        <div className="w-full my-3">
          <div className="flex items-center gap-2 mb-3">
            <label className="font-medium text-foreground">
              Tipo de Paquete
            </label>
            <span className="text-sm text-red-600">*</span>
          </div>
          <Controller
            control={control}
            name={`tipoPaquete`}
            render={({ field, fieldState: { invalid, error } }) => (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {packageList.map((item, index) => (
                    <Card
                      key={index}
                      isPressable
                      shadow="sm"
                      className={`transition-all duration-200 ${
                        field.value === item.title
                          ? "ring-2 ring-primary bg-primary/10 transition-all"
                          : "hover:scale-102"
                      }`}
                      onPress={() => field.onChange(item.title)}
                    >
                      <CardBody className="overflow-visible p-0">
                        <Image
                          alt={item.title}
                          className="w-full object-contain h-[140px]"
                          radius="lg"
                          shadow="sm"
                          src={item.img}
                          width="100%"
                        />
                      </CardBody>
                      <CardFooter className="text-small flex-col items-start p-3">
                        <b
                          className={`text-sm ${
                            field.value === item.title ? "text-primary" : ""
                          }`}
                        >
                          {item.title}
                        </b>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </p>
                        {field.value === item.title && (
                          <div className="flex items-center gap-1 mt-2">
                            <span className="text-primary text-xs font-medium">
                              ✓ Seleccionado
                            </span>
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                {invalid && (
                  <p className="text-danger text-sm mt-1">{error?.message}</p>
                )}
              </div>
            )}
            rules={{ required: "Debes Seleccionar el tipo de paquete" }}
          />
        </div>
        {tipoServicio === "COD" && (
          <Controller
            control={control}
            name="costoProducto"
            render={({ field, fieldState: { invalid, error } }) => (
              <Input
                {...field}
                isRequired
                type="text"
                errorMessage={error?.message}
                validationBehavior="aria"
                isInvalid={invalid}
                label={
                  tipoServicio === "COD"
                    ? "Costo Producto a Cobrar"
                    : "Costo Producto a Enviar"
                }
                name="Precio"
                variant="bordered"
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/[^0-9.]/g, "");
                  field.onChange(rawValue);
                }}
                onBlur={(e) => {
                  field.onChange(formatMonto(e.target.value));
                }}
                value={field.value}
                description={
                  <p className="text-primary">
                    Si desea ingresar un monto con decimal ponga un punto (.) en
                    lugar de una coma (,)
                  </p>
                }
              />
            )}
            rules={{
              min: { value: 1, message: "El valor debe ser mayor a 0" },
              validate: (value) => value !== "0",
              required: "Debes Seleccionar el Precio",
            }}
          />
        )}
        {/* {tipoServicio === "ESTANDAR" && (
          <Controller
            control={control}
            name="dondePaga"
            render={({ field }) => (
              <>
                <div className="flex items-center justify-center gap-2">
                  <label>Desea pagar en destino?</label>
                  <Switch
                    isSelected={field.value}
                    onValueChange={field.onChange}
                    aria-label="dondePagaQuote"
                  />
                </div>
              </>
            )}
          />
        )} */}
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:gap-3">
          <Button
            type="submit"
            color="success"
            variant="ghost"
            className="w-fit uppercase  my-5"
          >
            Ver Cotización
          </Button>
          <Button
            type="reset"
            variant="ghost"
            color="danger"
            className="w-fit uppercase"
            onPress={() => {
              resetFormQuote();
              reset();
            }}
          >
            Limpiar Formulario
          </Button>
        </div>
      </Form>

      <QuoteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
