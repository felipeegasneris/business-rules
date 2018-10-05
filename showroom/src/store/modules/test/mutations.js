const GET_POSTS = (state, update) => {
  state.posts = update;
};
const NEW_POST = (state, update) => {
  state.posts.push(update);
};

export default {
  GET_POSTS,
  NEW_POST,
};
