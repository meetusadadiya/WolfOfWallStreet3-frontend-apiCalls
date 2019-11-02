fetch(apiUrl + 'login', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		origin: 'localhost'
	},
	body: {
		mobile: '9999999991',
		password: 'password'
	}
})
	.then((response) => {
		console.log(response); // response
	})
	.catch((err) => {
		console.log(err);
	});
