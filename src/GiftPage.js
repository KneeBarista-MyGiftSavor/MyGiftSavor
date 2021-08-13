import React, { useState } from 'react';
import './GiftPage.css';
import Modal from './Modal';
import './Modal.css';

function GiftPage() {
   const [modalOpen, setModalOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
   };
   const closeModal = () => {
      setModalOpen(false);
   };

   return (
      <div id="grid">
         <div id="main">
            <h3 className="deadline">기프티콘 이름</h3>
            <span class="close">&times;</span>
            <img id="displayimg" src="gift.jpg" />
            <h3 className="deadline">사용 기한: </h3>
            <div id="grid1">
               <input
                  id="completion"
                  type="button"
                  defaultValue="사용 완료"
                  onclick="document.getElementById('extension').disabled=true;"
               />
               <button id="extension" onClick={openModal}>
                  기간 연장
               </button>
               <Modal
                  open={modalOpen}
                  close={closeModal}
                  header="기프티콘 이름"
               >
                  몇 개월 연장하시겠습니까?
               </Modal>
            </div>
         </div>
      </div>
   );
}

export default GiftPage;
