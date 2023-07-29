"use strict";

/**
 * A set of functions called "actions" for `create-comment`
 */

module.exports = {
  handleComment: async (ctx, next) => {
    try {
      const entry = await strapi.entityService.create(
        "api::ninepmx-comment.ninepmx-comment",
        {
          data: ctx.request.body,
        }
      );
      return entry;
    } catch (err) {
      ctx.body = err;
    }
  },
};
