import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { CheckIcon } from "./icons";

export default function TableComponent({
  serviceName,
  serviceComision,
}: {
  serviceName: string;
  serviceComision: string;
}) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-center text-lg">SERVICIO</TableColumn>
        <TableColumn className="text-center text-lg">RECOLECCIÓN</TableColumn>
        <TableColumn className="text-center text-lg">SEGURO</TableColumn>
        <TableColumn className="text-center text-lg">COMISIÓN</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="text-center text-medium">
            {serviceName}
          </TableCell>
          <TableCell className="flex items-center justify-center">
            <CheckIcon size={30} className="text-primary" />
          </TableCell>
          <TableCell className="text-center text-medium">1%</TableCell>
          <TableCell className="text-center text-medium">
            {serviceComision}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
