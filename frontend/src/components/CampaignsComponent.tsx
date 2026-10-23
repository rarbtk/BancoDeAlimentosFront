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
import type { Campaign } from "../types/Campaign";

type CampaignsComponentProps = {
  campaigns: Campaign[];

  open: boolean;
  isEditing: boolean;
  deleteOpen: boolean;

  name: string;
  description: string;
  startDate: string;
  endDate: string;
  volunteers: string;

  onOpen: () => void;
  onClose: () => void;
  onSave: () => void;

  onEdit: (campaign: Campaign) => void;

  onOpenDelete: (id: string) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;

  setName: (value: string) => void;
  setDescription: (value: string) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  setVolunteers: (value: string) => void;
};

function CampaignsComponent({
  campaigns,
  open,
  isEditing,
  deleteOpen,
  name,
  description,
  startDate,
  endDate,
  volunteers,
  onOpen,
  onClose,
  onSave,
  onEdit,
  onOpenDelete,
  onCloseDelete,
  onConfirmDelete,
  setName,
  setDescription,
  setStartDate,
  setEndDate,
  setVolunteers,
}: CampaignsComponentProps) {
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
          Campañas
        </Typography>

        <Button
          variant="contained"
          onClick={onOpen}
        >
          Nueva campaña
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Inicio</TableCell>
              <TableCell>Fin</TableCell>
              <TableCell>Voluntarios</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>{campaign.name}</TableCell>

                <TableCell>
                  {campaign.description}
                </TableCell>

                <TableCell>
                  {campaign.startDate}
                </TableCell>

                <TableCell>
                  {campaign.endDate}
                </TableCell>

                <TableCell>
                  {campaign.volunteers}
                </TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => onEdit(campaign)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() =>
                      onOpenDelete(campaign.id)
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
            ? "Editar campaña"
            : "Nueva campaña"}
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
              onChange={(e) =>
                setName(e.target.value)
              }
              fullWidth
            />

            <TextField
              label="Descripción"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              multiline
              rows={3}
              fullWidth
            />

            <TextField
              label="Fecha de inicio"
              type="date"
              value={startDate}
              onChange={(e) =>
                setStartDate(e.target.value)
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              fullWidth
            />

            <TextField
              label="Fecha de fin"
              type="date"
              value={endDate}
              onChange={(e) =>
                setEndDate(e.target.value)
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              fullWidth
            />

            <TextField
              label="Cantidad de voluntarios"
              type="number"
              value={volunteers}
              onChange={(e) =>
                setVolunteers(e.target.value)
              }
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
            ¿Está seguro que desea eliminar esta campaña?
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

export default CampaignsComponent;