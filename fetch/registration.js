fetch(apiUrl + 'register', {
	method: 'POST',
	headers: {
		'content-type': 'application/json'
	},
	body: {
		firstname: 'John',
		lastname: 'Doe',
		mobile: 9999999991,
		password: 'password',
		email: 'admin@example.com'
	}
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
