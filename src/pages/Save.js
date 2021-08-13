/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment, { Moment } from 'moment';
import axios from 'axios';

// const API_END_POINT = "3.36.73.136:8080";

const Save = () => {
   const [detailImageFile, setDetailImageFile] = useState(null);
   const [detailImageUrl, setDetailImageUrl] = useState(null);
   const [expiration, setExpiration] = useState(moment());
   const [memo, setMemo] = useState('');
   const setImageFromFile = ({ file, setImageUrl }) => {
      let reader = new FileReader();
      reader.onload = function () {
         setImageUrl({ result: reader.result });
      };
      reader.readAsDataURL(file);
   };
   function onChange(date, dateString) {
      setExpiration(dateString);
   }
   async function handleSubmit() {
      try {
         //응답 성공
         const response = await axios.post('/gifticon', {
            //보내고자 하는 데이터
            img: detailImageUrl,
            gifticonReq: { expirationDate: expiration, memo: memo },
         });
         console.log(response);
      } catch (error) {
         //응답 실패
         console.error(error);
      }
   }
   return (
      <Wrapper>
         <Container>
            {detailImageFile && (
               <div style={{ width: '100%' }} className="image_area">
                  <img src={detailImageUrl} alt={detailImageFile.name} />
                  {/* <div>{JSON.stringify(detailImageFile)}</div> */}
                  {/* <div>{detailImageUrl}</div> */}
               </div>
            )}
            <input
               type="file"
               id="detail_image"
               accept="image/*"
               onChange={({ target: { files } }) => {
                  if (files.length) {
                     setImageFromFile({
                        file: files[0],
                        setImageUrl: ({ result }) => {
                           setDetailImageFile(files[0]);
                           setDetailImageUrl(result);
                        },
                     });
                  }
               }}
            />

            <div style={{ display: 'flex' }}>
               <div>만료일</div>
               <Space direction="vertical">
                  <DatePicker
                     locale={locale}
                     defaultValue={moment()}
                     onChange={onChange}
                  />
               </Space>
            </div>
            <input
               onChange={(e) => {
                  setMemo(e.target.value);
               }}
               type="text"
            />
            <div>{memo}</div>
            <button onClick={handleSubmit}>저장하기</button>
         </Container>
      </Wrapper>
   );
};

export default Save;

const Wrapper = styled.div`
   background-color: #f0f1ec;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Container = styled.div`
   width: 100%;
   max-width: 500px;
   background-color: pink;
   height: fit-content;
   padding: 0 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
