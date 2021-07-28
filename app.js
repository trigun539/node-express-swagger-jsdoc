const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = 3000
const app = express()

/**
 * Swagger Config
 */

const swaggerOpts = {
  swaggerDefinition: {
    info: {
      title: 'Cars API',
      version: '1.0.0'
    }
  },
  apis: ['./app.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOpts)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * API
 */

app.get('/', (req, res) => {
  res.send('Awesome API')
})

/**
 * @swagger
 * /cars:
 *  get:
 *    description: Get all cars
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/cars', (req, res) => {
  res.send(['car 1', 'car 2'])
})

app.listen(PORT, () => {
  console.log(`App started on: http://localhost:${PORT}`)
})
