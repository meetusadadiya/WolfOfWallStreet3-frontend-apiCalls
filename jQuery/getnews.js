var settings = {
	async: true,
	crossDomain: true,
	url: apiUrl + 'news',
	method: 'GET',
	headers: {}
};

$.ajax(settings).done(function(response) {
	console.log(response);
});
