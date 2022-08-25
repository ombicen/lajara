import Skeleton from '@mui/material/Skeleton';

const Hero = ({ data }) => {
    if (!data.huvudRubrik || data.huvudRubrik.length < 1)
        return (
            <Skeleton variant="rectangular" width={'100%'} height={'calc(100vh - 164px)'} />
        );

    return (
        <div className="hero">
            <div className="hero__image">
                <img src={data.heroBild.sourceUrl} alt={data.heroBild.title} />
            </div>
            <div className="hero__content">
                <h1 className="hero__title">{data.overRubrik}</h1>
                <p className="hero__text">{data.beskrivning}</p>
                <div className="hero__buttons">
                    {data.knappar.map(button => (
                        <a href={button.lank} className="hero__button" key={button.knappText}>{button.knappText}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Hero;