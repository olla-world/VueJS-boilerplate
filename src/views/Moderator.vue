<template>
  <div class="container">
    <jumbotron :content="content"></jumbotron>
    <button class="change" @click="handleClick">click me</button>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import Jumbotron from './../components/Jumbotron'

export default {
  components: { Jumbotron },
  name: 'Moderator',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getModeratorContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },

  methods: {
    handleClick(){ 
      console.log("clicked")
      this.content="changed"
    }
  },
};
</script>
