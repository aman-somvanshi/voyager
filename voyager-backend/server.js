const jsonServer = require('json-server');
const cors = require('cors');
const server = json-server.create();
const routerState = jsonServer.router('state.json');
const routerHotel = jsonServer.router('hotelBooking.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.use('/state', routerState);
server.use('/hotelBooking', routerHotel);

server.listen(process.env.PORT || 10000, () => {
    console.log('JSON Server is running on port 10000');
});