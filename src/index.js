const express = require('express')
const cors = require('cors')
const db = require('./database')

class ControllerApi {
    constructor()
    {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json())
        this.express.use(express(cors()))
    }

    routes()
    {
        const rotas = require('./routes/routes')
        this.express.use('/api/', rotas)     
    }
}

module.exports = new ControllerApi().express