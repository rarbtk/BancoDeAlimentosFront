import { useState } from "react";
import DonationsComponent from "../components/DonationsComponent";
import type { Donation } from "../types/Donation";

function DonationsContainer() {
  const [donations, setDonations] = useState<Donation[]>([
    {
      id: "1",
      donorId: "1",
      donorName: "Supermercado Norte",
      product: "Arroz",
      quantity: 50,
      expirationDate: "2027-03-10",
    },
    {
      id: "2",
      donorId: "2",
      donorName: "Juan Pérez",
      product: "Leche",
      quantity: 20,
      expirationDate: "2026-12-15",
    },
  ]);

  const donors = [
    { id: "1", name: "Supermercado Norte" },
    { id: "2", name: "Juan Pérez" },
  ];

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [donorId, setDonorId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const resetForm = () => {
    setDonorId("");
    setProduct("");
    setQuantity("");
    setExpirationDate("");
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

  const handleEdit = (donation: Donation) => {
    setEditingId(donation.id);
    setDonorId(donation.donorId);
    setProduct(donation.product);
    setQuantity(donation.quantity.toString());
    setExpirationDate(donation.expirationDate);

    setOpen(true);
  };

  const handleAddDonation = () => {
    if (!donorId || !product || !quantity || !expirationDate) {
      alert("Complete todos los campos");
      return;
    }

    const selectedDonor = donors.find(
      (donor) => donor.id === donorId
    );

    if (!selectedDonor) return;

    const newDonation: Donation = {
      id: Date.now().toString(),
      donorId,
      donorName: selectedDonor.name,
      product,
      quantity: Number(quantity),
      expirationDate,
    };

    setDonations((currentDonations) => [
      ...currentDonations,
      newDonation,
    ]);

    resetForm();
    setOpen(false);
  };

  const handleUpdateDonation = () => {
    if (!donorId || !product || !quantity || !expirationDate) {
      alert("Complete todos los campos");
      return;
    }

    const selectedDonor = donors.find(
      (donor) => donor.id === donorId
    );

    if (!selectedDonor) return;

    setDonations((currentDonations) =>
      currentDonations.map((donation) =>
        donation.id === editingId
          ? {
              ...donation,
              donorId,
              donorName: selectedDonor.name,
              product,
              quantity: Number(quantity),
              expirationDate,
            }
          : donation
      )
    );

    resetForm();
    setOpen(false);
  };

  const handleSave = () => {
    if (editingId) {
      handleUpdateDonation();
    } else {
      handleAddDonation();
    }
  };

  const handleOpenDelete = (id: string) => {
    setDeleteId(id);
  };

  const handleCloseDelete = () => {
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    if (!deleteId) return;

    setDonations((currentDonations) =>
      currentDonations.filter(
        (donation) => donation.id !== deleteId
      )
    );

    setDeleteId(null);
  };

  return (
    <DonationsComponent
      donations={donations}
      donors={donors}
      open={open}
      isEditing={editingId !== null}
      deleteOpen={deleteId !== null}
      donorId={donorId}
      product={product}
      quantity={quantity}
      expirationDate={expirationDate}
      onOpen={handleOpen}
      onClose={handleClose}
      onSave={handleSave}
      onEdit={handleEdit}
      onOpenDelete={handleOpenDelete}
      onCloseDelete={handleCloseDelete}
      onConfirmDelete={handleConfirmDelete}
      setDonorId={setDonorId}
      setProduct={setProduct}
      setQuantity={setQuantity}
      setExpirationDate={setExpirationDate}
    />
  );
}

export default DonationsContainer;