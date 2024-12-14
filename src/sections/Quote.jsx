import QuoteForm from "@/components/QuoteForm";
import { serviceOptions } from "@/config/site";
// import type { Selection } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function QuoteSection() {
  const [serviceSelected, setServiceSelected] = useState("");

  const handleSelectionChange = (e) => {
    setServiceSelected(e.target.value);
  };

  return (
    <main className="container mx-auto">
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
          <QuoteForm service={serviceSelected} />
        ) : (
          <p className="text-center text-red-500">
            **Selecciona un servicio para continuar con la cotización**
          </p>
        )}
      </div>
    </main>
  );
}
