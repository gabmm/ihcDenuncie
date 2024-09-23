import { useEffect, useState } from 'react';
import Form from "../components/Form";
import { Modal, Box, Typography, Button } from '@mui/material';
import './Report.css';

function Report() {
    const [modal, setModal] = useState(false); 
    const [anonimato, setAnonimato] = useState(null); 

    useEffect(() => {
        setModal(true); 
    }, []);

    const escolheAnonimato = (eAnonimato) => {
        setAnonimato(eAnonimato); 
        setModal(false); 
    };

    return (
        <>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 450,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Preferência de Anonimato
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Você deseja enviar esta denúncia de forma anônima?
                    </Typography>
                    <Box mt={2}
                     sx = {{
                            diplay: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 4,
                            
                        }}>
                        <Button variant="outlined" color="secondary" onClick={() => escolheAnonimato(false)} sx={{marginRight: 19}}>
                            Não
                        </Button>
                        <Button variant="contained" color="primary" sx={{}} onClick={() => escolheAnonimato(true)}
                       >
                            Sim, quero ser anônimo
                        </Button>
                        
                    </Box>
                </Box>
            </Modal>

            <div className="report-container">
                <Form />
            </div>
        </>
    );
}

export default Report;
