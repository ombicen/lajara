import { Card, CardMedia, Typography, Chip, Box } from '@mui/material';
import { url } from 'inspector';
import styles from './properties.module.css'

const BostadCard = ({ data }) => {
    console.log('bostad', data);
    console.log('var', data.bostad_acf.detaljer.var);
    let byggstart = new Date(data.bostad_acf.detaljer.byggstart).getTime();
    let inflyttning = new Date(data.bostad_acf.detaljer.inflyttning).getTime();
    let status = (byggstart < new Date().getTime()) ? ((new Date().getTime() < inflyttning) ? "onsale" : "soldout") : "upcomming";
    let readableText = {
        onsale: "Till försäjlning",
        soldout: "Utsåld",
        upcomming: "Lanseras Snart"
    }
    return (
        <Card elevation={0} sx={{ borderRadius: 0 }}>
            <div className={styles['property__card-container']}>
                <Box
                    className={styles['property__card-image']}
                    sx={{
                        background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(' + data.bostad_acf.bildgalleri[0].sourceUrl + ')'
                    }} >

                    <Chip label={readableText[status]} className={`${styles['property__card-chip']} ${styles['property__card-chip-' + status]}`} />
                    <Chip label={data.bostad_acf.detaljer.vad} className={`${styles['property__card-chip']} ${styles['property__card-chip-type']}`} />
                    <Typography gutterBottom variant="h6" component="div" className={styles['property__card-image-title']}>
                        {data.bostad_acf.beskrivning.rubrik}
                    </Typography>
                </Box>
            </div>

            <div className={styles['property__card-content']}>
                <Typography gutterBottom variant="h6" sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#297E36',
                    lineHeight: '0'
                }}>
                    {data.bostad_acf.detaljer.var.city}
                </Typography>
                <Typography gutterBottom variant="h5" sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'black',

                }}>
                    {data.bostad_acf.beskrivning.rubrik}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    maxHeight: '5ch',
                    overflow: 'hidden'
                }}>
                    {data.bostad_acf.beskrivning.text}
                </Typography>
            </div>
        </Card >
    );
}
export default BostadCard;