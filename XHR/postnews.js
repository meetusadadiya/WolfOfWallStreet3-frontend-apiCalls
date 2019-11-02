var data = JSON.stringify({
	news: 'The quick brown fox jumps over the lazy dog.'
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', apiUrl + 'news');
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('x-auth-token', 'Admin Token Value');

xhr.send(data);
