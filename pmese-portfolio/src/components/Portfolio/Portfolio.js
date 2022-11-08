import React from "react";
import styles from './Portfolio.module.css';

export const Portfolio = (props) => {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const thumbnailImageSources = importAll(require.context('../../compressedImages', false, /\.(png|jpe?g|svg)$/));

    let imageNames = []
    for (const prop in thumbnailImageSources) {
        imageNames.push(prop)
    }

    let actualImages = [] 
    imageNames.forEach((x, index) => {
        actualImages.push(
            <div className={styles.imagesContainer__singleImg}>
                <img src={thumbnailImageSources[x]} alt='' height={400} width={400} key={index}/>
            </div>
        )
    })

    return (
        <div className={styles.portfolioWrapper}>
            <button className={styles.homeButton}>
                Home
            </button>
            <div className={styles.overflowContainer}>
                <div className={styles.imagesContainer}>
                    {actualImages}
                </div>
            </div>
        </div>
    )
}