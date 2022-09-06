import Skeleton from '@mui/material/Skeleton';
import styles from './logo.module.css'
import {
    Container,
    Typography
} from "@mui/material";
const LogoDisplay = ({ data }) => {
    console.log('Logodisplay', data);
    if (!data || data.length < 1)
        return (<Skeleton variant="rectangular" width={'100%'} height={'100px'} animation='wave' sx={{
            bgcolor: '#000'
        }} />);
    return (
        <div className={styles["logo-display"]}>
            <Container sx={{
                maxWidth: "1400px",
                display: "flex"
            }}>
                <Typography variant="h2" sx={{
                    color: "white",
                    fontSize: "26px"
                }}>Samarbetspartners</Typography>
                <Container sx={{
                    display: "flex",
                    gap: "50px",
                    marginLeft: "50px"
                }}>
                    {data.map(logo => (
                        <img src={logo.sourceUrl} alt={logo.title} key={logo.title} />
                    ))}
                </Container>
            </Container>
        </div>
    )
}
export default LogoDisplay;