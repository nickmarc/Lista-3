/// QUESTÃO 44

function q44() {
    const lista = []
    for (let i = 0; i < 10; i++) {
        let num = parseInt(window.prompt("Digite um número inteiro:"));
        ;
        lista.push(num)
    }
    let ordem = parseInt(window.prompt("Selecione um número correspondente à opção desejada:\n(1) Listar em ordem crescente\n(2) Listar em ordem decrescente\n(3) Listar na ordem original"));
    if (ordem == 1) {
        document.getElementById("output").innerHTML = lista.sort();
    } else if (ordem == 2) {
        let decresce_lista = lista.sort((a, b) => b - a);
        document.getElementById("output").innerHTML = decresce_lista;
    } else {
        document.getElementById("output").innerHTML = lista;
    }
}

/// QUESTÃO 45

function calcularMediaAlunos45(qtdAlunos) {
    mensagem = "<br>"

    alunos = []

    // ENTRADA
    for(i = 1; i <= qtdAlunos; i++){
        notas = []
        for(j = 1; j <= 4; j++){
            var nota = parseInt(document.getElementById("input_"+i+"_"+j).value)
            notas.push(nota)
        }
        alunos.push(notas)
    }

    // PROCESSAMENTO

    medias = {} // DICIONÁRIO
    for (i = 0; i < qtdAlunos; i++) {
        somaNotas = 0
        for (j = 0; j < 4; j++) {
            if (j == 0) {
                somaNotas += 3 * alunos[i][j]
            } else if (j == 1) {
                somaNotas += 2 * alunos[i][j]
            } else if (j == 2 || j == 3) {
                somaNotas += alunos[i][j]
            }
        }
        media = somaNotas / 7 // É uma média ponderada

        situacao = ""
        if (media < 3) {
            situacao = "<strong>reprovado.</strong>"
        } else if (media >= 3 && media < 7) {
            situacao = "<strong>de recuperação.</strong>"
        } else if (media > 7) {
            situacao = "<strong>aprovado.</strong>"
        }

        medias[i] = {
            "media": media,
            "situacao": situacao
        }
        if(media >= 3 && media < 7){
            medias[i]["pontosFaltantes"] = 7 - media
        }
    }

    // SAÍDA

    for(i = 0; i < qtdAlunos; i++){
        mensagem += `O ${i+1}º aluno teve média ${medias[i]["media"]} e está ${medias[i]["situacao"]}`

        if(medias[i]["media"] >= 3 && medias[i]["media"] < 7 ){
            mensagem += `<br> Pontos faltantes: ${medias[i]["pontosFaltantes"]} <br><br>`
        }else{
            mensagem += "<br><br>"
        }

    }

    document.getElementById("saida").innerHTML = mensagem
}

function removerInputs_45() {
    var divInput_45 = document.getElementById('divInput_45')
    divInput_45.innerHTML = '';
}

function gerarInputs_45() {
    removerInputs_45()
    // PROCESSAMENTO
    var qtdAlunos = parseInt(document.getElementById("qtdAlunos").value)
    var divInput_45 = document.getElementById('divInput_45')

    for (i = 0; i < qtdAlunos; i++) {
        for (j = 0; j < 4; j++) {
            var h2 = document.createElement("H2")
            var pedeNota = document.createTextNode("Digite a " + (j + 1) + "ª nota do " + (i + 1) + "º aluno:")
            h2.appendChild(pedeNota)
            divInput_45.appendChild(h2)
            // inNota = input da respectiva nota
            var inNota = document.createElement("input")
            inNota.setAttribute("type", "number")
            inNota.setAttribute("id", "input_"+(i+1)+"_"+(j+1))
            divInput_45.appendChild(inNota)
        }
    }
    button_processar = document.createElement("button")
    button_processar.textContent = 'Calcular média';
    button_processar.setAttribute("onClick", `javascript: calcularMediaAlunos45(${qtdAlunos});`);
    divInput_45.appendChild(button_processar)
}

