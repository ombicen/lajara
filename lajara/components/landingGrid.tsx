
import Box from '@mui/material/Box';

const LandingGrid = ({ data }) => {
  // console.log("LandingGrid", data);

  return (
    <div className="landing-grid">
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
  <Box gridColumn="span 8">
    <Item>xs=8</Item>
  </Box>
  <Box gridColumn="span 4">
    <Item>xs=4</Item>
  </Box>
  <Box gridColumn="span 4">
    <Item>xs=4</Item>
  </Box>
  <Box gridColumn="span 8">
    <Item>xs=8</Item>
  </Box>
</Box>
    </div>
  );
};
export default LandingGrid;
 