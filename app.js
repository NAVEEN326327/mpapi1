// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
// const express = require('express')

// const app = express() // initialize app


const config = {
	views: 'views', 							// Set views directory 
	static: 'public', 							// Set static assets directory
	// logging: true,
	db: {
		url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		// url: 'mongodb://localhost/projectdb',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection failed')
		},
		onSuccess: () => {
			console.log('project db connected')
		}
	}
	// controllers: require('./controllers'), 	// only for CMS integration
	// db: vertex.nedb()
}

// vertex.configureApp(app, config) // remove line 30 below and replace with this

const app = vertex.app(config)

// vertex.configureApp(app)
// app.use(vertex.setContext(process.env))


// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app