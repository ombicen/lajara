import BostadCard from './BostadCard'
import styles from './properties.module.css'
import { Container, Grid, Box } from '@mui/material';

const Properties = ({ data }) => {
    

    return (
        <div className={styles.section}>
            <Container sx={{
                maxWidth: "1400px",
                display: "flex"
            }}>

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