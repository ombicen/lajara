import { Skeleton, Button, Typography } from '@mui/material';

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
                <div className={styles.hero__titles}>
                    <Typography variant="subtitle1" sx={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        letterSpacing: "5px"
                    }} gutterBottom className="hero__title">{data.overRubrik}</Typography>
                    <Typography variant="h2" gutterBottom className="hero__title">{data.huvudRubrik}</Typography>
                </div>

                <Typography variant="p" className="hero__text" sx={{
                    fontSize: "16px"
                }}>{data.beskrivning}</Typography>
                <div className={styles.hero__buttons}>
                    {data.knappar.map((button, index) => (
                        <Button href={button.lank} variant={(index % 2 == 0 ? "contained" : "outlined")} className="hero__button" sx={{
                            padding: "15px 30px",
                            fontSize: "16px",
                            fontWeight: "400",
                            boxShadow: "none",
                            ...(index % 2 == 0 && {
                                background: "#2E8F3D",
                                color: "white"
                            }),
                            ...(index % 2 == 1 && {
                                background: "white",
                                color: "black"
                            })

                        }} key={button.knappText}>{button.knappText}</Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Hero;