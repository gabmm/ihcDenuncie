import { Button, Box, Typography } from '@mui/material';

function Relatorio() {
    return (
        <>
        <Typography sx={{ // LEGENDA
                    position: 'fixed', 
                    right: '350px',
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    textOrientation: 'mixed',
                    fontWeight: 'bold',
                    color: 'gray',
                    zIndex: 1000,
                    '@media (max-width:2000px)': {
                        right: '10 px', 
                        top: '70%', 
                        transform: 'translateY(-50%)', 
                    },
                    '@media (max-width:1500px)': {
                        right: '15px', 
                        top: '70%', 
                        transform: 'translateY(-50%)', 
                    },
                    '@media (max-width:800px)': {
                        right: '-35px', 
                        top: '70%', 
                        transform: 'translateY(-50%)', 
                    },
                }}>
                    Legenda Lateral
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Box sx={{
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: 'red', 
                        marginRight: '10px'
                    }} />
                    <Typography variant="body1">Urgente</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Box sx={{
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: 'yellow', 
                        marginRight: '5px' 
                    }} />
                    <Typography variant="body1" sx={{ color: 'gray' }}>Pouco Urgente</Typography>
                   </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Box sx={{
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: 'gray', 
                        marginRight: '5px' 
                    }} />
                    <Typography variant="body1" sx={{ color: 'gray' }}>Sem urgência</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Box sx={{
                        width: '20px', 
                        height: '20px', 
                        backgroundColor: 'green', 
                        marginRight: '5px' 
                    }} />
                    <Typography variant="body1" sx={{ color: 'gray' }}>Concluído</Typography>
                    </Box>
        </Typography>
            <Box sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 minHeight: '70vh', 
                 padding: '2rem',
                 boxSizing: 'border-box',
                 backgroundColor: '#ffff',
                 width: '100%',
                 maxWidth: '500px',
                 borderRadius: '15px',
                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                 margin: 'auto',
                 marginTop: 5,
                 border: '1px solid #ccc',
                position: 'relative'
            }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'darkblue' }}>CASO 1: JOANA</Typography>
                <div style={{width: '100%',borderBottom: '2px solid #eee', marginTop: '1rem'}}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'blue' }}>Dados do Local</Typography>
                    <Typography><b>Rua:</b> Avenida Paulista</Typography>
                    <Typography><b>Número:</b> 1578</Typography>
                    <Typography><b>Bairro:</b> Bela Vista</Typography>
                    <Typography><b>Cidade:</b> São Paulo</Typography>
                    <Typography><b>Estado:</b> SP</Typography>
                    <Typography><b>CEP:</b> 01310-200</Typography>
                    <Typography><b>Complemento:</b> 10º Andar</Typography>
                </div>
                
                <div>
                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: 'blue' }}>Dados da Vulnerabilidade</Typography>
                    <Typography><b>Tipo de Vulnerabilidade:</b> Abandono</Typography>
                    <Typography><b>Descrição:</b> A criança foi deixada sozinha em casa sem supervisão por longos períodos, sem acesso a alimentos ou cuidados adequados.</Typography>
                </div>

                <Button variant="contained" sx={{marginTop: 15, backgroundColor: 'yellow', color: 'black'}}>
                    Em aberto
                </Button>
            </Box>
            <Box sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 minHeight: '70vh', 
                 padding: '2rem',
                 boxSizing: 'border-box',
                 backgroundColor: '#ffff',
                 width: '100%',
                 maxWidth: '500px',
                 borderRadius: '15px',
                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                 margin: 'auto',
                 marginTop: 5
            }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'darkblue' }}>CASO 2: Rafaela</Typography>

                <div style={{width: '100%',borderBottom: '2px solid #eee', marginTop: '1rem'}}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'blue' }}>Dados do Local</Typography>
                    <Typography><b>Rua:</b>Rua: Rua das Flores</Typography>
                    <Typography><b>Número:</b> 256</Typography>
                    <Typography><b>Bairro:</b> Centro</Typography>
                    <Typography><b>Cidade:</b> Curitiba</Typography>
                    <Typography><b>Estado:</b> PR</Typography>
                    <Typography><b>CEP:</b> 80020-150</Typography>
                    <Typography><b>Complemento:</b> Apartamento 302</Typography>
                </div>
               
                <div>
                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color:'blue' }}>Dados da Vulnerabilidade</Typography>
                    <Typography><b>Tipo de Vulnerabilidade:</b> Trabalho Infantil</Typography>
                    <Typography><b>Descrição:</b> Uma criança de 10 anos está sendo
                        forçada a trabalhar em uma feira local, carregando caixas 
                        pesadas durante todo o dia, sem acesso à educação.</Typography>
                </div>
               

                <Button variant="contained" sx={{marginTop: 15, backgroundColor: 'green'}}>
                    ENCERRADO
                </Button>
            </Box>
            <Box sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 minHeight: '70vh', 
                 padding: '2rem',
                 boxSizing: 'border-box',
                 backgroundColor: '#ffff',
                 width: '100%',
                 maxWidth: '500px',
                 borderRadius: '15px',
                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                 margin: 'auto',
                 marginTop: 5
            }}>
                 <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'darkblue' }}>CASO 3: Pedro</Typography>
                <div style={{ width: '100%', borderBottom: '2px solid #eee', marginTop: '1rem' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'blue' }}>Dados do Local</Typography>
                    <Typography><b>Rua:</b> Avenida Sete de Setembro</Typography>
                    <Typography><b>Número:</b> 1450</Typography>
                    <Typography><b>Bairro:</b> Vila Mariana</Typography>
                    <Typography><b>Cidade:</b> Rio de Janeiro</Typography>
                    <Typography><b>Estado:</b> RJ</Typography>
                    <Typography><b>CEP:</b> 22050-002</Typography>
                    <Typography><b>Complemento:</b> Casa 11</Typography>
                </div>

                <div>
                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: 'blue' }}>Dados da Vulnerabilidade</Typography>
                    <Typography><b>Tipo de Vulnerabilidade:</b> Negligência Educacional</Typography>
                    <Typography><b>Descrição:</b> Crianças em idade escolar não estão sendo
                        inscritas ou levadas à escola, permanecendo em casa sem supervisão 
                        educacional ou suporte adequado.</Typography>
                </div>
                <Button variant="contained" sx={{marginTop: 15, backgroundColor: 'RED'}}>
                    EM ABERTO
                </Button>

            </Box>
        </>
    )
}

export default Relatorio;