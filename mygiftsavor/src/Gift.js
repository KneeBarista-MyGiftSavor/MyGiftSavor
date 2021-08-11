import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

function Gift({ image, title }) {
   return (
      <GiftItem>
         <h1>{title}</h1>
         <img src={image} />
      </GiftItem>
   );
}

export default Gift;

const GiftItem = styled.div`
   min-width: 400px;
   width: 200px;
   height: 500px;
   background-color: white;
   margin-bottom: 70px;
   display: flex;
   flex-wrap: wrap;

   align-items: flex-start;
   justify-content: space-between;
   font-weight: 200;
   padding: 20px;
   border-radius: 5px;
   color: black;
   box-shadow: 4px 3px 20px 1px gray;
   &:hover {
      transform: scale(1.01);
      transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
   }
`;
