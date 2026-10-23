import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
} from "@mui/material";
import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* NAVBAR */}

      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Banco de Alimentos
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button color="inherit">
                Cómo ayudamos
              </Button>

              <Button color="inherit">
                Campañas
              </Button>

              <Button
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}

      <Box
        sx={{
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f1f8e9",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
              >
                Rescatamos alimentos.
                Ayudamos a quienes más lo necesitan.
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  mb: 4,
                  maxWidth: 650,
                }}
              >
                Trabajamos junto a empresas, organizaciones y
                voluntarios para evitar el desperdicio de alimentos
                y ayudar a comunidades que lo necesitan.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  document
                    .getElementById("campanias")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Ver campañas
              </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* IMPACTO */}

      <Box
        sx={{
          py: 8,
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 5 }}
          >
            Nuestro impacto
          </Typography>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: "center" }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="primary"
                  >
                    12.500 kg
                  </Typography>

                  <Typography color="text.secondary">
                    Alimentos entregados
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: "center" }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="primary"
                  >
                    35
                  </Typography>

                  <Typography color="text.secondary">
                    Organizaciones beneficiarias
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ textAlign: "center" }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="primary"
                  >
                    4.800
                  </Typography>

                  <Typography color="text.secondary">
                    Personas asistidas
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* COMO FUNCIONA */}

      <Box
        sx={{
          py: 8,
          backgroundColor: "#fafafa",
        }}
      >
        <Container maxWidth="lg">

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 5 }}
          >
            ¿Cómo funciona?
          </Typography>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    1. Donación
                  </Typography>

                  <Typography color="text.secondary">
                    Empresas y particulares donan alimentos
                    aptos para consumo.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    2. Clasificación
                  </Typography>

                  <Typography color="text.secondary">
                    Los alimentos son clasificados y almacenados
                    controlando su cantidad y vencimiento.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    3. Entrega
                  </Typography>

                  <Typography color="text.secondary">
                    Los alimentos son distribuidos entre
                    organizaciones beneficiarias.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* CAMPAÑAS */}

      <Box
        id="campanias"
        sx={{
          py: 8,
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="lg">

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
          >
            Campañas activas
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 1, mb: 5 }}
          >
            Conocé nuestras próximas campañas de recolección.
          </Typography>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Colecta de Alimentos 2026
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Recolección de alimentos no perecederos para
                    organizaciones beneficiarias.
                  </Typography>

                  <Typography>
                    1 al 30 de noviembre
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Navidad Solidaria
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Campaña especial de alimentos para acompañar
                    a familias durante las fiestas.
                  </Typography>

                  <Typography>
                    1 al 22 de diciembre
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* CTA */}

      <Box
        sx={{
          py: 8,
          backgroundColor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            Cada alimento cuenta
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 3 }}
          >
            Sumate a nuestras campañas y ayudanos a reducir
            el desperdicio de alimentos.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "primary.main",
            }}
            onClick={() => {
              document
                .getElementById("campanias")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Ver campañas
          </Button>

        </Container>
      </Box>

      {/* FOOTER */}

      <Box
        component="footer"
        sx={{
          py: 4,
          backgroundColor: "#212121",
          color: "white",
        }}
      >
        <Container maxWidth="lg">

          <Typography         variant="h6"
            fontWeight="bold" >
            Banco de Alimentos
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 1 }}
          >
            Sistema de Gestión de Banco de Alimentos
          </Typography>

          <Typography
            variant="body2"
            color="grey.400"
            sx={{ mt: 2 }}
          >
            © 2026 Banco de Alimentos
          </Typography>

        </Container>
      </Box>
    </Box>
  );
}

export default HomeComponent;