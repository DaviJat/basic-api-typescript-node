import express from 'express';

import { userRouter } from './modules/user/userRouter.js';

// Start expresser server
const server = express();

// Allows server to use json
server.use(express.json());

// Routes the HTTP GET Requests to the path
server.get('/', (req, res) => {
	res.send('Hello World');
});

// Allows server to use /user routes
server.use('/user', userRouter);

// Listens for connections on a given path
server.listen(3333, () => {
	console.log('Server started on port 3333');
});
