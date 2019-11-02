fetch(apiUrl + 'news', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'x-auth-token': 'Admin Token Value'
	},
	body: {
		news: 'The quick brown fox jumps over the lazy dog.'
	}
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
