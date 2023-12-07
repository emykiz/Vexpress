/*eslint-disable*/
import { createRouter,createWebHashHistory} from "vue-router";


import Admin from '../components/HomePage.vue'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import Users from '../components/DashBoard/usersList.vue'
import UsersTodo from '../components/DashBoard/usersTodo.vue'
import usersProfile from '../components/DashBoard/usersProfile.vue'
import usersTransaction from '../components/DashBoard/transaction.vue'
import  LandingPage from '../components/LandingPage/home.vue'


// import Loader from '../components/extras/Loader.vue'




const routes = [

    {
      path: "/",
      name: "admin",
      component: Admin,
    //   meta: {auth:false}
    },
    {
      path: "/usersProfile",
      name: "usersProfile",
      component: usersProfile,
    //   meta: {auth:false}
    },
    {
      path: "/transaction",
      name: "transaction",
      component: usersTransaction,
    //   meta: {auth:false}
    },
    {
      path: "/landingPage",
      name: "landingPage",
      component: LandingPage,
    //   meta: {auth:false}
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
      children: [
          {
            path: 'users', // Nested route path
            component: Users,
           
          }
        ]
  },

    // {
    //     path: "/dashboard",
    //     name: "dashboard",
    //     component: DashBoard,
    //     children: [
    //         {
    //           path: 'usersTodo', // Nested route path
    //           component: UsersTodo,
             
    //         }
    //       ]
    // },

  //   {
  //     path: "/dashboard",
  //     name: "dashboard",
  //     component: DashBoard,
  //     children: [
  //         {
  //           path: 'usersProfile', // Nested route path
  //           component: usersProfile,
           
  //         }
  //       ]
  // },

    // {
      
            
    //   path : '/usersTodo',
    //   component: UsersTodo,
          
    // },

    {
      path: "/usersTodo",
      name: "usersTodo",
      component: UsersTodo,
  },
    // {
    //   path: "/loader",
    //   name: "loader",
    //   component: Loader,
    // },


];



const router = createRouter({

    history: createWebHashHistory(),
    routes,

})

export default router;