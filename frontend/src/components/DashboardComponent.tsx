import { Typography } from "@mui/material";
import LayoutComponent from "./LayoutComponent";

function DashboardComponent() {
  return (
    <LayoutComponent>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1">
        Bienvenido al sistema de gestión del Banco de Alimentos.
      </Typography>
    </LayoutComponent>
  );
}

export default DashboardComponent;