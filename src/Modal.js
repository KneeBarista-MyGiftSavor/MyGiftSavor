import React from 'react';
import './Modal.css';

const Modal = (props) => {
   const { header, open, close } = props;
   return (
      <div className={open ? 'openModal modal' : 'modal'}>
         {open ? (
            <div>
               <header>
                  {header}
                  <button className="close" onClick={close}>
                     &times;
                  </button>
               </header>
               <main>{props.children}</main>
               <div>
                  <button className="close" onClick={close}>
                     close
                  </button>
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default Modal;
