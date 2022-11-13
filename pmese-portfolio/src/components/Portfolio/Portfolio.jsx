import React, { useState } from "react";
import styles from './Portfolio.module.css';
import { ImageModal } from "../ImageModal/ImageModal";
import { useNavigate } from "react-router-dom";

export const Portfolio = (props) => {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const openImageModal = (source) => {
        console.log(source);
        setModalImageSource(bigBoyImages[source]);
        setIsOpen(true);
    }

    const closeImageModal = () => {
        setIsOpen(false);
    }

    const handleHome = () => {
        navigate('/');
    }

    const [isOpen, setIsOpen] = useState(false)
    const [modalImageSource, setModalImageSource] = useState('')
    const navigate = useNavigate()

    const thumbnailImageSources = importAll(require.context('../../compressedImages', false, /\.(png|jpe?g|svg)$/));
    const bigBoyImages = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/))

    let imageNames = []
    for (const prop in thumbnailImageSources) {
        imageNames.push(prop)
    }

    let actualImages = [] 
    imageNames.forEach((x, index) => {
        actualImages.push(
            <div className={styles.imagesContainer__singleImg} onClick={() => openImageModal(x)} key={index}>
                <img src={thumbnailImageSources[x]} alt='' height={400} width={400}/>
            </div>
        )
    })

    return (
        <>
        <div className={styles.portfolioWrapper}>
            <button className={styles.homeButton} onClick={handleHome}>
                Home
            </button>
            <div className={styles.overflowContainer}>
                <div className={styles.imagesContainer}>
                    {actualImages}
                </div>
            </div>
        </div>
        <ImageModal isOpen={isOpen} closeModal={closeImageModal} imageSource={modalImageSource}/>
        </>
    )
}