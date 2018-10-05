<template>
  <div>
    <h1>test</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
    <form @submit.prevent="submit">
      <table>
        <tr>
          <td><input type="text" v-model="newPost.title"></td>
        </tr>
        <tr>
          <td><textarea name="" id="" cols="30" rows="10" v-model="newPost.body"></textarea></td>
        </tr>
        <tr>
          <td><button>Enviar</button></td>
        </tr>
      </table>


      <!-- /# -->
    </form>
  </div>

</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      newPost: {},
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    submit() {
      return this.createPost();
    },

    getPosts() {
      return this.$store.dispatch('getPosts');
    },
    createPost() {
      return this.$store.dispatch('createPost', this.newPost);
    },
  },
  computed: {
    ...mapGetters({
      posts: 'posts',
    }),
  },
};
</script>

<style lang="css" scoped>
</style>

