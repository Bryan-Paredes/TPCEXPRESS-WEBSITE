import QuoteForm from "@/components/QuoteForm";
import { serviceOptions } from "@/config/site";
import { Select, SelectItem } from "@nextui-org/react";
import { useCotizacionStore } from "@/stores/servicio";

export default function QuoteSection() {
  const servicio = useCotizacionStore((state) => state.servicio);
  const setServicio = useCotizacionStore((state) => state.setServicio);

  const handleSelectionChange = (e: any) => {
    setServicio(e.target.value);
  };

  return (
    <main>
      <Select
        isRequired
        label="Selecciona el servicio"
        radius="lg"
        variant="bordered"
        selectedKeys={servicio ? [servicio] : []}
        onChange={handleSelectionChange}
      >
        {serviceOptions.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
      <div className="mt-5 mx-auto">
        {servicio ? (
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
