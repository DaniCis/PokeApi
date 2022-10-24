const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const pokeRoutes = require('./routes/pokemon-routes')
const path = require('path')


const swaggerUI = require('swagger-ui-express')
const swaggerJsDocs = require('swagger-jsdoc')
const options = require('./docs')

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/docs", swaggerUI.serve ,swaggerUI.setup(swaggerJsDocs(options)))


app.use(pokeRoutes)
app.use((err,req,res,next) =>{
    return res.json({
        message:err.message
    })
})


app.listen(4000)
