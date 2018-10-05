import { postExposer } from 'business-rules-package';

export default {
  async getPosts({ commit }) {
    try {
      const posts = await postExposer.posts;
      return commit('GET_POSTS', posts);
    } catch (error) {
      throw error;
    }
  },

  async createPost({ commit }, payload) {
    try {
      const post = await postExposer.createPost(payload);
      return commit('NEW_POST', post);
    } catch (error) {
      throw error;
    }
  },
};
