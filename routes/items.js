const items = require("../items");

// Item Schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: { Item },
      },
    },
  },

  handler: function (req, reply) {
    reply.send(items);
  },
};

// Options for get one item => Return an Object
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts);

  // GET ONE ITEM
  fastify.get("/items/:id", getItemOpts, (req, reply) => {
    const { id } = req.params;

    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
