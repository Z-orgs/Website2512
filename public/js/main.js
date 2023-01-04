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
	})
		.then((data) => data.json())
		.then((data) => window.location.reload());
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
	})
		.then((data) => data.json())
		.then((data) => window.location.reload());
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
	})
		.then((data) => data.json())
		.then((data) => window.location.reload());
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
	})
		.then((data) => data.json())
		.then((data) => window.location.reload());
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
	})
		.then((data) => data.json())
		.then((data) => window.location.reload());
}
function admin() {
	window.open('https://www.facebook.com/syhanh.xlsx/');
}
