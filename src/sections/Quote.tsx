import QuoteForm from "@/components/QuoteForm";
import { serviceOptions } from "@/config/site";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function QuoteSection() {
  const [serviceSelected, setServiceSelected] = useState("");

  const handleSelectionChange = (e: any) => {
    setServiceSelected(e.target.value);
  };

  return (
    <main>
      <Select
        isRequired
        label="Selecciona el servicio"
        radius="lg"
        variant="bordered"
        selectedKeys={[serviceSelected]}
        onChange={handleSelectionChange}
      >
        {serviceOptions.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
      <div className="mt-5 mx-auto">
        {serviceSelected ? (
          <QuoteForm serviceSelected={serviceSelected} />
        ) : (
          <p className="text-center text-red-500">
            **Selecciona un servicio para continuar con la cotización**
          </p>
        )}
      </div>
    </main>
  );
}
