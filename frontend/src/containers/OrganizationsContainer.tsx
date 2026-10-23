import { useState } from "react";
import OrganizationsComponent from "../components/OrganizationsComponent";
import  type {Organization} from "../types/Organization";

function OrganizationsContainer() {
  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      id: "1",
      name: "Comedor Los Pibes",
      address: "Av. Rivadavia 1234",
      peopleCount: 80,
    },
    {
      id: "2",
      name: "Fundación Esperanza",
      address: "Av. Corrientes 2500",
      peopleCount: 120,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [peopleCount, setPeopleCount] = useState("");

  const resetForm = () => {
    setName("");
    setAddress("");
    setPeopleCount("");
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

  const handleEdit = (organization: Organization) => {
    setEditingId(organization.id);
    setName(organization.name);
    setAddress(organization.address);
    setPeopleCount(organization.peopleCount.toString());

    setOpen(true);
  };

  const handleSave = () => {
    if (!name || !address || !peopleCount) {
      alert("Complete todos los campos");
      return;
    }

    if (editingId) {
      setOrganizations((currentOrganizations) =>
        currentOrganizations.map((organization) =>
          organization.id === editingId
            ? {
                ...organization,
                name,
                address,
                peopleCount: Number(peopleCount),
              }
            : organization
        )
      );
    } else {
      const newOrganization: Organization = {
        id: Date.now().toString(),
        name,
        address,
        peopleCount: Number(peopleCount),
      };

      setOrganizations((currentOrganizations) => [
        ...currentOrganizations,
        newOrganization,
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

    setOrganizations((currentOrganizations) =>
      currentOrganizations.filter(
        (organization) => organization.id !== deleteId
      )
    );

    setDeleteId(null);
  };

  return (
    <OrganizationsComponent
      organizations={organizations}
      open={open}
      isEditing={editingId !== null}
      deleteOpen={deleteId !== null}
      name={name}
      address={address}
      peopleCount={peopleCount}
      onOpen={handleOpen}
      onClose={handleClose}
      onSave={handleSave}
      onEdit={handleEdit}
      onOpenDelete={handleOpenDelete}
      onCloseDelete={handleCloseDelete}
      onConfirmDelete={handleConfirmDelete}
      setName={setName}
      setAddress={setAddress}
      setPeopleCount={setPeopleCount}
    />
  );
}

export default OrganizationsContainer;