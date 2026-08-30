const notas = [];  
function adicionarNota()
{
 const input = document.getElementById("nota");
 const valor = parseFloat(input.value);

 if (isNaN(valor) || valor < 0 || valor > 20)
 {
    alert("ERRO, insira uma nota entre 0 e 20.");
    return;
}
else{
    notas.push(valor);
    const lista = document.querySelector(".lista");
    const item = document.createElement("li");
    item.textContent = `Nota: ${valor}`;
    lista.appendChild(item);
    input.value = "";
    return;
} 
}
function calcularMedia(){
    const resultado=document.getElementById("resultado");
    if (notas.length===0){
        resultado.textContent="Ainda não tem notas inseridas"
    }
    const soma=notas.reduce((acc, nota)=> acc + nota,0);
    const media = soma / notas.length;
    resultado.textContent=`Média é ${media.toFixed(2)}`;
}