import React, { useState } from "react";
import './VitimaForm.css';
import { Card, CardContent, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Box } from '@mui/material';


const VitimaForm = ({ vitima, removerVitima }) => {
    return (
           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, flexDirection: 'column'}}>
                <Card sx={{ width: 275, backgroundColor: '#e3f2fd', boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Vítima {vitima.id + 1}
                        </Typography>

                        <TextField
                            label="Apelido"
                            variant="outlined"
                            fullWidth
                            size="small"
                            margin="dense"
                        />

                        <FormControl component="fieldset" margin="dense" fullWidth>
                            <FormLabel required component="legend">Categoria</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="bebê" control={<Radio size="small" />} label="Bebê" />
                                <FormControlLabel value="criança" control={<Radio size="small" />} label="Criança" />
                                <FormControlLabel value="adolescente" control={<Radio size="small" />} label="Adolescente" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" margin="dense" fullWidth>
                            <FormLabel required component="legend">Gênero</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="masculino" control={<Radio size="small" />} label="Masculino" />
                                <FormControlLabel value="feminino" control={<Radio size="small" />} label="Feminina" />
                            </RadioGroup>
                        </FormControl>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={removerVitima}
                            size="small"
                            sx={{ mt: 2 }}
                        >
                            Remover Vítima
                        </Button>
                    </CardContent>
                </Card>
            </Box>
    );
};

export default VitimaForm;
