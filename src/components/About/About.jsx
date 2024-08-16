import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} 
            alt="About image" 
             />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} 
                alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I am Frontend Developer with expertise in bilding responsive and optimised websites</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} 
                alt="Server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>Proficient in developing fast and optimised back-end systems</p>
                </div>
                </li>
                
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} 
                alt="UI Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Aspiring Data Analyst</h3>
                    <p> Passion for Data Analysis and aspire to become Junior Data Analyst </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
