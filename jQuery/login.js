var settings = {
	async: true,
	crossDomain: true,
	url: apiUrl + 'login',
	method: 'POST',
	headers: {
		'content-type': 'application/json'
	},
	processData: false,
	data: `{
                "mobile":"9999999991",
                "password":"password"
            }`
};

$.ajax(settings).done(function(response) {
	console.log(response); // response
});
