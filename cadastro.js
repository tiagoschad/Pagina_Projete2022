const firebaseConfig = {
    apiKey: "AIzaSyA2MR-EIhfrBldyxsg5Hfjl09Iwbof9cyk",
    authDomain: "projetesvdb.firebaseapp.com",
    databaseUrl: "https://projetesvdb-default-rtdb.firebaseio.com",
    projectId: "projetesvdb",
    storageBucket: "projetesvdb.appspot.com",
    messagingSenderId: "214663302807",
    appId: "1:214663302807:web:cbd3ab564500f58d0763d2",
    measurementId: "G-MRWJK7P0XN"
};

firebase.initializeApp(firebaseConfig)

db - firebase.database()

function Salvar()
{
    if ((document.getElementById("brinco").value == '') || (document.getElementById("raca").value == '') || (document.getElementById("idade").value == '') || (document.getElementById("racao").value == '') || (document.getElementById("vacina").value == '') || (document.getElementById("massa").value == ''))
    {
        document.getElementById('buttondois').disabled = true
        alert("Preencha todos os dados para continuar")
    }
        else if ((document.getElementById("dot-1").checked) || (document.getElementById("dot-2").checked))
        {
            document.getElementById('buttondois').disabled = false
            document.getElementById('buttonum').disabled = true
        }
            else
            {
                alert("Selecione o sexo do animal")
            }
}

function GerarQRCode(){
    window.location.href = "file:///C:/Users/tiago/Desktop/Pagina_Projete2022/qrcode.html"
}