import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const LandingAbout = ({ data }) => {
  console.log("LandingAbout", data);

  return (
    <div className="landing-about">
      <Grid
        container
        maxWidth="lg"
        alignItems="center"
        justifyContent="center"
        style={{ margin: "0 auto" }}
        spacing={4}
      >
        <Grid item xs={12} sm={8} md={5}>
          <img
            style={{
              display: "block",
              margin: "0 auto",
              objectFit: "fit",
              width: "100%",
            }}
            src={data.featuredImage.node.sourceUrl}
          />
        </Grid>
        <Grid xs={12} md={7}>
          <h2>{data.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.content }} />
          <Button href={"#"} variant={"contained"} gap={"20px"}>
            Om våra bostäder{" "}
            <ArrowForwardRoundedIcon sx={{ fontSize: 20, marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingAbout;
