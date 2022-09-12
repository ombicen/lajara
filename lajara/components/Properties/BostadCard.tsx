import { Card, CardMedia } from '@mui/material';
const BostadCard = ({ data }) => {
    console.log('bostad', data);
    console.log('bostad',);
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={data.bostad_acf.bildgalleri[0].sourceUrl}
                alt={data.bostad_acf.bildgalleri[0].title}
            >

            </CardMedia>
        </Card>
    );
}
export default BostadCard;