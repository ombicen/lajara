import styles from "./properties.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AktuelltCard = () => {
  console.log("AktuelltCard");
  console.log("AktuelltCard");
  return (
    <Card elevation={0}>
      <CardMedia
        component="img"
        height="275"
        image="https://picsum.photos/300"
        alt="green iguana"
      />
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </Card>
  );
};
export default AktuelltCard;
