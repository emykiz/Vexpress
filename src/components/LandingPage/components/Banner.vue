<!-- <template>
    <div class="sec1" style="display: flex; justify-content: flex-end; align-items: center;">
            <div class="best" style="display: flex; justify-content: center; align-items: flex-end;">
                
                <div class="chair" style="width: 700px; padding-right: 60px; display: flex; flex-direction: column; gap: 1em;margin-top: -80px;">
                    <h1>TEMPORARY RESIDENT CANADIAN VISA</h1>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero quod itaque maiores corporis neque mollitia doloremque, nulla animi tempore.</p>
                    <button class="" style="border: 1px solid white; border-radius: 10px; background-color: transparent; height: 50px; width: 150px; color: white;">Learn More </button>
                </div>
                
                
                
            </div>
            <div class=" " style="width: 80%; border: 1px solid ghostwhite; position: absolute; bottom: -20px; box-shadow: 2px 6px 6px 2px rgb(226, 226, 226);">
                <div style="display: flex;  background-color: white; justify-content: space-between; font-size: 10px; padding: 10px; gap:.5em;">
                    <p style="width: 450px; background-color: white;">Loriam eaque animi unde aspernatur doloremque quisquam ipsam molestias quae ullam, illum possimus, cum quibusdam?
                    </p>
                    <div class="btndesign" style="width: 200px ; background-color: brown; border-radius: 10px; display: flex;justify-content: center; align-items: center; margin-left: 150px;">Download or IOS</div>
                    <div class="" style="width: 200px ; border-radius: 10px; border: 1px solid rgb(206, 206, 206); display: flex;justify-content: center; align-items: center; margin-right: 50px;;">Download or Andriod</div>
                </div>
            </div>
         </div>

</template>
<style>
.best{
    background-image: url(../../../assets/about.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.87);
    background-blend-mode: overlay;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color:rgb(255, 255, 255);
    text-align: center;
    /* margin:auto; */
    width: 90%;
    height: 90%;
    /* background-color: blue; */
    text-align: start;
}
</style> -->

<script setup>
import { ref } from 'vue';
import images from "./images";

/**
 * initial values
 * @isActive responsible for active item
 * @interval responsible for delay auto slide between two images
 */
let isActive = ref(0)
const interval = 5000 //milliseconds

// navigation to Previous image
const prev = () => {
  if (isActive.value === 0) {
    isActive.value = (images.length - 1)
  } else {
    isActive.value -= 1
  }
}

// navigation to Next image
const next = () => {
  if (isActive.value === (images.length - 1)) {
    isActive.value = 0
  } else {
    isActive.value += 1
  }
}

// autoplay  
let initAutoPlay = setInterval(() => {
  next()
}, interval)

// to active autoplay on page load
window.onload = () => {
  initAutoPlay
}

// on mouse out autoplay will be restart
const replay = () => {
  initAutoPlay = setInterval(() => {
    next()
  }, interval)
}

// on mouse over autoplay will be stopped
const hold = () => {
  clearInterval(initAutoPlay)
}

</script>
<template>
    <div class="sec1" style="display: flex; justify-content: flex-end; align-items: center;">
     <div class="best" style="display: flex; justify-content: center; align-items: flex-end;">
  <!-- <section class="max-w-2xl mx-auto mt-8"> -->
    <div @mouseover="hold" @mouseout="replay" class="relative w-full">
      <!-- Carousel wrapper -->
      <div class="relative h-[480px] overflow-hidden rounded-2xl sim" style="object-fit: contain;">
        <template v-for="(image, index) in images" :key="index"  style="background-color: black;background-blend-mode: overlay;">
          <Transition name="slide-fade">
            <div class="duration-700 ease-in-out" v-show="isActive === index">
              <img :src="image.thumb" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." >
                
            </div>
          </Transition>
        </template>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex px-3 py-2 space-x-3 -translate-x-1/2 bordernone shadow-md bg-transparent bottom-20 left-1/2">
        <button v-for="(image, index) in images" :key="index" @click="isActive = index" type="button"
          class="w-3 h-3 rounded-full" :class="isActive === index ? 'bg-green-400' : 'bg-black'"></button>
      </div>
      <!-- Slider controls -->
      <button @click="prev" type="button"
        class="none absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none none">

        <span
          class="none inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only none">Previous</span>
        </span>

      </button>

      <button @click="next" type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none none ">

        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>

      </button>
      <div class="none" style="width: 500px; height:40vh; color:white; position: absolute; top:30% ; right: 0;" >
                  <h1>TEMPORARY RESIDENT CANADIAN VISA</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae porro a optio nihil suscipit esse ad quis provident dolorem mollitia.
                  </p>
                  <button class="" style="border: 1px solid white; border-radius: 10px; background-color: transparent; height: 50px; width: 150px; color: white;">Learn More </button>
                </div>
                <div class=" none" style="width: 80%; border: 1px solid ghostwhite; left:10%; position: absolute; bottom: -20px; margin:auto;color: black; box-shadow: 2px 6px 6px 2px rgb(226, 226, 226);">
                <div style="display: flex;  background-color: white; justify-content: space-between; font-size: 10px; padding: 10px; gap:.5em;">
                    <p style="width: 450px; background-color: white;">Loriam eaque animi unde aspernatur doloremque quisquam ipsam molestias quae ullam, illum possimus, cum quibusdam?
                    </p>
                    <div class="btndesign" style="width: 200px ; background-color: brown; border-radius: 10px; display: flex;justify-content: center; align-items: center; margin-left: 150px;">Download or IOS</div>
                    <div class="" style="width: 200px ; border-radius: 10px; border: 1px solid rgb(206, 206, 206); display: flex;justify-content: center; align-items: center; margin-right: 50px;;">Download or Andriod</div>
                </div>
            </div>
    </div>
  <!-- </section> -->
     </div>
     </div>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateY(5px); */
  opacity: 0.1;
}
.best{
    /* background-image: url(../../../assets/about.jpg); */
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color:rgb(255, 255, 255);
    text-align: center;
    /* margin:auto; */
    width: 85%;
    height: 90%;
    /* background-color: blue; */
    text-align: start;
}
@media screen and (max-width:700px){
	.none{
		display: none;
	}
  .sim{
  height: 380px;
}
/* .best{
  height: 50%;
} */
.sec1{
  height: 55vh !important;
}

}

</style>