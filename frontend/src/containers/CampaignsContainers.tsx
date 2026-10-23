import { useState } from "react";
import CampaignsComponent from "../components/CampaignsComponent";
import type { Campaign } from "../types/Campaign";

function CampaignsContainer() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Colecta de Alimentos 2026",
      description: "Campaña para recolectar alimentos no perecederos.",
      startDate: "2026-11-01",
      endDate: "2026-11-30",
      volunteers: 15,
    },
    {
      id: "2",
      name: "Navidad Solidaria",
      description: "Recolección especial para las fiestas.",
      startDate: "2026-12-01",
      endDate: "2026-12-22",
      volunteers: 25,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [volunteers, setVolunteers] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setVolunteers("");
    setEditingId(null);
  };

  const handleOpen = () => {
    resetForm();
    setOpen(true);
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const handleEdit = (campaign: Campaign) => {
    setEditingId(campaign.id);
    setName(campaign.name);
    setDescription(campaign.description);
    setStartDate(campaign.startDate);
    setEndDate(campaign.endDate);
    setVolunteers(campaign.volunteers.toString());

    setOpen(true);
  };

  const handleSave = () => {
    if (
      !name ||
      !description ||
      !startDate ||
      !endDate ||
      !volunteers
    ) {
      alert("Complete todos los campos");
      return;
    }

    if (endDate < startDate) {
      alert("La fecha de fin no puede ser anterior a la fecha de inicio");
      return;
    }

    if (Number(volunteers) < 0) {
      alert("La cantidad de voluntarios no puede ser negativa");
      return;
    }

    if (editingId) {
      setCampaigns((currentCampaigns) =>
        currentCampaigns.map((campaign) =>
          campaign.id === editingId
            ? {
                ...campaign,
                name,
                description,
                startDate,
                endDate,
                volunteers: Number(volunteers),
              }
            : campaign
        )
      );
    } else {
      const newCampaign: Campaign = {
        id: Date.now().toString(),
        name,
        description,
        startDate,
        endDate,
        volunteers: Number(volunteers),
      };

      setCampaigns((currentCampaigns) => [
        ...currentCampaigns,
        newCampaign,
      ]);
    }

    resetForm();
    setOpen(false);
  };

  const handleOpenDelete = (id: string) => {
    setDeleteId(id);
  };

  const handleCloseDelete = () => {
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    if (!deleteId) return;

    setCampaigns((currentCampaigns) =>
      currentCampaigns.filter(
        (campaign) => campaign.id !== deleteId
      )
    );

    setDeleteId(null);
  };

  return (
    <CampaignsComponent
      campaigns={campaigns}
      open={open}
      isEditing={editingId !== null}
      deleteOpen={deleteId !== null}
      name={name}
      description={description}
      startDate={startDate}
      endDate={endDate}
      volunteers={volunteers}
      onOpen={handleOpen}
      onClose={handleClose}
      onSave={handleSave}
      onEdit={handleEdit}
      onOpenDelete={handleOpenDelete}
      onCloseDelete={handleCloseDelete}
      onConfirmDelete={handleConfirmDelete}
      setName={setName}
      setDescription={setDescription}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setVolunteers={setVolunteers}
    />
  );
}

export default CampaignsContainer;