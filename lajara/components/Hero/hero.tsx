import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import styles from './hero.module.css'
const Hero = ({ data }) => {
    if (!data.huvudRubrik || data.huvudRubrik.length < 1)
        return (
            <Skeleton variant="rectangular" width={'100%'} height={'calc(100vh - 164px)'} />
        );

    return (
        <div className={styles.hero}>
            <div className={styles.hero__image}>
                <img src={data.heroBild.sourceUrl} alt={data.heroBild.title} />
            </div>
            <div className={styles.hero__content}>
                <h1 className="hero__title">{data.overRubrik}</h1>
                <p className="hero__text">{data.beskrivning}</p>
                <div className="hero__buttons">
                    {data.knappar.map((button, index) => (
                        <Button href={button.lank} variant={(index % 2 == 0 ? "contained" : "outlined")} className="hero__button" key={button.knappText}>{button.knappText}</Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Hero;