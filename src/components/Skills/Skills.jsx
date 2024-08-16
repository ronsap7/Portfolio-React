
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills and Certifications</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                         <div key={id} className={styles.skill}>
                            <div  className={styles.imageContainer}>
                                <img 
                                src={getImageUrl(skill.imageSrc)} 
                                alt={skill.title} />
                            </div> 
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul  className={styles.certificates}>
                {certificates.map((certificateItem, id) => {
                    return (
                        <li key={id}  className={styles.certificateItem}>
                            <img 
                            src={getImageUrl(certificateItem.imageSrc)}
                             alt="My certifications" 
                             height="100px"
                             />
                             <div  className={styles.certificateItemDetails}>
                                <h3>
                                    {`${certificateItem.name}, 
                                    ${certificateItem.organisation}`}
                                </h3>
                                <p>
                                    {`${certificateItem.startDate} - ${certificateItem.endDate}`}
                                </p>
                                <ul>
                                    {certificateItem.technologies.map((technology, id) => {
                                        return <li key={id}>{technology}</li>;
                                    })}
                                </ul>
                                    
                             </div>
                        </li>
                    )
                        
                })
                    
                }
            </ul>
        </div>
    </section>
  )
}
