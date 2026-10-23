import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

type LoginComponentProps = {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => void;
};

function LoginComponent({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}: LoginComponentProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography 
            variant="h4"
            component="h1"
            textAlign="center"
            gutterBottom  >
            Banco de Alimentos
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Iniciar sesión
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <TextField
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />

            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              Iniciar sesión
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginComponent;