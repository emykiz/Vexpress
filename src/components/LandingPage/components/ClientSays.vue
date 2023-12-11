<!-- <template>
    <div class="sec3">



    
    <h2 class="sm">What Client Say's</h2>




        <div class="multi" style="width: 90%; overflow-x: scroll; padding: 20px;">
                  
                    
                
                    <div class="cume" style="flex-direction: column; width: 400px;">
                        <div style=" display: flex; gap:1em;">

                            <div class="first" style="width: 100px; height: 90px; border-radius: 10px; object-fit: cover;">
                                <img class="images" src="../../../assets/about.jpg" >
                            </div>
                            <div class="first1">
                                <h4>Pizza Margareta</h4>
                                <p>student</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis rerum! Illo cum doloremque numquam quaerat a, officiis eaque soluta.
                        </p>
                    </div>

                    <div class="cume" style="flex-direction: column; width: 400px;">
                        <div style=" display: flex; gap:1em;">

                            <div class="first" style="width: 100px; height: 90px; border-radius: 10px; object-fit: cover;">
                                <img class="images" src="../../../assets/about.jpg">
                            </div>
                            <div class="first1">
                                <h4>Pizza Margareta</h4>
                                <p>student</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis rerum! Illo cum doloremque numquam quaerat a, officiis eaque soluta.
                        </p>
                    </div>

                    <div class="cume" style="flex-direction: column; width: 400px;">
                        <div style=" display: flex; gap:1em;">

                            <div class="first" style="width: 100px; height: 90px; border-radius: 10px; object-fit: cover;">
                                <img class="images" src="../../../assets/about.jpg" >
                            </div>
                            <div class="first1">
                                <h4>Pizza Margareta</h4>
                                <p>student</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis rerum! Illo cum doloremque numquam quaerat a, officiis eaque soluta.
                        </p>
                    </div>
                </div>  
        



     </div> 
</template>
<style>
.cume{
    display:flex;
    gap:0.5em;
    width: 550px !important;
}
.images{
    border-radius: 100% !important;
    width: 100px !important;
    height: 90px !important;
}
.multi, .multi1{
    display:flex;
    gap:2em;
    justify-content: center;
    align-items: center;

}
</style> -->


<script setup>
import images from "./images";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import '../../../assets/about.jpg'

// const slides = [
//   { id: '1', src:'../../../assets/Logo.svg', content: 'VueJS is a library' },
//   { id: '2', src:'../../../assets/Logo.svg', content: 'Know the components' },
//   { id: '3', src:'../../../assets/Logo.svg', content: 'Rendering Conditionally' },
//   { id: '4', src: '../../../assets/Logo.svg', content: 'VueJS is Reactive' },
//   { id: '5', src: '../../../assets/Logo.svg', content: 'VueJS uses computed properties' },
// ]

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}
</script>

<template >
    <div style="text-align: center; margin-top: 100px;">


    <h2 class="sm">What Client Say's</h2>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000" style="margin-bottom: 100px; margin-top: 100px;">
    
    <Slide v-for="slide in images" :key="slide.id">
        
      <!-- <div class="carousel__item" style="background-image: url(../../../assets/about.jpg);">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
        <img :src="slide.thumb" style="z-index:100; position: absolute;">
      </div> -->
      <div class="cume" style="flex-direction: column; width: 200px;">
                        <div style=" display: flex; gap:1em;">

                            <div class="first" style="width: 100px; height: 90px; border-radius: 10px; object-fit: cover;">
                                <img :src="slide.thumb" style="z-index:100; width: 100px; height: 90px; position: absolute; border-radius: 100%;">
                            </div>
                            <div class="first1">
                                <h4>Pizza Margareta</h4>
                                <p>student</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis rerum! Illo cum doloremque numquam quaerat a, officiis eaque soluta.
                        </p>
    </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  background-blend-mode: overlay;
   background-image: url(../../../assets/about.jpg) !important;
   background-position: center;
   background-repeat: no-repeat;
  z-index: 999;
  
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


.serv {
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    /* padding: 30px; */
}

.serve {
    width: 370px;
    height: 380px;
    color: white;
    font-size: 40px;
    font-weight: 400;
    transition: .4s;
    background-color: rgb(87, 86, 86);
    background-blend-mode: overlay;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.serve:hover {
    background-color: rgb(65, 64, 64);
    transition: .4s;
}

.serve1 {
    background-image: url(../../../assets/about.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve2 {
    background-image: url(../../../assets/about.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve3 {
    background-image: url(../../../assets/about.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve4 {
    background-image: url(../../../assets/about.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.serve7 {
    background-image: url(../../../assets/about.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve8 {
    background-image: url(../../../assets/about.jpg);
    background-color: rgba(0, 0, 0, 0.774);
    background-blend-mode: overlay;
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; */
    font-size: 21px;
}
.cume{
    display:flex;
    gap:0.5em;
    width: 300px !important;
}
.images{
    border-radius: 100% !important;
    width: 100px !important;
    height: 90px !important;
}
.multi, .multi1{
    display:flex;
    gap:2em;
    justify-content: center;
    align-items: center;
}

.cume{
    display:flex;
    gap:2em;
    /* width: 550px !important; */
}
.first{
    width: 100px !important;
    height: 90px !important;
    border-radius: 100% !important;
}
template{
    text-align: center;
}
</style>
