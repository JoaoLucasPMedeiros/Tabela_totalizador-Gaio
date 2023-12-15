$(document).ready(function () {
    
    
    const tabela = context.count_prot;
    const { total, totalAno } = calcularTotais(contextData);

    criarTabela(contextData);
    adicionarTotal(total, totalAno);
    
});

  
function calcularTotais(data) {
        let total = 0;
        let totalAno = 0;

for (let j = 0; j < data.length; j++) {
    
     const number = Number(data[j].count_protocolo);
     const ano = Number(data[j].ano);

     total += number;
     totalAno += ano;
    
}
     return { total, totalAno };
}

function criarTabela(data) {
    
    for (let j = 0; j < data.length; j++) {
    const number = Number(data[j].count_protocolo);
    const numeroFormatado = formatarNumero(number);
    const ano = Number(data[j].ano);
    const regionalInfo = '<td><b>' + data[j].regional + '</b></td>';
    const quantidadeInfo = '<td><b>' + numeroFormatado + '</b></td>';
    const anoInfo = '<td><b>' + ano + '</b></td>';
    const linha = '<tr>' + regionalInfo + quantidadeInfo + anoInfo + '</tr>';
    
    $("#tabela_acumulada tbody").append(linha);
}}

function adicionarTotal(total, totalAno) {
    const totalFormatado = formatarNumero(total);
    const totalAnoFormatado = formatarNumero(totalAno);
    const totalizadorRow = '<tr><td><b>Total</b></td><td><b>' + totalFormatado + '</b></td><td><b>' + totalAnoFormatado + '</b></td></tr>';
    
    $("#tabela_acumulada tbody").append(totalizadorRow);
}


function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
 }
