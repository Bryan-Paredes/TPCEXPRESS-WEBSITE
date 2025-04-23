import QuoteForm from "@/components/QuoteForm";
import { serviceOptions } from "@/config/site";
import { Select, SelectItem } from "@nextui-org/react";
import { useCotizacionStore } from "@/stores/servicio";

export default function QuoteSection() {
  const servicioQuote = useCotizacionStore((state) => state.servicioQuote);
  const setServicioQuote = useCotizacionStore(
    (state) => state.setServicioQuote
  );

  const handleSelectionChange = (e: any) => {
    console.log(e.target.value);

    setServicioQuote(e.target.value);
  };

  return (
    <main className="px-8 sm:px-0">
      <Select
        isRequired
        label="Selecciona el servicio"
        radius="lg"
        variant="bordered"
        selectedKeys={servicioQuote ? [servicioQuote] : []}
        onChange={handleSelectionChange}
      >
        {serviceOptions.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
      <div className="mt-5 mx-auto">
        {servicioQuote ? (
          <QuoteForm />
        ) : (
          <p className="text-center text-red-500">
            **Selecciona un servicio para continuar con la cotización**
          </p>
        )}
      </div>
    </main>
  );
}
