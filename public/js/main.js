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
function unlock(username) {
	fetch('/console', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			action: 'unlock',
		}),
	});
	window.location.reload();
}
function lock(username) {
	fetch('/console', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			action: 'lock',
		}),
	});
	window.location.reload();
}
function makeAdmin(username) {
	fetch('/console', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			action: 'makeAdmin',
		}),
	});
	window.location.reload();
}
function cancelAdmin(username) {
	fetch('/console', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			action: 'cancelAdmin',
		}),
	});
	window.location.reload();
}
function admin() {
	window.open('https://www.facebook.com/syhanh.xlsx/');
}
