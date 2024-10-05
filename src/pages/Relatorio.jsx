import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SecurityIcon from "@mui/icons-material/Security";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

function Relatorio() {
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [cases, setCases] = useState([
    { nome: "Joana", status: "EM ANDAMENTO" },
    { nome: "Rafaela", status: "ENCERRADO" },
    { nome: "Pedro", status: "URGENTE" },
  ]);

  const handleClickOpen = (index) => {
    setSelectedCase(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleStatusChange = (newStatus) => {
    const updatedCases = [...cases];
    updatedCases[selectedCase].status = newStatus;
    setCases(updatedCases);
    handleClose();
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "600px",
    margin: "20px auto",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
    backgroundColor: "gainsboro",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#1a237e",
  };

  const sectionHeader = {
    fontWeight: "bold",
    color: "#3f51b5",
    marginTop: "1rem",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const dataText = {
    marginBottom: "0.5rem",
    lineHeight: "1.6",
    fontSize: "1rem",
    color: "#555",
  };

  const buttonStyles = (status) => ({
    marginTop: 15,
    backgroundColor:
      status === "ENCERRADO"
        ? "#4caf50"
        : status === "EM ANDAMENTO"
        ? "#9e9e9e"
        : status === "URGENTE"
        ? "#f44336"
        : "#FFA500",
    color: status === "EM ANDAMENTO" ? "#333" : "#fff",
    padding: "10px 25px",
    borderRadius: "30px",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor:
        status === "ENCERRADO"
          ? "#388e3c"
          : status === "EM ANDAMENTO"
          ? "#9e9e9e"
          : status === "URGENTE"
          ? "#d32f2f"
          : "#FF8C00",
      transform: "scale(1.05)",
    },
  });

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Alterar Status do Caso</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px", 
            width: "300px", 
            alignItems: "stretch",
          }}
        >
          <Typography>Escolha o novo status para este caso:</Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleStatusChange("URGENTE")}
          >
            URGENTE
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleStatusChange("POUCO URGENTE")}
          >
            POUCO URGENTE
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => handleStatusChange("EM ANDAMENTO")}
          >
            EM ANDAMENTO
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleStatusChange("ENCERRADO")}
          >
            ENCERRADO
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      <Typography
        sx={{
          position: "fixed",
          right: "350px",
          top: "50%",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          color: "#999",
          zIndex: 1000,
          "@media (max-width:1500px)": { right: "15px", top: "70%" },
          "@media (max-width:800px)": { right: "-35px", top: "70%" },
        }}
      >
        Legenda
        {["#f44336", "#FFA500", "#9e9e9e", "#4caf50"].map((color, index) => (
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
            key={index}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="body1" sx={{ color: "#555" }}>
              {["Urgente", "Pouco Urgente", "Em Andamento", "Concluído"][index]}
            </Typography>
          </Box>
        ))}
      </Typography>
      {cases.map((caso, index) => (
        <Card sx={cardStyle} key={index}>
          <CardContent>
            <Typography sx={titleStyle}>{`CASO ${index + 1}: ${
              caso.nome
            }`}</Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography sx={sectionHeader}>
              <LocationOnIcon /> Dados do Local
            </Typography>
            <Box sx={dataText}>
              <Typography>
                <b>Rua:</b>{" "}
                {index === 0
                  ? "Avenida Paulista"
                  : index === 1
                  ? "Rua das Flores"
                  : "Avenida Sete de Setembro"}
              </Typography>
              <Typography>
                <b>Número:</b>{" "}
                {index === 0 ? "1578" : index === 1 ? "256" : "1450"}
              </Typography>
              <Typography>
                <b>Bairro:</b>{" "}
                {index === 0
                  ? "Bela Vista"
                  : index === 1
                  ? "Centro"
                  : "Vila Mariana"}
              </Typography>
              <Typography>
                <b>Cidade:</b>{" "}
                {index === 0
                  ? "São Paulo"
                  : index === 1
                  ? "Curitiba"
                  : "Rio de Janeiro"}
              </Typography>
              <Typography>
                <b>Estado:</b> {index === 0 ? "SP" : index === 1 ? "PR" : "RJ"}
              </Typography>
              <Typography>
                <b>CEP:</b>{" "}
                {index === 0
                  ? "01310-200"
                  : index === 1
                  ? "80020-150"
                  : "22050-002"}
              </Typography>
              <Typography>
                <b>Complemento:</b>{" "}
                {index === 0
                  ? "10º Andar"
                  : index === 1
                  ? "Apartamento 302"
                  : "Casa 11"}
              </Typography>
            </Box>
            <Typography sx={sectionHeader}>
              <SecurityIcon /> Dados da Vulnerabilidade
            </Typography>
            <Box sx={dataText}>
              <Typography>
                <b>Tipo de Vulnerabilidade:</b>{" "}
                {index === 0
                  ? "Abandono"
                  : index === 1
                  ? "Trabalho Infantil"
                  : "Negligência Educacional"}
              </Typography>
              <Typography>
                <b>Descrição:</b>{" "}
                {index === 0
                  ? "A criança foi deixada sozinha em casa sem supervisão por longos períodos, sem acesso a alimentos ou cuidados adequados."
                  : index === 1
                  ? "Uma criança de 10 anos está sendo forçada a trabalhar em uma feira local, carregando caixas pesadas durante todo o dia, sem acesso à educação."
                  : "Crianças em idade escolar não estão sendo inscritas ou levadas à escola, permanecendo em casa sem supervisão educacional ou suporte adequado."}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={buttonStyles(caso.status)}
              onClick={() => handleClickOpen(index)}
            >
              {caso.status === "ENCERRADO" ? (
                <CheckCircleOutlineIcon />
              ) : caso.status === "EM ANDAMENTO" ? (
                <HourglassEmptyIcon />
              ) : (
                <ErrorOutlineIcon />
              )}
              {caso.status}
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Relatorio;
