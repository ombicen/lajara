import AktuelltCard from "./AktuelltCard";
import { Grid, Container } from "../../node_modules/@mui/material/index";
import styles from "./landingAktuellt.module.css";

const LandingAktuellt = ({ data }) => {
  console.log("LandingAktuellt", data);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Aktuellt.</h2>

      <Container
        sx={{
          maxWidth: "1400px",
          paddingLeft: 2,
          paddingRight: 2,
        }}
        lg={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AktuelltCard />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default LandingAktuellt;
