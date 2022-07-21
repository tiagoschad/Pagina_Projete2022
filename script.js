// Escanear QR Code
var video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream
    video.play()
})
.catch(error => {
    console.log(error)
})
video.addEventListener('scan', content =>{
    console.log(content)
})