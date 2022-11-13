import ReactModal from 'react-modal'
import { GrayX } from '../../svgs/GrayX'
import styles from './ImageModal.module.css'

export const ImageModal = (props) => {

    console.log(props)
    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel='Image Modal'
            className={styles.modalWrapper}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
        >
        <div className={styles.buttonHolder}>
                <button onClick={props.closeModal} className={styles.closeButton}><GrayX/></button>
            </div>
            <div className={styles.imageContainer}>
                <img src={props.imageSource} alt='' className={styles.modalImage}/>
            </div>
        </ReactModal>
    )
}