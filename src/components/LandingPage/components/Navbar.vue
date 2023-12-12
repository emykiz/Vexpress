<!-- <template>
     <main class="navbar">
		<section class="navbar-brand">
			<img src="../../icons/logo.svg" width="45" />
			
			<button @click="showMenu = true" class="active:scale-95 duration-300 md:hidden" type="button">
				<i class="fa fa-bars text-gray-50 text-2xl"></i>
			</button>
			
			
		</section>
		
		<section :class="showMenu ? 'right-0' : '-right-full'" class="navbar-menu">
			<ul class="navbar-list">
			<span @click="showMenu = false" class=" md:hidden"><i class="fa fa-times text-gray-50"></i></span>
				<template v-for="(menu, x) in menus" :key="x">
					<li :class="menuActive === menu.name ? 'border-b-4 border-blue-400' : ''" class="text-gray-50 font-medium duration-300">
						<a @click="menuActive = menu.name" :href="menu.to" >{{ menu.name }}</a>
						
					</li>
					
				</template>
			</ul>
		</section>
	</main>
</template>

<style scoped>
	.navbar {
		@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
		background-color:  white !important;
	}

	.navbar-brand {
		@apply flex items-center justify-between md:gap-3;
	}

	.navbar-menu {
		@apply duration-300 fixed md:relative top-0 bottom-0 bg-blue-600 md:bg-opacity-0 px-5 lg:px-0 pt-12 md:pt-0;
	}

	.navbar-list {
		@apply flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 lg:text-xl;
	}
</style>

<script setup>
	
	import { ref } from 'vue'

	const menuActive = ref('Beranda')
	const showMenu = ref(false)
	const viewport = ref(window.innerWidth) //Get current width of browser

	if ( viewport.value >= 768 ) showMenu.value = true //If device tablet or more wider shoow menu
	
	const menus = [
		{
			name: 'Beranda',
			to: '#'
		},
		{
			name: 'Tentang',
			to: '#about'
		},
		{
			name: 'Kegiatan',
			to: '#event'
		},
		{
			name: 'FAQ',
			to: '#FAQ'
		},
		{
			name: 'Narahubung',
			to: '#contact'
		},
		{
			name: 'Pengumuman',
			to: '#announcement'
		}
	]
	
</script> -->

<!-- <template>

	<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		<a href="#home" class="navbar-brand">
			<img src="@/assets/images/logo.png" alt="Brand" />
		</a>
		<button
			type="button"
			class="navbar-toggler"
			data-toggle="collapse"
			data-target="#navbarResponsive"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collpase navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a href="#home" class="nav-link">Home</a>
				</li>
				<li class="nav-item">
					<a href="#courses"  class="nav-link">Courses</a>
				</li>
				<li class="nav-item">
					<a href="#features"  class="nav-link">Features</a>
				</li>
				<li class="nav-item">
					<a href="#resouces"  class="nav-link">Resouces</a>
				</li>
				<li class="nav-item">
					<a href="#clients"  class="nav-link">Clients</a>
				</li>
				<li class="nav-item">
					<a href="#contact"  class="nav-link">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
</template>
<style scoped>
.navbar {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    background-color: rgba(0, 0, 0, 0.7) !important;
}
.navbar-brand img {
    height: 2rem;
}
.navbar-toggler {
    outline: none !important;
}
.navbar-nav li {
    padding-right: 0.5rem;
}
.navbar .navbar-nav .nav-link {
    color: white;
    padding-top: 0.8rem;
}
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:hover {
    color: #1ebba3;
    cursor: pointer;
}

.hero {
    height: 100vh;
    width: 100%;
    position: relative;
}
.hero .overlay {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
.home-hero {
    background-image: url("../assets/images/home-bg.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.caption {
    position: absolute;
    top: 35%;
    width: 100%;
    color: white;
    text-transform: uppercase;
}
.caption h1 {
    font-size: 3.8rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    text-shadow: 0.1rem 0.1rem 0.8rem black;
    padding-bottom: 1rem;
}
.caption h3 {
    font-size: 2rem;
    text-shadow: 0.1rem 0.1rem 0.8rem black;
    padding-bottom: 1rem;
}
</style> -->

<script setup>
    import { ref } from 'vue';

    let mobileNav = ref(false);

    let toggleMobileNav = () => {
        mobileNav.value = !mobileNav.value
    }
</script>

<template style="background-color: white;">
    <!-- Navbar Start -->
    <div class="container mx-auto px-5" style="background-color: white; width: 100% !important; height: 110px;display: flex;justify-content: center;align-items: center; "  >
        <header class="flex justify-between py-12 items-center" style="width: 100%;" >
            <div>
                <a href="/"><img src="../../icons/logo.svg" alt="Site Logo"></a>
            </div>
            
            <nav class="flex  flex-col md:flex-row" style="justify-content: space-between; align-items: end;">
                <!-- Menu Toggler -->
                <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>

                <!-- Desktop Menu -->
                <ul class="space-x-10 font-theme-heading font-medium items-center hidden md:flex  flex-col space-y-7 md:space-y-0 md:flex-row" style="margin-right: 100px;margin-left: 200px; ">
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#features" v-smooth-scroll style="color: black;">Home</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#faq" v-smooth-scroll style="color: black;">About Us</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#subscribe" v-smooth-scroll style="color: black;">Contact Us</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#subscribe" v-smooth-scroll style="color: black;">Services</a></li>
                    
					<li></li>
                </ul>
				
            </nav>
			<button class="btndesign none">
						sign in
					</button>
        </header>

        <!-- Mobile Menu Start-->
        <div v-show="mobileNav" >
            <div class="absolute px-5 py-12 block z-30 top-0 left-0 w-full h-full bg-gradient-to-b from-theme-dark-blue via-theme-dark-blue-tp to-theme-dark-blue" style="background-color: white;z-index: 999;">
                <div class="flex justify-between items-center">
                    <img src="../../icons/logo.svg" alt="Logo">
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x " viewBox="0 0 16 16" style="color: black;">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul class="uppercase text-white text-md tracking-widest items-center flex flex-col mt-14">
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#features" style="color: black; text-decoration: none; cursor: pointer;">Home</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#faq" style="color: black; text-decoration: none; cursor: pointer;">About</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#subscribe" style="color: black; text-decoration: none; cursor: pointer;">Services</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#download-section" style="color: black; text-decoration: none; cursor: pointer;">Contact Us</a>
                    </li>
                </ul>
                <div class="flex justify-center items-end h-52">
                    <ul class="flex space-x-8">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
    <!-- Navbar End -->
</template>
<style>
@media screen and (max-width:700px){
	.none{
		display: none;
	}
}
</style>