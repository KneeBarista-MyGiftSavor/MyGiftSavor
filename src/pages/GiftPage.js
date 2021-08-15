/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from 'react';
//import './GiftPage.css';
//import Modal from './Modal';
//import './Modal.css';
import { Modal, Button } from 'antd';


function GiftPage({image, name}) {
   const [modalOpen, setModalOpen] = useState(false);
   const [extension, setExtension] = useState("");

   const openModal = () => {
      setModalOpen(true);
   };
   const closeModal = () => {
      setModalOpen(false);
   };

   const [isModalVisible, setIsModalVisible] = useState(false);
 
   const showModal = () => {
     setIsModalVisible(true);
   };
 
   const handleOk = () => {
     setIsModalVisible(false);
   };
 
   const handleCancel = () => {
     setIsModalVisible(false);
   };

   return (
      <Wrapper>
         <Header>

         </Header>
      <Grid>
         <div>

         </div>
         <Main>
            <Name>
            기프티콘 이름: {name}
            </Name>
            <StyledImg src={image} />
            <Deadline>
            사용 기한:
            </Deadline>
            <Grid1>
               <Button1>사용 완료</Button1>
               
               <Modal
                  open={modalOpen}
                  close={closeModal}
                  header="기프티콘 이름"
               >
                 
               </Modal>
               
               <Button2 type="primary" onClick={showModal}>
                  기간 연장
               </Button2>
               <Modal title="기간 연장" visible={isModalVisible} onCancel={handleCancel} footer={<Button css={css`background-color: #fec627; color:white`}onClick={handleOk} >연장하기</Button>}>
                  <p> 몇 개월 연장하시겠습니까?</p>
                 
                  <input
               onChange={(e) => {
                  setExtension(e.target.value);
               }}
               type="text"
            />
               </Modal>
     
            </Grid1>
            
         </Main>
      </Grid>
      <Footer>

      </Footer>
      </Wrapper>
   );
}

export default GiftPage;

const Wrapper=styled.div`
   background-color: #f0f1ec;
   justify-content: center;
   align-items: center;
`;

const Header = styled.div`
   width:100%;
   height:100px;

`;
const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`;

const Main = styled.div`
   height: 400px;
   background-color: white;
   padding: 10px;
   color: black;
   border: 1px solid white;
   border-radius: 5px;
   width: 300px;
   height: 450px;
   margin-left: 10px;
   margin-right: 10px;
   display: block;
`;
const Name = styled.h3`
   margin-left:17px;
   font-weight:550;
`;
const StyledImg=styled.img`
   margin-left: 14px;
   margin-top: 0px;
   border: 1px solid #f0f1ec;
   border-radius: 5px;
   width: 250px;
   height: 270px;
`;

const Deadline = styled.h3`
   margin-left: 17px;
   margin-bottom: 10px;
   margin-top: 10px;
   font-size: 12px;
   font-weight: 550;
}`;

const Grid1 = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-top: 10px;

`;

const Button1 = styled.button`
   margin: 0px 15px 0px 15px;
   background-color: #fec627;
   border: 0px;
   border-radius: 5px;
   color: white;
   height: 40px;
   font-weight: bold;

   `;

const Button2 = styled.button`
   margin: 0px 20px 0px 10px;
   background-color: #fec627;
   border: 0px;
   border-radius: 5px;
   color: white;
   height: 40px;
   font-weight: bold;

   onClick={openModal};
`;
const Footer = styled.div`
height:700px;
width:100%;
`;
