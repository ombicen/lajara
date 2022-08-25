import Skeleton from '@mui/material/Skeleton';

const LogoDisplay = ({ data }) => {
    console.log('Logodisplay',data);
    if (!data || data.length < 1)
        return (<Skeleton variant="rectangular" width={'100%'} height={'100px'} animation='wave' sx={{
            bgcolor: '#000'
        }} />);
    return (
        <div className="logo-display">
            {data.map(logo => (
                <img src={logo.sourceUrl} alt={logo.title} key={logo.title} />
            ))}
        </div>
    )
}
export default LogoDisplay;