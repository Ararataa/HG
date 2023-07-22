const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.end("hello worlddddddd!");
})

app.listen(3000, () => {
	console.log('app listening on port 3000');
});