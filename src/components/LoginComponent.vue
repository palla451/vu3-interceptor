<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      username: undefined,
      password: undefined,
      userLogged: false,
      response : null,
      token: null
    }
  },
  methods: {
    async login(){
      try {
        const result = await axios.post(process.env.VUE_APP_BASE_URI + 'login',{
          'username' : this.username,
          'password' : this.password
        });
        console.log('Credenziali corrette');
        this.userLogged = true;
        this.response = result.data
        localStorage.setItem( 'token', result.data.token);

        // Effettua il reindirizzamento solo dopo aver ottenuto il token con successo
        router.push('/')
      } catch (e) {
        console.log('Errore di autenticazione');
      }
    }

  }
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>

</style>
