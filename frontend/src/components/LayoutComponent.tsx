import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type LayoutComponentProps = {
  children: ReactNode;
};

function LayoutComponent({ children }: LayoutComponentProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Donantes", path: "/donors" },
    { text: "Donaciones", path: "/donations" },
    { text: "Organizaciones", path: "/organizations" },
    { text: "Entregas", path: "/deliveries" },
    { text: "Campañas", path: "/campaigns" },
    { text: "Stock", path: "/stock" },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Banco de Alimentos
          </Typography>
        </Box>

        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default LayoutComponent;