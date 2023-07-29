module.exports = {
  routes: [
    {
      method: "POST",
      path: "/ninepmx-create-comment",
      handler: "create-comment.handleComment",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
