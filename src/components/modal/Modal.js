import React from 'react'

const Modal = ({onClick, imgSrc}) => {
    return (
        <>
        
        <div className="backDrop">
        <div className="modal">
       
            <img src={imgSrc} alt=''></img>
                 
                </div>
    </div>
    </>
    );
}

export default Modal;