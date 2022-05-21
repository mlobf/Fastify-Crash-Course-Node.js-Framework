const fastify = require("fastify")({ logger: true });

// VOLTOU AS 19:23

fastify.register(require("./routes/items"));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
