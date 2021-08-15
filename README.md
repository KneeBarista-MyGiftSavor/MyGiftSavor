![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=MyGiftSavor&fontSize=50&animation=fadeIn&fontAlignY=38&desc=받은%20마음을%20간직해요&descAlignY=55&descAlign=50)

## ✨ Live Service
https://black-smoke-070207e10.azurestaticapps.net/

## 🐬 Intro
GiftSavor는 깜빡하고 기프티콘을 사용하지 못하는 일이 없도록 기프티콘을 등록하고 사용을 관리할 수 있는 서비스입니다.

## 🐾 Techs
- Azure Static Web App
- Github Actions
<br/>

- React
<br/>

- Emotion
- Antd

## 🐣 시작하기

1. Clone this repository
```
$ git clone https://github.com/YeonjuSeo/MyGiftSavor.git
```
2. Install node packages with npm<br/>
이 과정에서 반드시 Azure Functions Core Tools가 설치되어야 합니다.
```
$ npm install
```
3. Open localhost:3000
```
$ npm start
```
4. Move to /api and start api in a new Terminal
```
cd api
func start
```
5. In root folder, open localhost:4280
```
swa start http://localhost:3000 --api ./api
```

## 👩🏻‍🤝‍👩🏼참고
https://docs.microsoft.com/ko-kr/learn/modules/publish-static-web-app-authentication/
