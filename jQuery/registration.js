var settings = {
	async: true,
	crossDomain: true,
	url: apiUrl + 'register',
	method: 'POST',
	headers: {
		'content-type': 'application/json'
	},
	processData: false,
	data: `{
            "firstname":"John",
            "lastname":"Doe",
            "mobile":9999999991,
            "password":"password",
            "email":"admin@example.com"
        }`
};

$.ajax(settings).done(function(response) {
	console.log(response);
});
