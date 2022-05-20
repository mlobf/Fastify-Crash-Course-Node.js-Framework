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
};

// Options for get one item
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts, (req, reply) => {
    reply.send(items);
  });

  // GET ONE ITEM
  fastify.get("/items/:id", getItemOpts, (req, reply) => {
    const { id } = req.params;

    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
