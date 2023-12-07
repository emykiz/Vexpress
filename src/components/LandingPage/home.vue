
<template>

    <div class="">
        
      




        <div class="header" >
            <Navbar />
            <Banner />
            <Mission />
            <Services />
            <Ceo />
           <Partner />
            <ClientSays />
           <Download />
            <Footer />
            </div>
    </div>
</template>




<script setup>

import Navbar from '@/components/LandingPage/components/Navbar.vue'
import Banner from '@/components/LandingPage/components/Banner.vue'
import Mission from '@/components/LandingPage/components/Mission.vue'
import Services from '@/components/LandingPage/components/Services.vue'
import Ceo from '@/components/LandingPage/components/Ceo.vue'
import Partner from '@/components/LandingPage/components/Partner.vue'
import ClientSays from '@/components/LandingPage/components/ClientSays.vue'
import Download from '@/components/LandingPage/components/Download.vue'
import Footer from '@/components/LandingPage/components/Footer.vue'
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
*{
    box-sizing: border-box;
  
}
body{
    margin:0;
    font-family: sans-serif;
    text-align: center;
}
.header{
    background-color: white;
    /* position: fixed; */
}
.nav{
    
    width:100%;
    display: flex;
    justify-content: space-evenly;

    color: white;
    position: fixed;
    top: 0;
    z-index: 999;
    /* background-color: transparent; */
    background-color: rgb(177, 177, 13);
    /* backdrop-filter: blur(15px); */
    transition: 0.2s;
}
ul{
    margin:0;
    color:white;
}
.fixed-nav{
    box-shadow: light-shadow;
    background-color: rgb(177, 177, 13);
    position: fixed !important;
    top:0 !important;
    transition: 0.2s ease-in-out;
    z-index: 1000;
    width: 100%;
    /* height:80px; */
}
.logo{
    font-size: 40px;
    margin: 0;
    margin-top: 10px;
}
.list_nav{
    margin-top: 30px;
    display: flex;
}
.men{
    display: flex;
    gap:4em;

}
.hide{
   
    width:250px;
    height:100vh;
    position: absolute;
    left:0px;
    top:0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:3em;
    transition: 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.767);
    color: white;
    visibility:hidden;
    /* z-index: -900; */
    /* animation: emy 3s ease-in; */
}
.hide a{
    color:rgb(177, 177, 13)  !important;
}
.hide-style{
    visibility:visible;
    z-index: 999;
    /* transition: 0.5s; */
}
.body-hide{
    visibility: hidden;
}

/* Animation for the toggle menu */
@keyframes emy{
    0%{
        left:-100px;
    }
    50%{
        left:0px
    }
    100%{
        left:300px
    }
}
.animation{
    animation: emy 0.3s ease-in;

/* Animation End */

}

