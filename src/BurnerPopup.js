import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BurnerPopup = ({ message, onClose }) => {
    return (
        <Popup open={true} modal nested>
            <div className='modal'>
                <div className='content'>{message}</div>
                <div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </Popup>
    );
};

export default BurnerPopup;
