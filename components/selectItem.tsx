"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { siteConfig } from "@/config/site";

import React from "react";

export default function SelectComponent() {
  return (
    <Select label="Area de Interes" radius="lg" variant="bordered" isRequired>
      {siteConfig.interestArea.map(({ label }) => (
        <SelectItem key={label} value={label}>
          {label}
        </SelectItem>
      ))}
    </Select>
  );
}
