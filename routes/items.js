const { getItem, getItems, addItem } = require("../controllers/items");

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
  handler: getItems,
};

// Options for get one item => Return an Object
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

// Options for Post one item => Return an Object
const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts);

  // GET ONE ITEM
  fastify.get("/items/:id", getItemOpts);

  // ADD ONE ITEM
  fastify.post("/items", postItemOpts);

  done();
}

module.exports = itemRoutes;
