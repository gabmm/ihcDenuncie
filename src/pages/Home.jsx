import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/protecao.jpg';

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", 
          height: "100vh", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "40px",
            borderRadius: "10px",
            animation: "fadeIn 2s ease-in-out",
            transition: "transform 0.8s ease-in-out", 
            transform: "scale(1)", 
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
            "&:hover":{
              transform: "scale(1.05)",
            },
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Proteja o Futuro das Crianças.
          </Typography>
          <Typography variant="h5" paragraph>
            Faça sua parte. Denuncie, proteja e transforme a vida das crianças
            de Juiz de Fora, MG.
          </Typography>
          <Link to="/report">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#1976d2",
                },
              }}
            >
              Denunciar
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ajude menores em vulnerabilidade social com a Proteção Social
          </Typography>
          <Typography variant="body1" paragraph>
            Conheça a Proteção Social, uma solução focada na proteção de menores em
            situação de vulnerabilidade. Com ela, você pode fazer denúncias de
            forma rápida e anônima.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Como Ajudar?
          </Typography>
          <Typography variant="body1" paragraph>
            Veja como você pode fazer a diferença na vida de crianças e
            adolescentes em situação de risco.
          </Typography>
          <Link to="/">
            <Button variant="outlined" color="primary" size="large" sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}>
              Saiba mais
            </Button>
          </Link>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#e0e0e0" }}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
                },
              }}
            >
              <Typography variant="h6">Denúncias Anônimas</Typography>
              <Typography variant="body2" paragraph>
                As denúncias são completamente anônimas, garantindo a segurança
                de quem reporta.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
                },
              }}>
              <Typography variant="h6">Assistência Social</Typography>
              <Typography variant="body2" paragraph>
                A SisDen oferece um sistema robusto para conectar denúncias a
                assistentes sociais.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
                },
              }}>
              <Typography variant="h6">Apoio à Família</Typography>
              <Typography variant="body2" paragraph>
                Oferecemos suporte às famílias de menores em risco, promovendo
                programas de assistência.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
