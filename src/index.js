require('dotenv').config();

const app = require('./app').app;
const http = require('http');

const server = http.createServer(app);

// starting the server
/*app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});*/
async function main() {
  await server.listen(app.get('port'));
  console.log(`Server on port ${app.get('port')}`);
}
main();
