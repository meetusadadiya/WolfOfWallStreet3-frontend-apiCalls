fetch(apiUrl + 'news', {
	method: 'GET',
	headers: {}
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
