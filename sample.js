import React from 'react';

function New() {
   return (
      <section id="grid">
         <div id="left">
            /*<h1>left</h1>*/
         </div>
         <section id="main">
            <h3 className="deadline">기프티콘 이름</h3>
            //<span class="close">&times;</span>
            //사진 띄우는
            <img id="displayimg" src="gift.jpg" />
            <br />
            <h3 className="deadline">사용 기한: </h3>
            <div id="grid1">
               <input
                  id="completion"
                  type="button"
                  defaultValue="사용 완료"
                  onclick="document.getElementById('extension').disabled=true;"
               />
               {/* Trigger/Open The Modal */}
               <button id="extension">기간 연장</button>
               {/* The Modal */}
               <div id="myModal" className="modal">
                  {/* Modal content */}
                  <div className="modal-content">
                     <span className="close">×</span>
                     <p>몇 개월 연장하시겠습니까?</p>
                     <input type="text" />
                     <input type="button" defaultValue="확인" />
                  </div>
               </div>
            </div>
         </section>
         <section id="right">{/*<h1>right</h1>*/}</section>
      </section>
   );
}

export default New;
