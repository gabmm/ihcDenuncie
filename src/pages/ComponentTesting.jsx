import React from "react";
import './ComponentTesting.css'
import CpfField from "../components/CpfField.jsx";
import {Autocomplete, Box, Button, Checkbox, Fab, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

function AddIcon() {
    return null;
}

function EditIcon() {
    return null;
}

function ComponentTesting (){
    let label = "Coisa 1";
    let options = ["opcao1","opcao2","opcao3","opcao4"]
    let textFieldStyle = {
        marginBottom: "40px",
        marginRight: "10px",
    }

    return (
        <>
            <div className="componentTesting">
                <div className="form-box">
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
                        helperText="A rua em que você mora"
                        error={true}
                        fullWidth={true}
                    />
                    <TextField
                        id="endereco-numero"
                        label="Número"
                        variant="outlined"
                        sx={{
                            marginBottom: "40px",
                            marginRight: "10px",
                            width: "22%"}}
                    />
                    <TextField
                        id="endereco-bairro"
                        label="Bairro"
                        variant="outlined"
                        sx={{
                            marginBottom: "40px",
                            marginRight: "10px",
                            width: "30%"}}
                        />
                    <TextField
                        id="endereco-cidade"
                        label="Cidade"
                        variant="outlined"
                        sx={{
                            marginBottom: "40px",
                            marginRight: "10px",
                            width: "40%"}}
                    />

                    <TextField
                        id="endereco-estado"
                        label="estado"
                        variant="outlined"
                        sx={{
                            marginBottom: "40px",
                            marginRight: "10px",
                            width: "20%"}}
                    />

                    <TextField
                        required={true}
                        id="endereco-complemento"
                        label="Complemento"
                        variant="outlined"
                        sx={{width: "500px", marginRight: "10px"}}
                        multiline={true}
                        maxRows={6}
                    />
                    <TextField
                        id="endereco-CEP"
                        label="CEP"
                        variant="outlined"
                        sx={{
                            marginBottom: "40px",
                            marginRight: "10px",
                            width: "20%"}}
                    />

                </div>
            </div>

        </>
    )
}

export default ComponentTesting;