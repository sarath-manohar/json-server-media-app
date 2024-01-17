//import json-server in index.js file

const jsonServer = require('json-server')

// create a server for media app

const mediaPlayerServer = jsonServer.create()

//set up path/route from json file

const router = jsonServer.router('db.json')

//Returns middlewares used by JSON Server.

const middlewares = jsonServer.defaults()

//set up port for running server
const port = 4000 || process.env.PORT

//use middleware and router in server

mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

//to listen server for resolving request from server

mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at port ${port},and waiting for client request!!! `);
})

