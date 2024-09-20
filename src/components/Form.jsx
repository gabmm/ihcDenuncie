import React, { useState } from "react"; 
import VitimaForm from "./VitimaForm";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Typography, Stepper, Step, StepLabel } from '@mui/material';

const usarCamposFormulario = (estadoInicial) => {
    const [campos, setCampos] = useState(estadoInicial);
    const [tocados, setTocados] = useState({});
  
    const manipularMudanca = (campo) => (evento) => {
      setCampos({
        ...campos,
        [campo]: evento.target.value
      });
      setTocados({
        ...tocados,
        [campo]: true
      });
    };
  
    const manipularDesfoque = (campo) => () => {
      setTocados({
        ...tocados,
        [campo]: true
      });
    };
  
    const obterPropriedadesCampo = (campo) => ({
      value: campos[campo],
      onChange: manipularMudanca(campo),
      onBlur: manipularDesfoque(campo),
      error: tocados[campo] && !campos[campo],
      helperText: tocados[campo] && !campos[campo] ? "Campo obrigatório" : undefined
    });
  
    return { obterPropriedadesCampo };
};

const Form = () => {
    const [passos, setPassos] = useState(1);
    const totalPassos = 4;
    const opcoes = ['Violência Física', 'Abandono', 'Abuso Sexual', 'Trabalho Infantil'];

    const { obterPropriedadesCampo } = usarCamposFormulario({
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        complemento: '',
        texto: ''
      });

    const [tipoVul, setTipoVul] = useState('');
    const [texto, setTexto] = useState('');
    const [vitimas, setVitimas] = useState([{}]);

    const proximo = () => {
        setPassos(passos + 1);
    };

    const anterior = () => {
        if (passos > 1) setPassos(passos - 1);
    };

    const enviarFormulario = () => {
        console.log("Formulário Enviado.");
    };
  
    const [number, setNumber] = useState('');

    const valida_numero = (event) => {
        const value = event.target.value;
        const re = /^[0-9\b]+$/; 
        if (value === '' || re.test(value)) {
        setNumber(value);
        }
    };
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '1rem',
                boxSizing: 'border-box',
                backgroundColor: '#f0f4f8', 
            }}
        >
            {}
            <Box sx={{ width: '100%',
                        maxWidth: '700px',
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '15px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        }}>
                {}
                <Stepper activeStep={passos - 1} sx={{ marginBottom: 4 }}>
                    {['Dados do Local', 'Vítimas', 'Vulnerabilidade', 'Revisão'].map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {}
                {passos === 1 && (
                    <>
                        <Typography variant="h6" gutterBottom>Dados do Local</Typography>
                        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                            <TextField
                            required={true}
                            id="endereco-rua"
                            label="Rua"
                            variant="outlined"
                            sx={{
                                marginBottom: "40px",
                                marginRight: "10px",
                                width: "70%"
                            }}
                           
                            fullWidth={true}
                            {...obterPropriedadesCampo('rua')}
                            />
                             <TextField
                                required={true}
                                id="endereco-numero"
                                label="Número"
                                value={number}
                                variant="outlined"
                                onChange={valida_numero}
                                sx={{
                                    marginBottom: "40px",
                                    marginRight: "10px",
                                    width: "24%"}}
                                {...obterPropriedadesCampo('numero')}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                        <TextField
                            required
                            id="endereco-bairro"
                            label="Bairro"
                            variant="outlined"
                            sx={{
                                marginBottom: "40px",
                                marginRight: "10px",
                                width: "30%"}}
                            {...obterPropriedadesCampo('bairro')}
                            />
                        <TextField
                            required
                            id="endereco-cidade"
                            label="Cidade"
                            variant="outlined"
                            sx={{
                                marginBottom: "40px",
                                marginRight: "10px",
                                width: "40%"}}
                            {...obterPropriedadesCampo('cidade')}
                        />

                        <TextField
                            required
                            id="endereco-estado"
                            label="estado"
                            variant="outlined"
                            sx={{
                                marginBottom: "40px",
                                marginRight: "10px",
                                width: "20%"}}
                            {...obterPropriedadesCampo('estado')}
                        />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                        <TextField
                            id="endereco-complemento"
                            label="Complemento"
                            variant="outlined"
                            sx={{width: "500px", marginRight: "10px"}}
                            multiline={true}
                            maxRows={6}
                        />
                        <TextField
                            required
                            id="endereco-CEP"
                            label="CEP"
                            variant="outlined"
                            sx={{
                                marginBottom: "40px",
                                marginRight: "10px",
                                width: "23%"}}
                        />
                        </Box>

                        {}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Button disabled={passos === 1} onClick={anterior}>
                                Anterior
                            </Button>
                            <Button variant="contained" onClick={proximo}>
                                Próximo
                            </Button>
                        </Box>
                    </>
                )}

                {passos === 2 && (
                    <>
                        <Typography variant="h6" gutterBottom>Vítimas</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {vitimas.map((_, index) => (
                                <VitimaForm key={index} index={index} />
                            ))}
                            <Button variant="contained" onClick={() => setVitimas([...vitimas, {}])}>Adicionar Vítima</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Button onClick={anterior}>Anterior</Button>
                            <Button variant="contained" onClick={proximo}>Próximo</Button>
                        </Box>
                    </>
                )}

                {passos === 3 && (
                    <>
                        <Typography variant="h6" gutterBottom>Tipo de Vulnerabilidade</Typography>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <InputLabel>Tipo de Vulnerabilidade</InputLabel>
                            <Select
                                value={tipoVul}
                                onChange={(e) => setTipoVul(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>Nenhum</em>
                                </MenuItem>
                                {opcoes.map((opcao, index) => (
                                    <MenuItem key={index} value={opcao}>
                                        {opcao}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Descrição da Ocorrência"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Button onClick={anterior}>Anterior</Button>
                            <Button variant="contained" onClick={proximo}>Próximo</Button>
                        </Box>
                    </>
                )}

                {passos === 4 && (
                    <>
                        <Typography variant="h6" gutterBottom>Revisão</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Button onClick={anterior}>Anterior</Button>
                            <Button variant="contained" onClick={enviarFormulario}>Enviar</Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Form;
