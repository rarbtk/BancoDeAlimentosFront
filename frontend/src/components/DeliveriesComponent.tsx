import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import LayoutComponent from "./LayoutComponent";
import type { Delivery } from "../types/Delivery";

type OrganizationOption = {
  id: string;
  name: string;
};

type StockOption = {
  product: string;
  quantity: number;
  expirationDate: string;
};

type DeliveriesComponentProps = {
  deliveries: Delivery[];
  organizations: OrganizationOption[];
  stock: StockOption[];

  open: boolean;
  isEditing: boolean;
  deleteOpen: boolean;

  organizationId: string;
  product: string;
  quantity: string;
  deliveryDate: string;

  onOpen: () => void;
  onClose: () => void;
  onSave: () => void;

  onEdit: (delivery: Delivery) => void;

  onOpenDelete: (id: string) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;

  setOrganizationId: (value: string) => void;
  setProduct: (value: string) => void;
  setQuantity: (value: string) => void;
  setDeliveryDate: (value: string) => void;
};

function DeliveriesComponent({
  deliveries,
  organizations,
  stock,
  open,
  isEditing,
  deleteOpen,
  organizationId,
  product,
  quantity,
  deliveryDate,
  onOpen,
  onClose,
  onSave,
  onEdit,
  onOpenDelete,
  onCloseDelete,
  onConfirmDelete,
  setOrganizationId,
  setProduct,
  setQuantity,
  setDeliveryDate,
}: DeliveriesComponentProps) {
  return (
    <LayoutComponent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">
          Entregas
        </Typography>

        <Button
          variant="contained"
          onClick={onOpen}
        >
          Nueva entrega
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Organización</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Fecha de entrega</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow key={delivery.id}>
                <TableCell>
                  {delivery.organizationName}
                </TableCell>

                <TableCell>
                  {delivery.product}
                </TableCell>

                <TableCell>
                  {delivery.quantity}
                </TableCell>

                <TableCell>
                  {delivery.deliveryDate}
                </TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => onEdit(delivery)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() =>
                      onOpenDelete(delivery.id)
                    }
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {isEditing
            ? "Editar entrega"
            : "Nueva entrega"}
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            <FormControl fullWidth>
              <InputLabel>
                Organización
              </InputLabel>

              <Select
                value={organizationId}
                label="Organización"
                onChange={(e) =>
                  setOrganizationId(e.target.value)
                }
              >
                {organizations.map((organization) => (
                  <MenuItem
                    key={organization.id}
                    value={organization.id}
                  >
                    {organization.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>
                Producto
              </InputLabel>

              <Select
                value={product}
                label="Producto"
                onChange={(e) =>
                  setProduct(e.target.value)
                }
              >
                {stock.map((item) => (
                  <MenuItem
                    key={item.product}
                    value={item.product}
                  >
                    {item.product} - Stock: {item.quantity}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Cantidad"
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              fullWidth
            />

            <TextField
              label="Fecha de entrega"
              type="date"
              value={deliveryDate}
              onChange={(e) =>
                setDeliveryDate(e.target.value)
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              fullWidth
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            onClick={onSave}
          >
            {isEditing ? "Actualizar" : "Guardar"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onClose={onCloseDelete}
      >
        <DialogTitle>
          Confirmar eliminación
        </DialogTitle>

        <DialogContent>
          <Typography>
            ¿Está seguro que desea eliminar esta entrega?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={onCloseDelete}>
            Cancelar
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={onConfirmDelete}
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </LayoutComponent>
  );
}

export default DeliveriesComponent;