/// QUESTÃO 46

function matriz_xy(){
    var saida = document.getElementById("saida46")
    var x_lista = []
    var y_lista = []
    var matriz = [x_lista,
        y_lista]

    // EIXO X

    for (x = 1; x <= 5; x++) {
        var numX = parseInt(document.getElementById("input_x_" + x).value)
        x_lista.push(numX)
    }

    // EIXO Y

    for (y = 1; y <= 5; y++)
    {
        var numY = parseInt(document.getElementById("input_y_"+y).value)
        y_lista.push(numY)
    }

    let ordem = parseInt(window.prompt("Selecione um número correspondente à opção desejada:\n(1) Listar X em ordem crescente\n(2) Listar Y em ordem decrescente\n(3) Listar na ordem original\n(4) Listar com salto de posições"));
    if (ordem == 1) {
        // ORDENA X
        x_lista.sort()
        // HEADER X
        var h2X = document.createElement("H2")
        var header_x = document.createTextNode("X")
        h2X.appendChild(header_x)
        saida.appendChild(h2X)
        // MOSTRA X
        for (let x = 0; x < 5; x++)
        {
            document.getElementById("saida46").innerHTML += (matriz[0][x] + "<br>");
        }
        // QUEBRA LINHA
        document.getElementById("saida46").innerHTML += ("<br />");
        // HEADER Y
        document.getElementById("saida46").innerHTML += ("<br />");
        var h2Y = document.createElement("H2")
        var headerY = document.createTextNode("Y")
        h2Y.appendChild(headerY)
        saida.appendChild(h2Y)
        // MOSTRA Y
        for (let y = 0; y < 5; y++)
        {
            document.getElementById("saida46").innerHTML += (matriz[1][y] + "<br>");
        }
    }
    else if (ordem == 2) {
        // DECRESCE Y
        y_lista.sort((a, b) => b - a);
        // HEADER X
        var h2X = document.createElement("H2")
        var header_x = document.createTextNode("X")
        h2X.appendChild(header_x)
        saida.appendChild(h2X)
        // MOSTRA X
        for (let x = 0; x < 5; x++)
        {
            document.getElementById("saida46").innerHTML += (matriz[0][x] + "<br>");
        }
        // QUEBRA LINHA
        document.getElementById("saida46").innerHTML += ("<br />");
        // HEADER Y
        document.getElementById("saida46").innerHTML += ("<br />");
        var h2Y = document.createElement("H2")
        var headerY = document.createTextNode("Y")
        h2Y.appendChild(headerY)
        saida.appendChild(h2Y)
        // MOSTRA Y
        for (let y = 0; y < 5; y++)
        {
            document.getElementById("saida46").innerHTML += (matriz[1][y] + "<br>");
        }
    }
    else if (ordem == 3) {
        // HEADER X
        var h2X = document.createElement("H2")
        var header_x = document.createTextNode("X")
        h2X.appendChild(header_x)
        saida.appendChild(h2X)
        // MOSTRA X
        for (let x = 0; x < 5; x++)
        {
            document.getElementById("saida46").innerHTML += (matriz[0][x] + "<br>");
        }
        // QUEBRA LINHA
        document.getElementById("saida46").innerHTML += ("<br />");
        // HEADER Y
        document.getElementById("saida46").innerHTML += ("<br />");
        var h2Y = document.createElement("H2")
        var headerY = document.createTextNode("Y")
        h2Y.appendChild(headerY)
        saida.appendChild(h2Y)
        // MOSTRA Y
        for (let y = 0; y < 5; y++)
        {
            document.getElementById("saida46").innerHTML += (matriz[1][y] + "<br>");
        }
    }
    else if (ordem == 4) {
        // DEFINE O LIMITE DE VALORES A SEREM MOSTRADOS
        let qtd_posicao = parseInt(window.prompt("Quantos valores você deseja ser apresentado?\nAtenção: escolha um número entre 0 e 5"));
        // HEADER X
        var h2X = document.createElement("H2")
        var header_x = document.createTextNode("X")
        h2X.appendChild(header_x)
        saida.appendChild(h2X)
        // MOSTRA X
        for (let x = 0; x < qtd_posicao; x++)
        {
            document.getElementById("saida46").innerHTML += (matriz[0][x] + "<br>");
        }
        // QUEBRA LINHA
        document.getElementById("saida46").innerHTML += ("<br />");
        // HEADER Y
        document.getElementById("saida46").innerHTML += ("<br />");
        var h2Y = document.createElement("H2")
        var headerY = document.createTextNode("Y")
        h2Y.appendChild(headerY)
        saida.appendChild(h2Y)
        // MOSTRA Y
        for (let y = 0; y < qtd_posicao; y++)
        {
            document.getElementById("saida46").innerHTML += (matriz[1][y] + "<br>");
        }

    }

}

