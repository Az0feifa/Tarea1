function IniciarSesion() {
	usuario = document.getElementById('username').value;
	contrasena = document.getElementById('password').value;

	if (usuario == 'admin' && contrasena == '123456') {
		swal({
			title: 'Bienvenido',
			text: 'Sesión iniciada correctamente',
			icon: 'success',
		}).then(()=>{
		window.location.href = '../../index.html';
        })
	} else {
		swal({
			title: 'Error',
			text: 'Usuario o contraseña incorrectos',
			icon: 'error',
		});
	}
}
