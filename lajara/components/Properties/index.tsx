import BostadCard from './BostadCard'
import styles from './properties.module.css'
import { Container } from '@mui/material';

const Properties = ({ data }) => {
    console.log('data', data);

    return (
        <div className={styles.section}>
            <Container sx={{
                maxWidth: "1400px",
                display: "flex"
            }}>
                {
                    data.nodes.map(bostad => (<BostadCard key={bostad.title} data={bostad} />))
                }
            </Container>
        </div>
    );
}
export default Properties;