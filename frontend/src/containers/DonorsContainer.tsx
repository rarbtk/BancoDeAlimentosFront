import { useState } from "react";
import DonorsComponent from "../components/DonorsComponent";
import type { Donor } from "../types/Donor";

function DonorsContainer() {
  const [donors, setDonors] = useState<Donor[]>([
    {
      id: "1",
      name: "Supermercado Norte",
      email: "contacto@norte.com",
      phone: "1111111111",
      type: "Empresa",
    },
    {
      id: "2",
      name: "Juan Pérez",
      email: "juan@gmail.com",
      phone: "2222222222",
      type: "Particular",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"Empresa" | "Particular">("Particular");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setType("Particular");
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

  const handleAddDonor = () => {
    if (!name || !email || !phone) {
      alert("Complete todos los campos");
      return;
    }

    const newDonor: Donor = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      type,
    };

    setDonors((currentDonors) => [...currentDonors, newDonor]);

    resetForm();
    setOpen(false);
  };

  const handleEdit = (donor: Donor) => {
    setEditingId(donor.id);

    setName(donor.name);
    setEmail(donor.email);
    setPhone(donor.phone);
    setType(donor.type);

    setOpen(true);
  };

  const handleUpdateDonor = () => {
    if (!name || !email || !phone) {
      alert("Complete todos los campos");
      return;
    }

    setDonors((currentDonors) =>
      currentDonors.map((donor) =>
        donor.id === editingId
          ? {
              ...donor,
              name,
              email,
              phone,
              type,
            }
          : donor
      )
    );

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

  setDonors((currentDonors) =>
    currentDonors.filter((donor) => donor.id !== deleteId)
  );

  setDeleteId(null);
};




  const handleSave = () => {
    if (editingId) {
      handleUpdateDonor();
    } else {
      handleAddDonor();
    }
  };

  return (
    <DonorsComponent
       donors={donors}
  open={open}
  isEditing={editingId !== null}
  deleteOpen={deleteId !== null}
  name={name}
  email={email}
  phone={phone}
  type={type}
  onOpen={handleOpen}
  onClose={handleClose}
  onSave={handleSave}
  onEdit={handleEdit}
  onOpenDelete={handleOpenDelete}
  onCloseDelete={handleCloseDelete}
  onConfirmDelete={handleConfirmDelete}
  setName={setName}
  setEmail={setEmail}
  setPhone={setPhone}
  setType={setType}
    />
  );
}

export default DonorsContainer;