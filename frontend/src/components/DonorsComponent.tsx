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
import type { Donor } from "../types/Donor";

type DonorsComponentProps = {
  donors: Donor[];

  open: boolean;
  isEditing: boolean;
  deleteOpen: boolean;

  name: string;
  email: string;
  phone: string;
  type: "Empresa" | "Particular";

  onOpen: () => void;
  onClose: () => void;
  onSave: () => void;

  onEdit: (donor: Donor) => void;

  onOpenDelete: (id: string) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;

  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setType: (value: "Empresa" | "Particular") => void;
};

function DonorsComponent({
  donors,
  open,
  isEditing,
  name,
  email,
  phone,
  type,
  onOpen,
  onClose,
  onSave,
  onEdit,
  deleteOpen,
  onOpenDelete,
  onCloseDelete,
  onConfirmDelete,
  setName,
  setEmail,
  setPhone,
  setType,
}: DonorsComponentProps) {
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
          Donantes
        </Typography>

        <Button variant="contained" onClick={onOpen}>
          Nuevo donante
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {donors.map((donor) => (
              <TableRow key={donor.id}>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.type}</TableCell>
                <TableCell>{donor.email}</TableCell>
                <TableCell>{donor.phone}</TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => onEdit(donor)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onOpenDelete(donor.id)}
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
          {isEditing ? "Editar donante" : "Nuevo donante"}
        </DialogTitle>

        <DialogContent>
          <Box  sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />

            <TextField
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />

            <TextField
              label="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Tipo</InputLabel>

              <Select
                value={type}
                label="Tipo"
                onChange={(e) =>
                  setType(
                    e.target.value as "Empresa" | "Particular"
                  )
                }
              >
                <MenuItem value="Particular">
                  Particular
                </MenuItem>

                <MenuItem value="Empresa">
                  Empresa
                </MenuItem>
              </Select>
            </FormControl>
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
      ¿Está seguro que desea eliminar este donante?
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

export default DonorsComponent;