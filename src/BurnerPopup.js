import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function BurnerPopup() {
    return (
        <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open modal </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                               Token burnt
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close tab
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};