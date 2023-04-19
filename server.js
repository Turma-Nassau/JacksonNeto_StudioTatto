const express = require('express');
const app = express();


const fs = require('fs');
let PORT = 8000;
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');


const tatuadorRoutes = require('./routes/tatuadorRoutes')
const tatuagemRoutes = require('./routes/tatuagemRoutes')
const { sequelize } = require('./models')


app.use(logger)

const connectDB = async () => {
    console.log('Checando conexao com banco de dados');
    try {
        await sequelize.authenticate();
        console.log('Banco de dados Conectado');
    }
    catch (e) {
        console.log('Conexao falhou', e);
        process.exit(1)
    }
}

(async () => {
    await connectDB();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: true,
    }))

    
    app.use('/api/tatuador', tatuadorRoutes);
    app.use('/api/tatuagem', tatuagemRoutes);
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.listen(PORT, () => {
        console.log(`Rodando na Porta ${PORT}.`)
    })

})()

function logger(request, response, next) {
    let log = `${new Date()}, ${request.method}, ${request.url}, ${request.body} \n`;
    fs.appendFile('./LOGGING.log', log, (err) => {
        if (err) throw err;
        console.log(log)
    })
    next()
}

