import BostadCard from './BostadCard'
import styles from './properties.module.css'
import { Container, Grid, Box } from '@mui/material';
import { Typography } from '../../node_modules/@mui/material/index';

const Properties = ({ data }) => {
    console.log('data', data);

    return (
        <div className={styles.section}>
            <Container sx={{
                maxWidth: "1400px",
                display: "flex",
                flexFlow: 'column'
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '32px',
                        fontFamily: 'Lora'
                    }}>Våra bostadsprojekt.</Typography>
                    <Box></Box>
                </Box>
                <Grid container spacing={5}>

                    {
                        data.nodes.map(bostad => (<Grid item xs={6}><BostadCard key={bostad.title} data={bostad} /></Grid>))
                    }
                </Grid>

            </Container>
        </div>
    );
}
export default Properties;