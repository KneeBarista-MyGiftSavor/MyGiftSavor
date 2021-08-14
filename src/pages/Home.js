/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Gifticons from '../components/Gifticons';

const API_END_POINT = '3.36.73.136:8080';

const Home = () => {
   const history = useHistory();
   const [giftList, setGiftList] = useState(null);
   const [userInfo, setUserInfo] = useState();
   const redirect = window.location.pathname;
   async function getData() {
      try {
         //응답 성공
         const response = await axios.get(`${API_END_POINT}/home`);
         setGiftList(response);
         console.log(response);
      } catch (error) {
         //응답 실패
         console.error(error);
      }
   }
   useEffect(() => {
      (async () => {
         setUserInfo(await getUserInfo());
      })();
   }, []);
   async function getUserInfo() {
      try {
         const response = await fetch('/.auth/me');
         const payload = await response.json();
         const { clientPrincipal } = payload;
         return clientPrincipal;
      } catch (error) {
         console.error('No profile could be found');
         return undefined;
      }
   }
   useEffect(() => {
      getData();
   }, []);
   return (
      <Wrapper>
         <div>This is root page</div>
         {!giftList && <div>선물을 등록해보세요!</div>}
         {giftList && <Gifticons />}
         <Gifticons />
         {/* <Login /> */}
         <NavBar />
         <button
            onClick={() => {
               history.push('/save');
            }}
         >
            등록하러가기
         </button>
         {/* <a href="/.auth/login/github">Login</a>
      <a href="/.auth/logout">Log out</a> */}
      </Wrapper>
   );
};

export default Home;

const Wrapper = styled.div`
   background-color: #f0f1ec;
   display: block;
`;
