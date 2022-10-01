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

tabela_criada = false

function BuscarFirebase(elementos) {
    numBrinco = document.getElementById("nbrinco").value
    for (i in elementos) {
        console.log(elementos)
        if (numBrinco == elementos[i]["dados"]["Brinco"]) {
            boi = elementos[i]["dados"]
            break
        }
    }
    if(tabela_criada == false){
        document.getElementById("brinco").innerHTML = boi["Brinco"]
        document.getElementById("raca").innerHTML = boi["Raça"]
        document.getElementById("idade").innerHTML = boi["Idade"]
        document.getElementById("racao").innerHTML = boi["Ração"]
        document.getElementById("vacinas").innerHTML = boi["Vacinas"]
        document.getElementById("sexo").innerHTML = boi["Sexo"]
        tabela_criada = true
    }
    else{
        console.log(boi)
        elementoBrinco = document.getElementById("digita_brinco")
        elementoRaca = document.getElementById("digita_raca")
        elementoIdade = document.getElementById("digita_idade")
        elementoRacao = document.getElementById("digita_racao")
        elementoVacinas = document.getElementById("digita_vacinas")
        elementoSexo = document.getElementById("digita_sexo")

        brinco = elementoBrinco.value
        raca = elementoRaca.value
        idade = elementoIdade.value
        racao = elementoRacao.value
        sexo = elementoSexo.value
        vacinas = elementoVacinas.value

        document.getElementById("btnse").style.display = "none"
        document.getElementById("btnc").style.display = "none"
        document.getElementById("btned").style.display = "block"

        referencia = "Dados/" + i + "/dados"
        db.ref(referencia).set({
            Brinco: brinco,
            Raça: raca,
            Idade: idade,
            Ração: racao,
            Sexo: sexo,
            Vacinas: vacinas,
            Massa: boi["Massa"]
        })

        elementoBrinco = document.getElementById("digita_brinco")
        elementoRaca = document.getElementById("digita_raca")
        elementoIdade = document.getElementById("digita_idade")
        elementoRacao = document.getElementById("digita_racao")
        elementoVacinas = document.getElementById("digita_vacinas")
        elementoSexo = document.getElementById("digita_sexo")

        elementoLabelBrinco = document.getElementById("brinco")
        elementoLabelRaca = document.getElementById("raca")
        elementoLabelIdade = document.getElementById("idade")
        elementoLabelRacao = document.getElementById("racao")
        elementoLabelVacinas = document.getElementById("vacinas")
        elementoLabelSexo = document.getElementById("sexo")

        elementoBrinco.style.display = "none"
        elementoRaca.style.display = "none"
        elementoIdade.style.display = "none"
        elementoRacao.style.display = "none"
        elementoVacinas.style.display = "none"
        elementoSexo.style.display = "none"

        elementoLabelBrinco.style.display = "block"
        elementoLabelRaca.style.display = "block"
        elementoLabelIdade.style.display = "block"
        elementoLabelRacao.style.display = "block"
        elementoLabelVacinas.style.display = "block"
        elementoLabelSexo.style.display = "block"

        elementoLabelBrinco.innerHTML = brinco
        elementoLabelRaca.innerHTML = raca
        elementoLabelIdade.innerHTML = idade
        elementoLabelRacao.innerHTML = racao
        elementoLabelSexo.innerHTML = sexo
        elementoLabelVacinas.innerHTML = vacinas
    }
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
    elementoBrinco = document.getElementById("digita_brinco")
    elementoRaca = document.getElementById("digita_raca")
    elementoIdade = document.getElementById("digita_idade")
    elementoRacao = document.getElementById("digita_racao")
    elementoVacinas = document.getElementById("digita_vacinas")
    elementoSexo = document.getElementById("digita_sexo")

    elementoLabelBrinco = document.getElementById("brinco")
    elementoLabelRaca = document.getElementById("raca")
    elementoLabelIdade = document.getElementById("idade")
    elementoLabelRacao = document.getElementById("racao")
    elementoLabelVacinas = document.getElementById("vacinas")
    elementoLabelSexo = document.getElementById("sexo")

    elementoBrinco.style.display = "block"
    elementoRaca.style.display = "block"
    elementoIdade.style.display = "block"
    elementoRacao.style.display = "block"
    elementoVacinas.style.display = "block"
    elementoSexo.style.display = "block"

    elementoLabelBrinco.style.display = "none"
    elementoLabelRaca.style.display = "none"
    elementoLabelIdade.style.display = "none"
    elementoLabelRacao.style.display = "none"
    elementoLabelVacinas.style.display = "none"
    elementoLabelSexo.style.display = "none"

    
    document.getElementById("btnse").style.display = "block"
    document.getElementById("btnc").style.display = "block"
    document.getElementById("btned").style.display = "none"
}

function Salvar(){
    Buscar()
}

function Cancelar(){
    elementoBrinco = document.getElementById("digita_brinco")
    elementoRaca = document.getElementById("digita_raca")
    elementoIdade = document.getElementById("digita_idade")
    elementoRacao = document.getElementById("digita_racao")
    elementoVacinas = document.getElementById("digita_vacinas")
    elementoSexo = document.getElementById("digita_sexo")

    elementoLabelBrinco = document.getElementById("brinco")
    elementoLabelRaca = document.getElementById("raca")
    elementoLabelIdade = document.getElementById("idade")
    elementoLabelRacao = document.getElementById("racao")
    elementoLabelVacinas = document.getElementById("vacinas")
    elementoLabelSexo = document.getElementById("sexo")

    elementoBrinco.style.display = "none"
    elementoRaca.style.display = "none"
    elementoIdade.style.display = "none"
    elementoRacao.style.display = "none"
    elementoVacinas.style.display = "none"
    elementoSexo.style.display = "none"

    elementoLabelBrinco.style.display = "block"
    elementoLabelRaca.style.display = "block"
    elementoLabelIdade.style.display = "block"
    elementoLabelRacao.style.display = "block"
    elementoLabelVacinas.style.display = "block"
    elementoLabelSexo.style.display = "block"

    document.getElementById("btnse").style.display = "none"
    document.getElementById("btnc").style.display = "none"
    document.getElementById("btned").style.display = "block"
}