// const http = require("http");

// const app = require("./src/app");

// require("dotenv").config();
// require("./src/config/db");

// const server = http.createServer(app);

// const PORT = process.env.PORT || 3200;
// server.listen(PORT);

// server.on("listening", () => {
//   console.log(`Servidor escuchando puerto ${PORT}`);
// });

// server.on("error", (error) => console.log(error));

const http = require("http");

// Recupera la aplicaiocn de express.
const app = require("./src/app");

// Leemos el fichero de entorno.
require("dotenv").config();

//Configurar la base de datos
require("./src/config/db");

// Creacion del servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on("listening", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on("error", (error) => console.log(error));
