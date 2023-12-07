<template>
     <div class="section" style="display: flex; background-color:white !important; justify-content:space-between;align-items: center; margin-top: 100px; width: 100%;flex-wrap: wrap; margin-bottom: 100px;">
                <div class="media" style=" background-color: rgb(221, 214, 205); height: 350px !important; width: 500x; padding: 50Px; margin-left: 0px;">
                    <h3>MEET OUR CEO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptate nostrum modi eveniet sint harum cum assumenda distinctio! Quo voluptatibus, vero delectus provident enim aliquid rerum exercitationem! Quam, deleniti ipsum.
                    </p>
                    <button class="btndesign">See More</button>

                </div>
                <img src="../../../assets/ceo.jpg" width="470px" height="411px" class="pics">
            </div>
</template>
<style>

.btndesign{
    background-image: linear-gradient(to right, rgb(124, 1, 1) 50%, yellow);
    border: none;
    width: 170px;
    color: white;
    height: 50px;
}
.pics{
    width: 300px !important;
    height: 411px !important;
}
.media{
    width: 1050px;
}
@media screen and (max-width:700px){
    .pics{
        width: 500px !important;
    
    }
    .media{
        width:500px;
    } 
}
</style>