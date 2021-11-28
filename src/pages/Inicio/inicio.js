function validate() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username == 'admin' && password == '123456') {
		swal({
			title: 'Bienvenido',
			text: 'Sesión iniciada correctamente',
			icon: 'success',
		}).then(() => {
			window.location.href = '../../index.html';
		});
	} else {
		swal({
			title: 'Error',
			text: 'Usuario o contraseña incorrectos',
			icon: 'error',
		}).then(() => {
			return false;
		});
	}
}
