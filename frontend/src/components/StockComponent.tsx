import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import LayoutComponent from "./LayoutComponent";
import type { StockItem } from "../types/StockItem";

type StockComponentProps = {
  stock: StockItem[];
};

function StockComponent({ stock }: StockComponentProps) {
  const isExpired = (expirationDate: string) => {
    return new Date(expirationDate) < new Date();
  };

  return (
    <LayoutComponent>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Stock
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Fecha de vencimiento</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stock.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.product}</TableCell>

                <TableCell>{item.quantity}</TableCell>

                <TableCell>{item.expirationDate}</TableCell>

                <TableCell>
                  {isExpired(item.expirationDate) ? (
                    <Chip
                      label="Vencido"
                      color="error"
                      size="small"
                    />
                  ) : (
                    <Chip
                      label="Disponible"
                      color="success"
                      size="small"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutComponent>
  );
}

export default StockComponent;