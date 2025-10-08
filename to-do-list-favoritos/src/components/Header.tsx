import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Header: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
                TO DO LIST
            </Typography>
        </Container>
    );
};

export default Header;