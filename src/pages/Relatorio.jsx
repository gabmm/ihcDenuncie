import { Button, Box, Typography, Card, CardContent, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

function Relatorio() {
    const cardStyle = {
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        borderRadius: '15px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        },
        backgroundColor: 'gainsboro'
    };

    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#283593',
    };

    const sectionHeader = {
        fontWeight: 'bold',
        color: '#3f51b5',
        marginTop: '1rem',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const dataText = {
        marginBottom: '0.5rem',
        lineHeight: '1.8',
        fontSize: '1rem',
        color: '#555',
    };

    const buttonStyles = (status) => ({
        marginTop: 15,
        backgroundColor: status === 'ENCERRADO' ? '#4caf50' : status === 'POUCO URGENTE' ? '#ffeb3b' : '#ff5722',
        color: status === 'POUCO URGENTE' ? '#333' : '#fff', 
        padding: '10px 20px',
        borderRadius: '25px',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: status === 'ENCERRADO' ? '#388e3c' : status === 'POUCO URGENTE' ? '#fdd835' : '#e64a19',
        },
    });

    return (
        <>
            <Typography sx={{
                position: 'fixed',
                right: '350px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontWeight: 'bold',
                color: '#999',
                zIndex: 1000,
                '@media (max-width:1500px)': { right: '15px', top: '70%' },
                '@media (max-width:800px)': { right: '-35px', top: '70%' }
            }}>
                Legenda
                {['#f44336', '#ffeb3b', '#9e9e9e', '#4caf50'].map((color, index) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }} key={index}>
                        <Box sx={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px' }} />
                        <Typography variant="body1" sx={{ color: '#555' }}>
                            {['Urgente', 'Pouco Urgente', 'Sem urgência', 'Concluído'][index]}
                        </Typography>
                    </Box>
                ))}
            </Typography>
            {['Joana', 'Rafaela', 'Pedro'].map((nome, index) => (
                <Card sx={cardStyle} key={index}>
                    <CardContent>
                        <Typography sx={titleStyle}>{`CASO ${index + 1}: ${nome}`}</Typography>
                        <Divider sx={{ margin: '1rem 0' }} />
                        <Typography sx={sectionHeader}>
                            <LocationOnIcon /> Dados do Local
                        </Typography>
                        <Box sx={dataText}>
                            <Typography><b>Rua:</b> {index === 0 ? 'Avenida Paulista' : index === 1 ? 'Rua das Flores' : 'Avenida Sete de Setembro'}</Typography>
                            <Typography><b>Número:</b> {index === 0 ? '1578' : index === 1 ? '256' : '1450'}</Typography>
                            <Typography><b>Bairro:</b> {index === 0 ? 'Bela Vista' : index === 1 ? 'Centro' : 'Vila Mariana'}</Typography>
                            <Typography><b>Cidade:</b> {index === 0 ? 'São Paulo' : index === 1 ? 'Curitiba' : 'Rio de Janeiro'}</Typography>
                            <Typography><b>Estado:</b> {index === 0 ? 'SP' : index === 1 ? 'PR' : 'RJ'}</Typography>
                            <Typography><b>CEP:</b> {index === 0 ? '01310-200' : index === 1 ? '80020-150' : '22050-002'}</Typography>
                            <Typography><b>Complemento:</b> {index === 0 ? '10º Andar' : index === 1 ? 'Apartamento 302' : 'Casa 11'}</Typography>
                        </Box>
                        <Typography sx={sectionHeader}>
                            <SecurityIcon /> Dados da Vulnerabilidade
                        </Typography>
                        <Box sx={dataText}>
                            <Typography><b>Tipo de Vulnerabilidade:</b> {index === 0 ? 'Abandono' : index === 1 ? 'Trabalho Infantil' : 'Negligência Educacional'}</Typography>
                            <Typography><b>Descrição:</b> {index === 0 ? 'A criança foi deixada sozinha em casa sem supervisão por longos períodos, sem acesso a alimentos ou cuidados adequados.':
                             index === 1 ? 'Uma criança de 10 anos está sendo forçada a trabalhar em uma feira local, carregando caixas pesadas durante todo o dia, sem acesso à educação.' :
                              'Crianças em idade escolar não estão sendo inscritas ou levadas à escola, permanecendo em casa sem supervisão educacional ou suporte adequado.'}</Typography>
                        </Box>
                        <Button variant="contained" sx={buttonStyles(index === 1 ? 'ENCERRADO' : index === 0 ? 'POUCO URGENTE' : 'EM ABERTO')}>
                            {index === 1 ? <CheckCircleOutlineIcon /> : index === 0 ? <HourglassEmptyIcon /> : <ErrorOutlineIcon />}
                            {index === 1 ? 'ENCERRADO' : index === 0 ? 'POUCO URGENTE' : 'EM ABERTO'}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export default Relatorio;
