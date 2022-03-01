const express = require('express');
const router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', (req, res, _next) => {
	res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (_req, res, _next) => {
	res.render('form');
});

router.post('/new', (req, res, _next) => {
	messages.push({
		text: req.body.message,
		user: req.body.author,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = router;
