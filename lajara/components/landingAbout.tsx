
import Grid from '@mui/material/Unstable_Grid2';
const LandingAbout = ({ data }) => {
  console.log("LandingAbout", data);

  return (
    <div className="landing-about">
      <Grid container>
        <Grid xs={4}>
    
            <img src={data.featuredImage.node.sourceUrl} />
          
        </Grid>
        <Grid xs={8}  dangerouslySetInnerHTML={{ __html: data.content}}>
          
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingAbout;
 