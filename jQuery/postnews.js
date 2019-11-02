var settings = {
	async: true,
	crossDomain: true,
	url: apiUrl + 'news',
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'x-auth-token': 'Admin Token Value'
	},
	processData: false,
	data: `{
            "news":"The quick brown fox jumps over the lazy dog."
        }`
};

$.ajax(settings).done(function(response) {
	console.log(response);
});
