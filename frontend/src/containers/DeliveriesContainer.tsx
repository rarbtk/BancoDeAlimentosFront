import { useState } from "react";
import type { Delivery } from "../types/Delivery";
import DeliveriesComponent from "../components/DeliveriesComponent";

function DeliveriesContainer() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: "1",
      organizationId: "1",
      organizationName: "Comedor Los Pibes",
      product: "Arroz",
      quantity: 10,
      deliveryDate: "2026-10-25",
    },
  ]);

  const organizations = [
    {
      id: "1",
      name: "Comedor Los Pibes",
    },
    {
      id: "2",
      name: "Fundación Esperanza",
    },
  ];

  const stock = [
    {
      product: "Arroz",
      quantity: 50,
      expirationDate: "2027-03-10",
    },
    {
      product: "Leche",
      quantity: 20,
      expirationDate: "2026-12-15",
    },
    {
      product: "Fideos",
      quantity: 35,
      expirationDate: "2026-11-30",
    },
  ];

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [organizationId, setOrganizationId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const resetForm = () => {
    setOrganizationId("");
    setProduct("");
    setQuantity("");
    setDeliveryDate("");
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

  const handleEdit = (delivery: Delivery) => {
    setEditingId(delivery.id);

    setOrganizationId(delivery.organizationId);
    setProduct(delivery.product);
    setQuantity(delivery.quantity.toString());
    setDeliveryDate(delivery.deliveryDate);

    setOpen(true);
  };

  const handleSave = () => {
    if (!organizationId || !product || !quantity || !deliveryDate) {
      alert("Complete todos los campos");
      return;
    }

    const selectedOrganization = organizations.find(
      (organization) => organization.id === organizationId
    );

    const selectedStock = stock.find(
      (item) => item.product === product
    );

    if (!selectedOrganization || !selectedStock) {
      return;
    }

    if (Number(quantity) <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }

    if (Number(quantity) > selectedStock.quantity) {
      alert("No hay suficiente stock disponible");
      return;
    }

    if (editingId) {
      setDeliveries((currentDeliveries) =>
        currentDeliveries.map((delivery) =>
          delivery.id === editingId
            ? {
                ...delivery,
                organizationId,
                organizationName: selectedOrganization.name,
                product,
                quantity: Number(quantity),
                deliveryDate,
              }
            : delivery
        )
      );
    } else {
      const newDelivery: Delivery = {
        id: Date.now().toString(),
        organizationId,
        organizationName: selectedOrganization.name,
        product,
        quantity: Number(quantity),
        deliveryDate,
      };

      setDeliveries((currentDeliveries) => [
        ...currentDeliveries,
        newDelivery,
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

    setDeliveries((currentDeliveries) =>
      currentDeliveries.filter(
        (delivery) => delivery.id !== deleteId
      )
    );

    setDeleteId(null);
  };

  return (
    <DeliveriesComponent
      deliveries={deliveries}
      organizations={organizations}
      stock={stock}
      open={open}
      isEditing={editingId !== null}
      deleteOpen={deleteId !== null}
      organizationId={organizationId}
      product={product}
      quantity={quantity}
      deliveryDate={deliveryDate}
      onOpen={handleOpen}
      onClose={handleClose}
      onSave={handleSave}
      onEdit={handleEdit}
      onOpenDelete={handleOpenDelete}
      onCloseDelete={handleCloseDelete}
      onConfirmDelete={handleConfirmDelete}
      setOrganizationId={setOrganizationId}
      setProduct={setProduct}
      setQuantity={setQuantity}
      setDeliveryDate={setDeliveryDate}
    />
  );
}

export default DeliveriesContainer;