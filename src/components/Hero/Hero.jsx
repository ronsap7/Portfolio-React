import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi! I am Rohan</h1>
            <p className={styles.description}>I am a Full Stack Developer using React and NodeJS. Reach out if you would like to learn more!</p>
            <a className={styles.contactBtn} href="mailto:rhnsapate16@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/Bild.png")} alt="Hero Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomButton}/>
    </section>
  );
};