function removerInputs_46() {
    var eixoX = document.getElementById('eixoX')
    var eixoY = document.getElementById('eixoY')
    eixoX.innerHTML = "";
    eixoY.innerHTML = "";
}

function gerarInputs_46() {
    removerInputs_46()

    // PROCESSAMENTO
    var eixoX = document.getElementById('eixoX')
    var eixoY = document.getElementById('eixoY')
    let butao = document.getElementById('id-button')

    for (x = 0; x < 5; x++)
    {
        var h2 = document.createElement("H2")
        // Header que pede o número X
        var pedeNumX = document.createTextNode("Digite o " + (x + 1) + "º número do eixo X:")
        h2.appendChild(pedeNumX)
        eixoX.appendChild(h2)
        // Input para inserir o número X
        var inNumX = document.createElement("input")
        inNumX.setAttribute("type", "number")
        inNumX.setAttribute("id", "input_x_" + (x + 1))
        eixoX.appendChild(inNumX)

    }

    for(y = 0; y < 5; y++)
    {
        var h2 = document.createElement("H2")
        // Header que pede o número Y
        var pedeNumY = document.createTextNode("Digite o " + (y + 1) + "º número do eixo Y:")
        h2.appendChild(pedeNumY)
        eixoY.appendChild(h2)
        // Input para inserir o número Y
        var inNumY = document.createElement("input")
        inNumY.setAttribute("type", "number")
        inNumY.setAttribute("id", "input_y_" + (y + 1))
        eixoY.appendChild(inNumY)
    }


    button_processar = document.createElement("button")
    button_processar.textContent = 'Mostrar matriz';
    button_processar.setAttribute("onClick", `javascript: matriz_xy();`);
    butao.appendChild(button_processar)

}

/// QUESTÃO 47


