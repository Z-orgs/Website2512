if (window.history.replaceState) {
	window.history.replaceState(null, null, window.location.href);
}
function logout() {
	fetch('/', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			typeOfForm: 'logout',
		}),
	});
	window.location.reload();
}