ul li{
  list-style: none;
  color: rgb(209, 209, 9);
}
.list_nav a{
    text-decoration: none;
    font-size: 17px;
    font-weight: 300;
    color: white;
}
.Logo_nav a{
    text-decoration: none;
    font-size: 20px;
    color: white;
}
.button_nav{
    background-color: black;
    color:white;
    width:100px;
    height:30px;
    border: none;
    border-radius: 5px;
    margin-top:20px;
}
#check, #burger, #bug{
    display:none;
}
.list_nav a:hover{
    color:rgb(98, 0, 255);
    border-bottom: 3px solid rgb(98, 0, 255);
}
.button_nav:hover{
    background-color: rgb(98, 0, 255);
}
.xx{
    display:none;
}
@media only screen and (max-width:835px){
    #burger{
        display:block;
        position: absolute;
        right:20px;
        font-size: 30px;
        top:19px;
    }
    #bug{
        display:block;
        /* color: black; */
    }
    .button_nav{
        display: none;
    }
    .men{
        width:100%;
        height:100vh;
        position: absolute;
        left:-850px;
        top:90px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:3em;
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.767);
        color: white;
    }
    input[type="checkbox"]:checked + .men{
        left:0;
        top:60px;
        transition: 0.5s;
    }
    a{
        color:white;
    }
    .center{
        visibility: visible;
    }
    .service-box{
        /* width:500px; */
    }
    .service-flex{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .center{
        display: block !important;
       
    }
   
}
.center {
    position: absolute;
    top: 60%;
    left: 90%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    /* margin-top: -10px; */
    display: none;
  }
  
  
  .menu-icon div {
    background-color: #fff;
    width: 40px;
    height: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  
  .menu-icon div:last-child {
    margin-bottom: 0px;
  }
  
  .line-1.animate {
    animation-name: animate-line-1;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
  
  .line-2.animate {
    animation-name: animate-line-2;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
  
  .line-3.animate {
    animation-name: animate-line-3;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
  
  .line-1 {
    animation-name: animate-line-1-rev;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
  }
  
  .line-2 {
    animation-name: animate-line-2-rev;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
  }
  
  .line-3 {
    animation-name: animate-line-3-rev;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
  }
  
  .start {
    animation: none !important;
  }
  
  /* animation */
  @keyframes animate-line-1 {
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(15px) rotate(44deg);
    }
  }
  
  @keyframes animate-line-2 {
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  
  @keyframes animate-line-3 {
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(-15px) rotate(-44deg);
    }
  }
  
  /* reverse */
  @keyframes animate-line-1-rev {
    0% {
      transform: translateY(15px) rotate(44deg);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes animate-line-2-rev {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes animate-line-3-rev {
    0% {
      transform: translateY(-15px) rotate(-44deg);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }

.sec1{
    width:100%;
    height:85vh;
    background-color: white !important;;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    position:relative;
    /* top:-50px; */
    margin-right: 50px;
    
}

.big{
    font-size: 90px;
    font-family: 'beyond the mountains';
}
.center{
    font-size: 30px;
    font-family: 'beyond the mountains';
}
#puss{
    margin-top:50px;
}
.btn2{
    width:150px;
    height:60px;
    border-radius: 5px;
    border:none;
    background-color: rgba(255, 0, 0, 0.767);
    color:white;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 15px;
}

.tagred{
    width:120px;
    height:30px;
    background-color:red;
    position:absolute;
    top:50px;
    color:white;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.taggreen{
    width:120px;
    height:30px;
    background-color:green;
    position:absolute;
    top:50px;
    color:white;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sec3{
    width:100%;
    background-color: rgb(255, 255, 255);
    /* background-image: url(../../assets/about.jpg); */
    /* background-blend-mode: overlay; */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2em;
    /* margin-top: 50px; */
    padding-top: 150px;
}
.food, .food1{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    color:white;
    gap:3em;
}
.smal{
    color:white;
}
.btnorder{
    width:150px;
    height:50px;
    background-color: transparent;
    border:1px solid red;
    color:red;
}
.btnorder:hover{
    background-color: red;
    color:white;
}
.btn3{
    width:200px;
    height:70px;
    border-radius: 5px;
    border:1px solid green;
    border-bottom: 3px solid green;
    background-color:white;
    color:black;
    position:relative;
    text-align: center;
    z-index: ;
}
.div{
    width:198px;
    height:65px;
    border: none;
    border-radius: 5px;
    background-color: red;
    position:absolute;
    top:0px;
    left:0px;
    color:white;
    transition:0.5s ease;
    text-align: center;
    
}
.btn3:hover > .div{
    height:0px;
    transition:0.5s ease;
    font-size: 0px;
    text-align: center;
}
.btndesign{
    background-image: linear-gradient(to right, rgb(124, 1, 1) 50%, yellow);
    border: none;
    width: 170px;
    color: white;
    height: 50px;
}
/* .carton{
    background-color: rgba(0, 0, 0, 0.788);
  
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    width: 750px !important;
    height: 444px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
} */

#services {
    width: 100%;
    padding: 80px 30px 80px 30px;
    background-color: white;
}

.serv {
    display: flex;
    /* flex-wrap: wrap; */
    overflow-x: scroll;
    gap: 3em;
    justify-content: center;
    /* padding: 30px; */
    width: 90%;
    margin: auto;

}

.serve {
    width: 570px;
    height: 420px;
    color: white;
    font-size: 40px;
    font-weight: 400;
    transition: .4s;
    background-color: rgb(87, 86, 86);
    background-blend-mode: overlay;
}

.serve:hover {
    background-color: rgb(65, 64, 64);
    transition: .4s;
}

.serve1 {
    background-image: url(../icons/user-account.svg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve2 {
    background-image: url(../icons/logo.svg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve3 {
    background-image: url(../icons/user-account.svg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve4 {
    background-image: url(../icons/user-question-01.svg);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.serve7 {
    background-image: url(../icons/note-edit.svg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve8 {
    background-image: url(../icons/user-question-01.svg);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#features {
    padding: 0 0 80px 0;
    width: 100%;
    /* height: 100vh; */
    background-color: white;
}

.ficon {
    font-size: 30px;
    color: var(--red);
}

.features {
    width: 200px;
    text-align: center;
}

.featurewrap {
    display: flex;
    flex-wrap: wrap;
    gap: 7em;
    padding: 0 37px;
    justify-content: center;
}

.feattxt {
    font-size: 14px;
    line-height: 20px;
}

/* footer */

footer {
    background-color: rgb(46, 45, 45);
    width: 100vw;
    margin: 0;
    padding: 80px 0px;
    position: relative;
    color: white;
    font-weight: 300;
}

.footer {
    display: flex;
    align-items: baseline;
    gap: 7em;
    font-size: 14px;
    justify-content: center;
    
}

.footer > div > div > ul > li > a {
    color: rgb(150, 147, 147);
    line-height: 4em;
    font-weight: 300;
}

.footer > div > div > ul > li > a:hover {
    color: white;
}

.info {
    display: flex;
    align-items: baseline;
    gap: 1em;
    line-height: 1em;
    color: rgb(150, 147, 147);
}

.info > div > p > a {
    color: rgb(150, 147, 147);
}

.info > div > p > a:hover {
    text-decoration: underline;
}

.icon1 {
    color: white;
}

.rights {
    text-align: center;
    margin-top: 40px;
}

.newsletter {
    display: flex;
    border-bottom: 1px solid rgb(150, 148, 148);
}

.footer > div > div > div > input[type=email] {
    border: none;
    outline: none;
    background: transparent;
    width: 130px;
}

.footer > div > div > div > input[type=email]:focus {
    color: white;
}

.footer > div > div > input[type=email]::placeholder {
    color: rgb(190, 189, 189);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
}

.plane {
    background: transparent;
    border: none;
    color: white;
    transition: .3s;
}

.plane:hover {
    color: rgb(202, 74, 74);
    transition: .3s;
}

.rights {
    font-size: 14px;
    color: rgb(148, 147, 147);
}

.grp1 {
    display: flex;
    gap: 7em;
}

.grp2 {
    display: flex;
    padding-right: 20px;
    gap: 7em;
}
@media only screen and (max-width: 900px) {
    .grp1 {
        flex-direction: column;
    }
    .grp2 {
        flex-direction: column;
    }
}

@media only screen and (max-width: 700px) {
    .footer {
        display: block;
        /* text-align: center; */
    }

    .grp2 {
        display: none;
    }

    .grp1 {
        display: block;
    }

    .grp1 > div {
        text-align: center;
    }
}
.multi, .multi1{
    display:flex;
    gap:2em;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;

}
.cume{
    display:flex;
    gap:2em;
    width: 550px !important;
}
.images{
    border-radius: 100% !important;
}
</style>