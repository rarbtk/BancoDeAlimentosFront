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
import type { Donation } from "../types/Donation";

type DonorOption = {
  id: string;
  name: string;
};

type DonationsComponentProps = {
  donations: Donation[];
  donors: DonorOption[];

  open: boolean;
  isEditing: boolean;
  deleteOpen: boolean;

  donorId: string;
  product: string;
  quantity: string;
  expirationDate: string;

  onOpen: () => void;
  onClose: () => void;
  onSave: () => void;

  onEdit: (donation: Donation) => void;
  onOpenDelete: (id: string) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;

  setDonorId: (value: string) => void;
  setProduct: (value: string) => void;
  setQuantity: (value: string) => void;
  setExpirationDate: (value: string) => void;
};

function DonationsComponent({
  donations,
  donors,
  open,
  isEditing,
  deleteOpen,
  donorId,
  product,
  quantity,
  expirationDate,
  onOpen,
  onClose,
  onSave,
  onEdit,
  onOpenDelete,
  onCloseDelete,
  onConfirmDelete,
  setDonorId,
  setProduct,
  setQuantity,
  setExpirationDate,
}: DonationsComponentProps) {
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
          Donaciones
        </Typography>

        <Button
          variant="contained"
          onClick={onOpen}
        >
          Nueva donación
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Donante</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Vencimiento</TableCell>
                <TableCell>Acciones</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>
                  {donation.donorName}
                </TableCell>

                <TableCell>
                  {donation.product}
                </TableCell>

                <TableCell>
                  {donation.quantity}
                </TableCell>

                <TableCell>
                  {donation.expirationDate}
                </TableCell>

                  <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => onEdit(donation)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onOpenDelete(donation.id)}
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
        {isEditing ? "Editar donación" : "Nueva donación"}
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
                Donante
              </InputLabel>

              <Select
                value={donorId}
                label="Donante"
                onChange={(e) =>
                  setDonorId(e.target.value)
                }
              >
                {donors.map((donor) => (
                  <MenuItem
                    key={donor.id}
                    value={donor.id}
                  >
                    {donor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Producto"
              value={product}
              onChange={(e) =>
                setProduct(e.target.value)
              }
              fullWidth
            />

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
                label="Fecha de vencimiento"
                type="date"
                value={expirationDate}
                onChange={(e) =>
                  setExpirationDate(e.target.value)
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
      ¿Está seguro que desea eliminar esta donación?
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

export default DonationsComponent;