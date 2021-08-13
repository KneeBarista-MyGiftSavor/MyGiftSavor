import React, { useState, useEffect } from 'react';

const NavBar = (props) => {
   const providers = ['github'];
   const redirect = window.location.pathname;
   const [userInfo, setUserInfo] = useState();

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
   return (
      <div>
         {/* // Login and logout buttons */}
         <nav className="menu auth">
            <p className="menu-label">Auth</p>
            <div className="menu-list auth">
               {!userInfo &&
                  providers.map((provider) => (
                     <a
                        key={provider}
                        href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}
                     >
                        {provider}
                     </a>
                  ))}
               {userInfo && (
                  <a
                     href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}
                  >
                     Logout
                  </a>
               )}
            </div>
         </nav>
         {/* // User infos */}
         {userInfo && (
            <div>
               <div className="user">
                  <p>Welcome</p>
                  <p>{userInfo && userInfo.userDetails}</p>
                  <p>{userInfo && userInfo.identityProvider}</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default NavBar;
