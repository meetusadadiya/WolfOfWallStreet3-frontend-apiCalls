var data = JSON.stringify({
	mobile: '9999999991', // Mobile Number Will Go Here
	password: 'password' // Password Will Go Here
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', apiUrl + 'login');
xhr.setRequestHeader('content-type', 'application/json');

xhr.send(data);
