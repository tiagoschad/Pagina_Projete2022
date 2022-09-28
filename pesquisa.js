const firebaseConfig = {
    apiKey: "AIzaSyA2MR-EIhfrBldyxsg5Hfjl09Iwbof9cyk",
    authDomain: "projetesvdb.firebaseapp.com",
    databaseURL: "https://projetesvdb-default-rtdb.firebaseio.com",
    projectId: "projetesvdb",
    storageBucket: "projetesvdb.appspot.com",
    messagingSenderId: "214663302807",
    appId: "1:214663302807:web:cbd3ab564500f58d0763d2",
    measurementId: "G-MRWJK7P0XN"
};

firebase.initializeApp(firebaseConfig)

db = firebase.database()

function BuscarFirebase(elementos) {
    numBrinco = document.getElementById("nbrinco").value
    for (i in elementos) {
        console.log(elementos)
        if (numBrinco == elementos[i]["dados"]["Brinco"]) {
            boi = elementos[i]["dados"]
            break
        }
    }
    document.getElementById("brinco").innerHTML = boi["Brinco"]
    document.getElementById("raca").innerHTML = boi["Raça"]
    document.getElementById("idade").innerHTML = boi["Idade"]
    document.getElementById("racao").innerHTML = boi["Ração"]
    document.getElementById("vacinas").innerHTML = boi["Vacinas"]
    document.getElementById("sexo").innerHTML = boi["Sexo"]


}

function Buscar() {
    if (document.getElementById('nbrinco').value == "") {
        alert('Digite o número do brinco')
    }
    else{
    document.getElementById("tabela").style.display = "block"
    document.getElementById("buscar").style.display = "none"

    try {
        db
            .ref("Dados")
            .once("value")
            .then(function (snapshot) {
                resElement = snapshot.val()
                BuscarFirebase(resElement)
            })
    }
    catch {
        alert("ERRO")
    }
}
}

function Editar(){
    document.getElementById("btnse").style.display = "block"
    document.getElementById("btnc").style.display = "block"
    document.getElementById("btned").style.display = "none"

}

function Salvar(){
    document.getElementById("btnse").style.display = "none"
    document.getElementById("btnc").style.display = "none"
    document.getElementById("btned").style.display = "block"

}

function Cancelar(){
    document.getElementById("btnse").style.display = "none"
    document.getElementById("btnc").style.display = "none"
    document.getElementById("btned").style.display = "block"

}