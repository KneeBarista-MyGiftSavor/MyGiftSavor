import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

function Gift({ image, title }) {
   return (
      <GiftItem>
         <Title>{title}</Title>
         <DeadLine>만료일: </DeadLine>
         <StyledImage src={image} />
      </GiftItem>
   );
}

export default Gift;

const GiftItem = styled.div`
   min-width: 290px;
   width: 330px;
   height: 520px;
   background-color: white;
   margin-bottom: 70px;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   align-content: flex-start;
   font-weight: 200;
   padding: 18px;
   border-radius: 5px;
   color: black;
   box-shadow: 2px 4px 25px 5px lightgray;
   &:hover {
      transform: scale(1.05);
      transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
   }
`;

const StyledImage = styled.img`
   width: 290px;
   height: 410px;
   border-radius: 2px;
`;

const Title = styled.h1`
   width: 290px;
   margin: 0;
   font-size: 24px;
   font-weight: 550;
`;

const DeadLine = styled.h2`
   font-size: 18px;
   font-weight: 550;
   color: gray;
   padding: 5px;
   padding-left: 0;
   margin: 0;
`;
