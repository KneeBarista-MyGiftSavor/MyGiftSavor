import React from 'react';
import { useHistory } from 'react-router-dom';
import GiftItem from './GiftItem';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';

const API_END_POINT = '3.36.73.136:8080';

function Gifticons() {
   async function getData() {
      try {
         //응답 성공
         const response = await axios.get(`${API_END_POINT}/home`, {
            params: {
               'X-AUTH-TOKEN':
                  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tLW8iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjI4Njg0MjM5LCJleHAiOjE2Mjg2ODYwMzl9.Zd3d06sqb3SO_K_1P8-97_am_f5LhWYNwNzaZeVxoxA',
            },
         });
         console.log(response);
      } catch (error) {
         //응답 실패
         console.error(error);
      }
   }
   const history = useHistory();

   const gifts = [
      {
         title: '싸이버거세트',
         image: 'https://hwanggu1.github.io/nion-cdn/moms.png',
      },
      {
         title: '허니콤보',
         image: 'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme2.png',
      },
      {
         title: '베스킨라빈스',
         image: 'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme8.png',
      },
      {
         title: '아이스아메리카노 Tall',
         image: 'https://hwanggu1.github.io/nion-cdn/starbucks2.png',
      },
      {
         title: '빼빼로',
         image: 'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme10.png',
      },
   ];

   return (
      <div>
         <Button
            onClick={() => {
               history.push('/save');
            }}
         >
            추가
         </Button>
         <div className="gifts">
            <GiftList>
               {gifts.map((gift) => {
                  return <GiftItem title={gift.title} image={gift.image} />;
               })}
            </GiftList>
         </div>
      </div>
   );
}

export default Gifticons;

const GiftList = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   justify-items: center;
   padding: 70px;
   padding-top: 150px;
`;

const Button = styled.button`
   background-color: #fec627;
   width: 80px;
   height: 45px;
   color: white;
   font-weight: bold;
   font-size: 20px;
   position: absolute;
   right: 80px;
   top: 60px;
   border: 0;
   padding: 5px;
   border-radius: 5px;
   &:hover {
      transform: scale(1.08);
      transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
   }
`;
