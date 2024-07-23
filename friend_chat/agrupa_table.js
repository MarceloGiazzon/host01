
// Selecionar a tabela HTML
/*var table = document.querySelector("table");

// Criar um objeto para armazenar os dados da tabela
var data = {};

// Percorrer as linhas da tabela, exceto a primeira (cabeçalho)
for (var i = 1; i < table.rows.length; i++) {
  // Obter o valor da primeira coluna (firstname)
  var firstname = table.rows[i].cells[0].innerHTML;

  // Obter o valor da segunda coluna (points)
  var points = parseInt(table.rows[i].cells[1].innerHTML);

  // Verificar se o firstname já existe no objeto data
  if (data.hasOwnProperty(firstname)) {
    // Se sim, adicionar os points ao valor existente
    data[firstname] += points;
  } else {
    // Se não, criar uma nova propriedade com os points
    data[firstname] = points;
  }
}

// Criar um novo elemento HTML para mostrar o resultado
var result = document.createElement("div");

// Adicionar um título ao elemento
result.innerHTML = "<h2>Result</h2>";

// Percorrer as propriedades do objeto data
for (var key in data) {
  // Adicionar uma linha ao elemento com o firstname e o somatório dos points
  result.innerHTML += "<p>" + key + ": " + data[key] + "</p>";
}

// Adicionar o elemento ao final do body
document.body.appendChild(result);
*/
// Selecionar a tabela HTML
var table = document.querySelector("table");

// Selecionar a primeira célula da tabela (Firstname)
var firstname = table.rows[0].cells[0];

// Adicionar um evento de clique à célula
firstname.addEventListener("click", function() {
  // Percorrer as linhas da tabela, exceto a primeira (cabeçalho)
  for (var i = 1; i < table.rows.length; i++) {
    // Obter a célula da primeira coluna
    var cell = table.rows[i].cells[0];

    // Verificar se a célula está visível ou não
    if (cell.style.display == "none") {
      // Se não estiver visível, torná-la visível
      cell.style.display = "table-cell";
    } else {
      // Se estiver visível, torná-la invisível
      cell.style.display = "none";
    }
  }
});