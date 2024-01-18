let nomePessoa=[];

function show(){
    let nomeConvidado = document.getElementById("marreco").value;
    nomePessoa.push(nomeConvidado);
    document.getElementById("pato").innerHTML= nomePessoa.toString();
}

function Alphabet_Order(){
    nomePessoa.sort();
    let i = nomePessoa.join("<br>");
    document.getElementById("Alphabet_Order").innerHTML=i.toString();
}

function Search(){
    let s= document.getElementById("imput").value;
    let encontrado = 0;
    let contador;

    for (contador=0; contador<nomePessoa.length;contador++){
        if (s==nomePessoa[contador]){
            encontrado = encontrado+1
        }
    }document.getElementById("localized_name").innerHTML="Nome Localizado "+encontrado+ "vezes";
}