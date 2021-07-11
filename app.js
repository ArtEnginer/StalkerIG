

const username = document.getElementById('usernameField');
const password = document.getElementById('usernameField');
const btnLogin = document.getElementById('stalkerBtn');

btnLogin.addEventListener('click', () => {

  if (username.value && password.value) {
    swal({
      title: "Gagal Login !",
      text: "Maaf Password Yang Anda Masukan Salah !",
      icon: "error",
      dangerMode: true,

    })

  } else {
    swal({
      title: "Gagal Login !",
      text: "Tolong Masukan Password/Username Terlebih Dahulu !",
      icon: "warning",
      dangerMode: true,
    })


  }
})