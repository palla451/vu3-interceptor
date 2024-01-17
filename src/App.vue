<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style>
/* ... stili rimossi per brevità ... */
</style>

<script>
import axios from "axios";
// import {VerificaLoginMixin} from "@/mixin/VerificaLoginMixin";

export default {
  data() {
    return  {
      userLogged: null
    }
  },
  // mixins: [VerificaLoginMixin],
  // mounted() {
  //   // Chiama la funzione logged solo se non sei nella pagina di login
  //   if(this.$route.path === '/login') {
  //     this.logged();
  //   }
  // }
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('logged');
        console.log('Data:', response.data);
        this.userLogged = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  mounted() {
    if (this.$route.fullPath !== '/login') {
      console.log(this.$route);
      this.fetchData();
    }else {
      console.log('non faccio la chiamata');
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
