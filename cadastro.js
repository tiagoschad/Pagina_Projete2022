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