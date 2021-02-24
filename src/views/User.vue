<template>
  <div class="container">
    <jumbotron :content="content"></jumbotron>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import Jumbotron from './../components/Jumbotron'

export default {
  name: 'User',
  components: { Jumbotron },

  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserContent().then(
      response => {
        this.content = response.data.content;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>