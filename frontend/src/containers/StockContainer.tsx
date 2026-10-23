import { useState } from "react";
import StockComponent from "../components/StockComponent";
import type { StockItem } from "../types/StockItem";

function StockContainer() {
  const [stock] = useState<StockItem[]>([
    {
      id: "1",
      product: "Arroz",
      quantity: 50,
      expirationDate: "2027-03-10",
    },
    {
      id: "2",
      product: "Leche",
      quantity: 20,
      expirationDate: "2026-12-15",
    },
    {
      id: "3",
      product: "Fideos",
      quantity: 35,
      expirationDate: "2026-11-30",
    },
  ]);

  return <StockComponent stock={stock} />;
}

export default StockContainer;