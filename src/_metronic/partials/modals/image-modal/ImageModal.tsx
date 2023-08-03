import React, { FC } from "react";
import Modal from 'react-bootstrap/Modal';

type props = {
    onHide: () => void;
    show: boolean;
    imgURL: string;
}

const ImageModal: FC<props> = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
        >
            <img src={props.imgURL}
                style={{ minHeight: '200px', minWidth: '200px', maxHeight: '1000px', maxWidth: '1000px' }} alt="preview" />
        </Modal>
    )
}

export { ImageModal }