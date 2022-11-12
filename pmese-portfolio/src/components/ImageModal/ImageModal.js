import react from 'react'
import ReactModal from 'react-modal'
import styles from './ImageModal.module.css'

export const ImageModal = (props) => {

    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel='Image Modal'
            className={styles.modalWrapper}
            overlayClassName={styles.overlay}
        >
            <div>
                <img src={props.imageSource} alt='' className={styles.modalImage}/>
                <div className={styles.buttonHolder}>
                    <button onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </ReactModal>
    )
}