function diames() {
    let saida = document.getElementById("saida47")
    // LISTAS E MATRIZ
    const lista_dia = []
    const lista_mes = []
    var matriz47 = [lista_dia,
    lista_mes]
    // QUANTIDADE DE ERROS E ACERTOS
    var erro = 0
    var corretos = 0
    // LISTA DE MESES COM 31 DIAS
    let d31 = [1, 3, 5, 7, 8, 10, 12]
    // LISTA DE MESES COM 30 DIAS
    var d30 = [4, 6, 9, 11]

    // INIT. DIAS

    for (x = 1; x <= 5; x++) {
        var var_dia = parseInt(document.getElementById("input_dia_" + x).value)
        lista_dia.push(var_dia)
    }

    // INIT. MESES

    for (y = 1; y <= 5; y++)
    {
        var var_mes = parseInt(document.getElementById("input_mes_"+y).value)
        lista_mes.push(var_mes)
    }


    for (count = 0; count <= 5; count++)
    {
        if (matriz47[0][count] <= 0) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro DIA 0 OU NEGATIVO, posição: " + count + "<br>"
        } else if (matriz47[0][count] > 30 && (d30.includes(matriz47[1][count]) == true)) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro MÊS DE 30 DIAS, posição: " + count + "<br>"
        } else if (matriz47[0][count] > 31) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro QTD. MÁXIMA DE DIAS EXTRAPOLADA, na posição: " + count + "<br>"
        } else if (matriz47[0][count] > 28 && matriz47[1][count] == 2) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro FEVEREIRO, MÁXIMO DE 28 DIAS, posição: " + count + "<br>"
        } else if (matriz47[1][count] < 0) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro MÊS MENOR QUE 1, na posição: " + count + "<br>"
        } else if (matriz47[1][count] > 12) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro MÊS MAIOR QUE 12, posição: " + count + "<br>"
        } else if (matriz47[1][count] == 31 && (d31.includes(matriz47[1][count]) == false)) {
            erro++
            document.getElementById("msg-erro").innerHTML += "Erro MÊS COM MENOS DE 31 DIAS, posição: " + count + "<br>"
        } else if (matriz47[1][count] >= 1 && matriz47[1][count] <= 12) {
            corretos++
        } else if (matriz47[0][count] > 0) {
            corretos++
        } else if (matriz47[0][count] == 31 && (d31.includes(matriz47[1][count]) == true)) {
            corretos++
        }
    }

    // HEADER DOS ERROS
    var h2e = document.createElement("H2")
    var headere = document.createTextNode("ERROS:")
    h2e.appendChild(headere)
    saida.appendChild(h2e)
    // ERROS
    document.getElementById("saida47").innerHTML += erro
    // HEADER DOS ACERTOS
    var h2a = document.createElement("H2")
    var headera = document.createTextNode("ACERTOS:")
    h2a.appendChild(headera)
    saida.appendChild(h2a)
    // ACERTOS
    document.getElementById("saida47").innerHTML += corretos
}

function removerInputs_47() {
    var dia = document.getElementById('dia')
    var mes = document.getElementById('mes')
    dia.innerHTML = "";
    mes.innerHTML = "";
}

function gerarInputs_47() {
    removerInputs_47()

    // PROCESSAMENTO
    var dia = document.getElementById('dia')
    var mes = document.getElementById('mes')
    let butao = document.getElementById('id-button')

    for (x = 0; x < 5; x++)
    {
        var h2 = document.createElement("H2")
        // Header que pede o dia
        var pedeDia = document.createTextNode("Digite um dia:")
        h2.appendChild(pedeDia)
        dia.appendChild(h2)
        // Input para inserir o dia
        var inDia = document.createElement("input")
        inDia.setAttribute("type", "number")
        inDia.setAttribute("id", "input_dia_" + (x + 1))
        dia.appendChild(inDia)

    }

    for(y = 0; y < 5; y++)
    {
        var h2 = document.createElement("H2")
        // Header que pede o mês
        var pedeMes = document.createTextNode("Digite o mês:")
        h2.appendChild(pedeMes)
        mes.appendChild(h2)
        // Input para inserir mês
        var inMes = document.createElement("input")
        inMes.setAttribute("type", "number")
        inMes.setAttribute("id", "input_mes_" + (y + 1))
        mes.appendChild(inMes)
    }


    button_processar = document.createElement("button")
    button_processar.textContent = 'Processar';
    button_processar.setAttribute("onClick", `javascript: diames();`);
    butao.appendChild(button_processar)

}

/// QUESTÃO 48
function removeCalendario(){
    var div_calendario = document.getElementById('div_calendario')
}

