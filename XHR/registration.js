var data = JSON.stringify({
	firstname: 'John',
	lastname: 'Doe',
	mobile: 9999999991,
	password: 'password',
	email: 'admin@example.com'
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', apiUrl + 'register');
xhr.setRequestHeader('content-type', 'application/json');

xhr.send(data);
