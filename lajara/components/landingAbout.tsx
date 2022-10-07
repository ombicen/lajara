import { Grid, Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const LandingAbout = ({ data }) => {

  console.log('landing', data);

  return (
    <Box sx={{
      padding: '100px 0',
    }}>
      <Container sx={{
        maxWidth: '1400px'
      }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <Grid item xs={12} sm={8} md={5}>
            <img
              style={{
                display: "block",
                margin: "0 auto",
                objectFit: "contain",
                width: "100%",
              }}
              src={data.featuredImage.node.sourceUrl}
            />
          </Grid>
          <Grid xs={12} md={7} sx={{ padding: '0 20px' }} >
            <h2>{data.title}</h2>
            <Box dangerouslySetInnerHTML={{ __html: data.content }} />
            <Button href={'/posts/' + data.slug} variant={"contained"} gap={"20px"}>
              Om våra bostäder{" "}
              <ArrowForwardRoundedIcon sx={{ fontSize: 20, marginLeft: 1 }} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default LandingAbout;
