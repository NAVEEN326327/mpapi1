// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
// const turbo = require('turbo360'({site_id: process.env.TURBO_APP_ID}))
// const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
// const router = vertex.router()
const controllers = require('../controllers')


// GET method for all end points
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: "Invalid Resource"
		})
		return
	}

	controller.get(filters)    // filter is used for specific en
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})

		})
})

// Get method to get specific data by id
router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.getById(id)
		.then(data => {
			res.json({
				confirmation: 'Success',
				data: data
			})

		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})


// POST - create new entities:
router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Response'
		})
		return
	}

	controller.post(req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})


router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Response'
		})
		return
	}

	controller.put(req.params.id, req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})

		})
})

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Response'
		})
		return
	}

	controller.delete(req.params.id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})

		})


})



module.exports = router