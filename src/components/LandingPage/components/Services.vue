<!-- <template>
    <section id="services">
        <p class="caption">Some of our Services Include</p>
        
        <div class="serv">
            <div class="serve serve1">
                <p>Outdoor Pool</p>
            </div>
            <div class="serve serve2">
                <p>Restaurant</p>
            </div>
            <div class="serve serve3">
                <p>Weddings</p>
            </div>
            <div class="serve serve4">
                <p>Event Conference Venue</p>
            </div>
            <div class="serve serve7">
                <p>Gym</p>
            </div>
            <div class="serve serve8">
                <p>Coffee Shop</p>
            </div>
        </div>
            </section> 
</template> -->


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
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
</script>

<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000">
    <Slide v-for="slide in images" :key="slide.id">
      <!-- <div class="carousel__item" style="background-image: url(../../../assets/about.jpg);">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
        <img :src="slide.thumb" style="z-index:100; position: absolute;">
      </div> -->
      <div class="serve serve8">
                <p>Coffee Shop</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
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
    background-image: url(Images/services/restaurant.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve3 {
    background-image: url(Images/services/wedding.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.serve4 {
    background-image: url(Images/services/event.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.serve7 {
    background-image: url(Images/services/gym.jpg);
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

</style>
