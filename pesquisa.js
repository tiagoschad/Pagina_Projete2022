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

function BuscarFirebase2(elementos){
    numBrinco = document.getElementById("nbrinco").value
    for (i in elementos) {
        console.log(elementos)
        if (numBrinco == elementos[i]["dados"]["Brinco"]) {
            boi = elementos[i]["dados"]
            break
        }
    }
    if(tabela_criada == false){
        document.getElementById("massa").innerHTML = boi["Massa"]
        document.getElementById("massa1").innerHTML = boi["Massa1"]
        document.getElementById("massa2").innerHTML = boi["Massa2"]
        document.getElementById("massa3").innerHTML = boi["Massa3"]
        document.getElementById("massa4").innerHTML = boi["Massa4"]
        document.getElementById("massa5").innerHTML = boi["Massa5"]
        document.getElementById("data").innerHTML = boi["Data"]
        document.getElementById("data1").innerHTML = boi["Data1"]
        document.getElementById("data2").innerHTML = boi["Data2"]
        document.getElementById("data3").innerHTML = boi["Data3"]
        document.getElementById("data4").innerHTML = boi["Data4"]
        document.getElementById("data5").innerHTML = boi["Data5"]

        tabela_criada = true
    }
    else{
        console.log(boi)
        elementoMassa = document.getElementById("digita_massa")
        elementoMassa1 = document.getElementById("digita_massa1")
        elementoMassa2 = document.getElementById("digita_massa2")
        elementoMassa3 = document.getElementById("digita_massa3")
        elementoMassa4 = document.getElementById("digita_massa4")
        elementoMassa5 = document.getElementById("digita_massa5")
        elementoData = document.getElementById("digita_data")
        elementoData1 = document.getElementById("digita_data1")
        elementoData2 = document.getElementById("digita_data2")
        elementoData3 = document.getElementById("digita_data3")
        elementoData4 = document.getElementById("digita_data4")
        elementoData5 = document.getElementById("digita_data5")

        massa = elementoMassa.value
        massa1 = elementoMassa1.value
        massa2 = elementoMassa2.value
        massa3 = elementoMassa3.value
        massa4 = elementoMassa4.value
        massa5 = elementoMassa5.value
        data = elementoData.value
        data1 = elementoData1.value
        data2 = elementoData2.value
        data3 = elementoData3.value
        data4 = elementoData4.value
        data5 = elementoData5.value

        referencia = "Dados/" + i + "/dados"
        db.ref(referencia).set({
            Brinco: boi["Brinco"],
            Raça: boi["Raça"],
            Idade: boi["Idade"],
            Ração: boi["Ração"],
            Sexo: boi["Sexo"],
            Vacinas: vacinas,
            Massa: massa,
            Massa1: massa1,
            Massa2: massa2,
            Massa3: massa3,
            Massa4: massa4,
            Massa5: massa5,
            Data: data,
            Data1: data1,
            Data2: data2,
            Data3: data3,
            Data4: data4,
            Data5: data5
        })

        elementoMassa = document.getElementById("digita_massa")
        elementoMassa1 = document.getElementById("digita_massa1")
        elementoMassa2 = document.getElementById("digita_massa2")
        elementoMassa3 = document.getElementById("digita_massa3")
        elementoMassa4 = document.getElementById("digita_massa4")
        elementoMassa5 = document.getElementById("digita_massa5")
        elementoData = document.getElementById("digita_data")
        elementoData1 = document.getElementById("digita_data1")
        elementoData2 = document.getElementById("digita_data2")
        elementoData3 = document.getElementById("digita_data3")
        elementoData4 = document.getElementById("digita_data4")
        elementoData5 = document.getElementById("digita_data5")

        elementoLabelMassa = document.getElementById("massa")
        elementoLabelMassa1 = document.getElementById("massa1")
        elementoLabelMassa2 = document.getElementById("massa2")
        elementoLabelMassa3 = document.getElementById("massa3")
        elementoLabelMassa4 = document.getElementById("massa4")
        elementoLabelMassa5 = document.getElementById("massa5")
        elementoLabelData = document.getElementById("data")
        elementoLabelData1 = document.getElementById("data1")
        elementoLabelData2 = document.getElementById("data2")
        elementoLabelData3 = document.getElementById("data3")
        elementoLabelData4 = document.getElementById("data4")
        elementoLabelData5 = document.getElementById("data5")

        elementoMassa.style.display = "none"
        elementoMassa1.style.display = "none"
        elementoMassa2.style.display = "none"
        elementoMassa3.style.display = "none"
        elementoMassa4.style.display = "none"
        elementoMassa5.style.display = "none"
        elementoData.style.display = "none"
        elementoData1.style.display = "none"
        elementoData2.style.display = "none"
        elementoData3.style.display = "none"
        elementoData4.style.display = "none"
        elementoData5.style.display = "none"

        elementoLabelMassa.style.display = "block"
        elementoLabelMassa1.style.display = "block"
        elementoLabelMassa2.style.display = "block"
        elementoLabelMassa3.style.display = "block"
        elementoLabelMassa4.style.display = "block"
        elementoLabelMassa5.style.display = "block"
        elementoLabelData.style.display = "block"
        elementoLabelData1.style.display = "block"
        elementoLabelData2.style.display = "block"
        elementoLabelData3.style.display = "block"
        elementoLabelData4.style.display = "block"
        elementoLabelData5.style.display = "block"

        elementoLabelMassa.innerHTML = massa
        elementoLabelMassa1.innerHTML = massa1
        elementoLabelMassa2.innerHTML = massa2
        elementoLabelMassa3.innerHTML = massa3
        elementoLabelMassa4.innerHTML = massa4
        elementoLabelMassa5.innerHTML = massa5
        elementoLabelData.innerHTML = data
        elementoLabelData1.innerHTML = data1
        elementoLabelData2.innerHTML = data2
        elementoLabelData3.innerHTML = data3
        elementoLabelData4.innerHTML = data4
        elementoLabelData5.innerHTML = data5

    }
}

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
        document.getElementById("massa").innerHTML = boi["Massa"]
        document.getElementById("massa1").innerHTML = boi["Massa1"]
        document.getElementById("massa2").innerHTML = boi["Massa2"]
        document.getElementById("massa3").innerHTML = boi["Massa3"]
        document.getElementById("massa4").innerHTML = boi["Massa4"]
        document.getElementById("massa5").innerHTML = boi["Massa5"]
        document.getElementById("data").innerHTML = boi["Data"]
        document.getElementById("data1").innerHTML = boi["Data1"]
        document.getElementById("data2").innerHTML = boi["Data2"]
        document.getElementById("data3").innerHTML = boi["Data3"]
        document.getElementById("data4").innerHTML = boi["Data4"]
        document.getElementById("data5").innerHTML = boi["Data5"]

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

        referencia = "Dados/" + i + "/dados"
        db.ref(referencia).set({
            Brinco: brinco,
            Raça: raca,
            Idade: idade,
            Ração: racao,
            Sexo: sexo,
            Vacinas: vacinas,
            Massa: boi["Massa"],
            Massa1: boi["Massa1"],
            Massa2: boi["Massa2"],
            Massa3: boi["Massa3"],
            Massa4: boi["Massa4"],
            Massa5: boi["Massa5"],
            Data: boi["Data"],
            Data1: boi["Data1"],
            Data2: boi["Data2"],
            Data3: boi["Data3"],
            Data4: boi["Data4"],
            Data5: boi["Data5"]
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

function Buscar2(){
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
                BuscarFirebase2(resElement)
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

    elementoBrinco.value = boi["Brinco"]
    elementoRaca.value = boi["Raça"]
    elementoIdade.value = boi["Idade"]
    elementoRacao.value = boi["Ração"]
    elementoVacinas.value = boi["Vacinas"]
    elementoSexo.value = boi["Sexo"]

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

    document.getElementById("btnse").style.display = "none"
    document.getElementById("btnc").style.display = "none"
    document.getElementById("btned").style.display = "block"
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

function EditarMassa(){
    elementoMassa = document.getElementById("digita_massa")
    elementoMassa1 = document.getElementById("digita_massa1")
    elementoMassa2 = document.getElementById("digita_massa2")
    elementoMassa3 = document.getElementById("digita_massa3")
    elementoMassa4 = document.getElementById("digita_massa4")
    elementoMassa5 = document.getElementById("digita_massa5")
    elementoData = document.getElementById("digita_data")
    elementoData1 = document.getElementById("digita_data1")
    elementoData2 = document.getElementById("digita_data2")
    elementoData3 = document.getElementById("digita_data3")
    elementoData4 = document.getElementById("digita_data4")
    elementoData5 = document.getElementById("digita_data5")

    elementoMassa.value = boi["Massa"]
    elementoMassa1.value = boi["Massa1"]
    elementoMassa2.value = boi["Massa2"]
    elementoMassa3.value = boi["Massa3"]
    elementoMassa4.value = boi["Massa4"]
    elementoMassa5.value = boi["Massa5"]
    elementoData.value = boi["Data"]
    elementoData1.value = boi["Data1"]
    elementoData2.value = boi["Data2"]
    elementoData3.value = boi["Data3"]
    elementoData4.value = boi["Data4"]
    elementoData5.value = boi["Data5"]


    elementoLabelMassa = document.getElementById("massa")
    elementoLabelMassa1 = document.getElementById("massa1")
    elementoLabelMassa2 = document.getElementById("massa2")
    elementoLabelMassa3 = document.getElementById("massa3")
    elementoLabelMassa4 = document.getElementById("massa4")
    elementoLabelMassa5 = document.getElementById("massa5")
    elementoLabelData = document.getElementById("data")
    elementoLabelData1 = document.getElementById("data1")
    elementoLabelData2 = document.getElementById("data2")
    elementoLabelData3 = document.getElementById("data3")
    elementoLabelData4 = document.getElementById("data4")
    elementoLabelData5 = document.getElementById("data5")

    elementoMassa.style.display = "block"
    elementoMassa1.style.display = "block"
    elementoMassa2.style.display = "block"
    elementoMassa3.style.display = "block"
    elementoMassa4.style.display = "block"
    elementoMassa5.style.display = "block"
    elementoData.style.display = "block"
    elementoData1.style.display = "block"
    elementoData2.style.display = "block"
    elementoData3.style.display = "block"
    elementoData4.style.display = "block"
    elementoData5.style.display = "block"

    elementoLabelMassa.style.display = "none"
    elementoLabelMassa1.style.display = "none"
    elementoLabelMassa2.style.display = "none"
    elementoLabelMassa3.style.display = "none"
    elementoLabelMassa4.style.display = "none"
    elementoLabelMassa5.style.display = "none"
    elementoLabelData.style.display = "none"
    elementoLabelData1.style.display = "none"
    elementoLabelData2.style.display = "none"
    elementoLabelData3.style.display = "none"
    elementoLabelData4.style.display = "none"
    elementoLabelData5.style.display = "none"

    document.getElementById("btnse2").style.display = "block"
    document.getElementById("btnc2").style.display = "block"
    document.getElementById("btned2").style.display = "none"
}

function SalvarMassa(){
    Buscar2()

    document.getElementById("btnse2").style.display = "none"
    document.getElementById("btnc2").style.display = "none"
    document.getElementById("btned2").style.display = "block"
}

function CancelarMassa(){
    elementoMassa = document.getElementById("digita_massa")
    elementoMassa1 = document.getElementById("digita_massa1")
    elementoMassa2 = document.getElementById("digita_massa2")
    elementoMassa3 = document.getElementById("digita_massa3")
    elementoMassa4 = document.getElementById("digita_massa4")
    elementoMassa5 = document.getElementById("digita_massa5")
    elementoData = document.getElementById("digita_data")
    elementoData1 = document.getElementById("digita_data1")
    elementoData2 = document.getElementById("digita_data2")
    elementoData3 = document.getElementById("digita_data3")
    elementoData4 = document.getElementById("digita_data4")
    elementoData5 = document.getElementById("digita_data5")

    elementoLabelMassa = document.getElementById("massa")
    elementoLabelMassa1 = document.getElementById("massa1")
    elementoLabelMassa2 = document.getElementById("massa2")
    elementoLabelMassa3 = document.getElementById("massa3")
    elementoLabelMassa4 = document.getElementById("massa4")
    elementoLabelMassa5 = document.getElementById("massa5")
    elementoLabelData = document.getElementById("data")
    elementoLabelData1 = document.getElementById("data1")
    elementoLabelData2 = document.getElementById("data2")
    elementoLabelData3 = document.getElementById("data3")
    elementoLabelData4 = document.getElementById("data4")
    elementoLabelData5 = document.getElementById("data5")

    elementoMassa.style.display = "none"
    elementoMassa1.style.display = "none"
    elementoMassa2.style.display = "none"
    elementoMassa3.style.display = "none"
    elementoMassa4.style.display = "none"
    elementoMassa5.style.display = "none"
    elementoData.style.display = "none"
    elementoData1.style.display = "none"
    elementoData2.style.display = "none"
    elementoData3.style.display = "none"
    elementoData4.style.display = "none"
    elementoData5.style.display = "none"

    elementoLabelMassa.style.display = "block"
    elementoLabelMassa1.style.display = "block"
    elementoLabelMassa2.style.display = "block"
    elementoLabelMassa3.style.display = "block"
    elementoLabelMassa4.style.display = "block"
    elementoLabelMassa5.style.display = "block"
    elementoLabelData.style.display = "block"
    elementoLabelData1.style.display = "block"
    elementoLabelData2.style.display = "block"
    elementoLabelData3.style.display = "block"
    elementoLabelData4.style.display = "block"
    elementoLabelData5.style.display = "block"

    document.getElementById("btnse2").style.display = "none"
    document.getElementById("btnc2").style.display = "none"
    document.getElementById("btned2").style.display = "block"
}