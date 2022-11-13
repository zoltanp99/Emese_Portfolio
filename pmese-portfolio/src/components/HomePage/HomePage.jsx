import styles from './HomePage.module.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {
    const biographyRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = () =>{
        biographyRef.current?.scrollIntoView({behavior: 'smooth'})
    };

    const handleNavigate = () =>{
        navigate('/Portfolio')
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
            <div style={{'padding': '5px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
      </div>
    );
  }