import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Page() {
  <>
    <div>
      <h1>Ropa</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prenda</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Diseño</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  </>
}