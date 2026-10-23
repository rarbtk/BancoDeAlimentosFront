import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
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
import type { Organization } from "../types/Organization";

type OrganizationsComponentProps = {
  organizations: Organization[];

  open: boolean;
  isEditing: boolean;
  deleteOpen: boolean;

  name: string;
  address: string;
  peopleCount: string;

  onOpen: () => void;
  onClose: () => void;
  onSave: () => void;

  onEdit: (organization: Organization) => void;

  onOpenDelete: (id: string) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;

  setName: (value: string) => void;
  setAddress: (value: string) => void;
  setPeopleCount: (value: string) => void;
};

function OrganizationsComponent({
  organizations,
  open,
  isEditing,
  deleteOpen,
  name,
  address,
  peopleCount,
  onOpen,
  onClose,
  onSave,
  onEdit,
  onOpenDelete,
  onCloseDelete,
  onConfirmDelete,
  setName,
  setAddress,
  setPeopleCount,
}: OrganizationsComponentProps) {
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
          Organizaciones beneficiarias
        </Typography>

        <Button variant="contained" onClick={onOpen}>
          Nueva organización
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Personas asistidas</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {organizations.map((organization) => (
              <TableRow key={organization.id}>
                <TableCell>{organization.name}</TableCell>
                <TableCell>{organization.address}</TableCell>
                <TableCell>{organization.peopleCount}</TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => onEdit(organization)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onOpenDelete(organization.id)}
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
            ? "Editar organización"
            : "Nueva organización"}
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
            <TextField
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />

            <TextField
              label="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
            />

            <TextField
              label="Cantidad de personas asistidas"
              type="number"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
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
            ¿Está seguro que desea eliminar esta organización?
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

export default OrganizationsComponent;