$(document).ready(function () {
    //TOTALIZADORES NO FINAL
    let total_orcado      = 0;
    let total_real        = 0;
    let total_forecast    = 0;
    let total_atingimento = 0;

    //PREENCHER TABELA
    for (let j = 0; j < context.count_EvolutivoMensal.length; j++) {
        
        //TRANSFORMAR EM NUMERO
        const mes_Referencia  = context.sum_EvolutivoMensal[j].MES_REFERENCIA
        const num_Orcado      = Number(formatarNumero(context.sum_EvolutivoMensal[j].ORCADO));
        const num_Real        = Number(context.sum_EvolutivoMensal[j].REAL);
        const num_Forecast    = Number(context.sum_EvolutivoMensal[j].FORECAST);
        const num_atingimento = Number(context.sum_EvolutivoMensal[j].ATINGIMENTO);

        //FORMATAR NUMERO
        const orcado          = formatarNumero(num_Orcado);
        const real            = formatarNumero(num_Real);
        const forecast        = formatarNumero(num_Forecast);
        const atingimento     = formatarNumero(num_atingimento);

        //ADD DENTRO DA TABELA
        const column_Mes           = '<td><b>' + mes_Referencia + '</b></td>';
        const column_Orcado        = '<td><b>' + orcado         + '</b></td>';
        const column_Real          = '<td><b>' + real           + '</b></td>';
        const column_Forecast      = '<td><b>' + forecast       + '</b></td>';
        const column_atingimento   = '<td><b>' + atingimento    + '</b></td>';

        const linha                = '<tr>'    + column_Mes         + 
                                                 column_Orcado      + 
                                                 column_Real        + 
                                                 column_Forecast    + 
                                                 column_atingimento + 
                                     '</tr>';
        $("#tabela_acumulada tbody").append(linha);

        total_orcado              += num_Orcado;
        total_real                += num_Real;
        total_forecast            += num_Forecast;
        total_atingimento         += num_atingimento;
        
    }

    // Adicionar linha com a soma total
    const totalizador_ORCADO   = formatarNumero(total_orcado);
    const totalizador_REAL     = formatarNumero(total_real);
    const totalizador_FORECAST = formatarNumero(total_forecast);
    const totalizadorRow       = `
                         <tr>
                            <td><b>Total</b></td>
                            <td><b>${totalizador_ORCADO}</b></td>
                            <td><b>${totalizador_REAL}</b></td>
                            <td><b>${totalizador_FORECAST}</b></td>
                            <td><b>${total_atingimento}</b></td>
                         </tr>
                            `;
                            
    $("#tabela_acumulada tbody").append(totalizadorRow);
});

function formatarNumero(numero, casasDecimais = 2) {
    return parseFloat(numero.toFixed(casasDecimais)).toLocaleString('pt-BR');
}
