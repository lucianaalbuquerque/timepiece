function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    msg.innerHTML = `It's ${hora}:${minuto}.`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="morning.png">'
        document.body.style.background = "#ededa6"
        msg.innerHTML += ' Good Morning!'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="afternoon.png">'
        document.body.style.background = "#95c4ac"
        msg.innerHTML += ' Good Afternoon!'
    } else {
        img.innerHTML = '<img src="night.png">'
        document.body.style.background = "#948d9e"
        msg.innerHTML += ' Good Night!'
    }
}