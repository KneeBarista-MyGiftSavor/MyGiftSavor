import React from 'react';
import Gift from './Gift';
import { GoPlusSmall } from 'react-icons/go';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

function App() {
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
         <Button>추</Button>
         <Card>
            <div className="gifts">
               <GiftList>
                  {gifts.map((gift) => {
                     return <Gift title={gift.title} image={gift.image} />;
                  })}
               </GiftList>
            </div>
         </Card>
      </div>
   );
}

export default App;

const GiftList = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   flex-wrap: wrap;
   flex-direction: row;
   padding: 50px;
   padding-top: 70px;
`;

const Card = styled.div``;

const Button = styled.button`
   background-color: #fec627;
   margin: 0;
   border: 0;
   padding: 2px;
`;