function geraCalendario(){
    removeCalendario()

    // VARIÁVEIS INICIAIS
    var quat_dias_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Semtembro', 'Outubro', 'Novembro', 'Dezembro']
    var dias_semana = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
    var ano = parseInt(document.getElementById("input_ano").value)
    var div_ano = document.getElementById('div_ano')

    // PROCESSAMENTO
    // Imprime ano
    var h1 = document.createElement("H1")
    var text_h1 = document.createTextNode(ano)
    h1.appendChild(text_h1)
    h1.style.cssText = 'text-indent: 650px;' // ESTILO
    div_ano.innerHTML = '';
    div_ano.appendChild(h1)

    // Mês
    for(var mes = 0; mes < 12; mes++){
        var div_calendario = document.createElement("div")

        // Imprimir mês
        var h2 = document.createElement("H2")
        var text_h2 = document.createTextNode(meses[mes])
        h2.style.cssText = 'text-indent: 90px;' // ESTILO
        h2.appendChild(text_h2)
        div_calendario.appendChild(h2)

        // Imprimir dias da dias_semana
        var h3 = document.createElement("H3")
        var text_h3 = document.createTextNode(dias_semana.toString().replaceAll(',',' '))
        h3.style.cssText = 'text-indent: 50px;' // ESTILO
        h3.appendChild(text_h3)
        div_calendario.appendChild(h3)

        // Função para obter o primeiro dia de Janeiro do ano
        // "mes" = 0
        const dia1 = new Date(ano, mes, 1); // OBJ. recebe "ano", "mes" (to,do "mes" inicia em zero), dia
        let day = dia1.getDay() // 0  - Domingo =/= 6 - sábado
        if (day == 0)
            day = 6
        else
            day = day - 1

        // Imprimir a primeira linha do mês
        linhaInicial = ''
        contDia = 1
        for(var i = 0; i < 7; i++){
            if(i < day)
                linhaInicial += '   '
            else{
                linhaInicial += ' ' + contDia + ' '
                contDia += 1
            }
        }
        var h3_linha = document.createElement("H3")
        var text_h3_linha = document.createTextNode(linhaInicial)
        h3_linha.appendChild(text_h3_linha)
        h3_linha.style.cssText = 'text-indent: 50px;' // ESTILO
        div_calendario.appendChild(h3_linha)

        // Imprimir outras linhas do mês
        for(; contDia <= quat_dias_mes[mes];){
            outrasLinhas = ''
            var i = 0
            for(; i < 7; i++){
                if(contDia > quat_dias_mes[mes])
                    break;
                else if (contDia < 10){
                    outrasLinhas += ' ' + contDia++ + ' '
                }else{
                    outrasLinhas += contDia++ + ' '
                }
            }

            // Condicional para o ano bissexto
            if(mes == 1 && contDia == 29 && (ano - 2020) % 4 == 0){
                if(i < 7)
                    outrasLinhas += '29 '
            }

            var h3_linha = document.createElement("H3")
            var text_h3_linha = document.createTextNode(outrasLinhas)
            h3_linha.style.cssText = 'text-indent: 50px;' // ESTILO
            h3_linha.appendChild(text_h3_linha)
            div_calendario.appendChild(h3_linha)


            if(mes == 1 && contDia == 29 && (ano - 2020) % 4 == 0) { // Condicional para caso o ano seja bissexto e o dia "29" de Fevereiro caia em uma segunda-feira
                if (i == 7) {
                    var h3_linha = document.createElement("H3")
                    var text_h3_linha = document.createTextNode('29 ')
                    h3_linha.appendChild(text_h3_linha)
                    div_calendario.appendChild(h3_linha)
                }
            }


        }

        // Adicionando cada mês na tabela
        var td = 'td' + mes
        var div_td = document.getElementById(td)
        div_td.innerHTML = '';
        div_td.appendChild(div_calendario)

    }

}

/// QUESTÃO 49
function tabuada() {
    const numero = parseInt(document.getElementById("numero_in").value);
    let tabuada = "";
    let count = 1
    for (n = 1; n < 11; n++) {
        tabuada += "<br>"+numero+" x "+n+" = "+ (numero*n)

    }


    document.getElementById("tabuadaOut").innerHTML = tabuada
}