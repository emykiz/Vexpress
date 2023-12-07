<template>
    <footer>
        <div class="footer" >
            <div class="grp1">
                <div class="margin" style="width: 300px;display: flex; align-items: center;justify-content: center;">
                    <ul style="display: flex; justify-content: center; align-items: center; flex-direction: column;gap:1em">
                        <div class="Logo_nav">
                            <!-- <h2>Senpai Academy</h2> -->
                            <img src="../../icons/logo.svg">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor ipsum delectus cupiditate hic, ullam atque distinctio eligendi modi perferendis obcaecati ipsa magni beatae. Non vero ipsum eaque, tenetur ullam quos et doloribus! Accusantium voluptates unde consequatur at nesciunt consequuntur veniam doloremque aliquam sapiente obcaecati.
                        </p>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>feature</h4>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Support</h4>
                        <li><a href="rooms.html">Rooms</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="services.html">Services</a></li>
                    </ul>
                </div>
            </div>
            <div class="grp2">
                <div>
                    <div class="info">
                        <i class="fa fa-map-pin icon1" aria-hidden="true"></i> 
                        <div>
                            <h4 style="color: white !important;">Booking</h4>
                            <p>1 Nkemba Street, Uyo</p>
                            <p>Akwa Ibom State</p>
                        </div>
                    </div>
                    <div class="info">
                        <i class="fa fa-phone icon1" aria-hidden="true"></i>
                        <div>
                    <p>Sign up for our newsletter</p>
                    <div class="newsletter">
                        <input type="email" name="news" id="news" placeholder="Enter your email">
                        <button class="plane"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
                    </div>
                    <div class="info">
                        <i class="fa fa-envelope icon1" aria-hidden="true"></i>
                        <div>
                            <p>contact@emedionghotel.com</p>
                        </div>
                    </div>
                </div>
               
                <div>
                            <h4>Legal</h4>
                            <p>+234 814 650 0966</p>
                        </div>
            </div>
        </div>
        <div>
            <p class="rights">&copy; <span class="date">2023</span> All rights reserved</p>
        </div>
    </footer>
</template>
<style>


footer {
    background-color: rgb(46, 45, 45);
    width: 100vw;
    margin: 0;
    padding: 80px 0px;
    /* position: relative; */
    color: white;
    font-weight: 300;
    
}

.footer {
    display: flex;
    align-items: baseline;
    gap: 7em;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    
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
    .margin{
        margin-left: 100px;
    }
}
@media only screen and (max-width: 450px) {
    .margin{
        margin-left: 0px;
        font-size: x-small;
    }
}
</style>