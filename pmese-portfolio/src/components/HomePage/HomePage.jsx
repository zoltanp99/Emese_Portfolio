import styles from './HomePage.module.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {
    const biographyRef = useRef(null);
    const navigate = useNavigate();

    const aboutMe = `
    My name is Emese Ban, I am a graphics designer.
    
    Currently I am attending my senior year, majoring in Graphical Engineering and Design at the Higher Education Technical School of Professional Studies in Novi Sad. Before I started studying to be a designer, i worked as a goldsmith's assistant at the "Šiket" Jewelry store, also in Novi Sad.
    
    I like to think I am devoted to my work, open minded, and a team-player. I get across to people and adjust to changes with ease. My belief is that a person always has to strive to get better and evolve professionally, but also keep improving on oneself.
    
    Currently I am open to new possibilities in my career which would help me refine my skills in both art and design.
    `

    const handleClick = () =>{
        biographyRef.current?.scrollIntoView({behavior: 'smooth'})
    };

    const handleNavigate = () =>{
        navigate('/Portfolio')
        window.scrollTo(0, 0)
    }

    return (
      <div className={styles.homePageWrapper}>
        <div className={styles.titleContainer}>
            <h1 className={styles.name}>Emese Bán</h1>
            <h2 className={styles.titles}>Artist - Graphics Designer - Actress</h2>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick}>Who am I?</button>
                <button className={styles.button} onClick={handleNavigate}>Portfolio</button>
            </div>
        </div>
        <div className={styles.biographyContainer} ref={biographyRef}>
            <h1>About Me</h1>
            <h2>
                <i>My name is Emese Ban, I am a graphics designer.</i>
            </h2>
            <div className={styles.paragraphContainer}>
                <p>
                    Currently I am attending my senior year at university, majoring in Graphical Engineering and Design at the <i>Higher Education Technical School of Professional Studies</i> in Novi Sad. Before I started studying to be a designer, i worked as a goldsmith's assistant at the <em>Šiket</em> Jewelry store, also in Novi Sad.
                </p>
            </div>
            <div className={styles.paragraphContainer}>
                <p>
                    I like to think I am devoted to my work, open minded, and a team-player. I get across to people and adjust to changes with ease. My belief is that a person always has to strive to get better and evolve professionally, but also keep improving on oneself.
                </p>
            </div>
            <div className={styles.paragraphContainer}>
                <p>
                    Right now I am open to new possibilities in my career which would help me refine my skills in both art and design.
                </p>
            </div>
        <div className={styles.footer}>
            <div className={styles.emeseSocials}>
                <span>Contact:</span>
                <a href='mailto:emeseban5@gmail.com' className={styles.contactText}>emeseban5@gmail.com</a>
            </div>
            <div className={styles.emeseSocials}>
                <span>Socials</span>
                <a href='https://www.instagram.com/ema_ban_/' className={styles.contactText}>Instagram</a>
                <a href='https://www.facebook.com/emese.ban.3' className={styles.contactText}>Facebook</a>
                <a href='https://rs.linkedin.com/' className={styles.contactText}>LinkedIn</a>
            </div>
        </div>
        </div>
      </div>
    );
  }