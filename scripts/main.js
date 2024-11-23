import { getColorSelected, showErrorAlert, saveMove } from '../scripts/utils.js';

class Neighbour {
    constructor(city, distance) {
        this.city = city;
        this.distance = distance;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.visited = false;
        this.neighbours = [];
    }

    addNeighbour(city, distance) {
        if (!this.neighbours.some(n => n.city === city)) {
            this.neighbours.push(new Neighbour(city, distance));
            city.addNeighbour(this, distance);
        }
    }
}

var rail1Counter = 0;
var rail2Counter = 0;
var rail3Counter = 0;
var rail4Counter = 0;
var rail5Counter = 0;
var rail6Counter = 0;
var cities = new Set();

var map = {
};



function Initialize(cidadesPlayer) {
    rail1Counter = 0;
    rail2Counter = 0;
    rail3Counter = 0;
    rail4Counter = 0;
    rail5Counter = 0;
    rail6Counter = 0;

    cities = new Set(cidadesPlayer);
    
    map = {
        "Atlanta": new City("Atlanta"),
        "Boston": new City("Boston"),
        "Calgary": new City("Calgary"),	  
        "Charleston": new City("Charleston"),  
        "Chicago": new City("Chicago"),
        "Dallas": new City("Dallas"),     
        "Denver": new City("Denver"),     
        "Duluth": new City("Duluth"),     
        "El Paso": new City("El Paso"),
        "Helena": new City("Helena"),  
        "Houston": new City("Houston"),   
        "Kansas City": new City("Kansas City"), 
        "Las Vegas": new City("Las Vegas"),   
        "Little Rock": new City("Little Rock"),  
        "Los Angeles": new City("Los Angeles"), 
        "Miami": new City("Miami"),      
        "Montreal": new City("Montreal"),   
        "Nashville": new City("Nashville"),
        "New Orleans": new City("New Orleans"),
        "New York": new City("New York"), 
        "Oklahoma City": new City("Oklahoma City"),
        "Omaha": new City("Omaha"), 
        "Phoenix": new City("Phoenix"),  
        "Pittsburgh": new City("Pittsburgh"),
        "Portland": new City("Portland"),  
        "Raleigh": new City("Raleigh"),   
        "Saint Louis": new City("Saint Louis"), 
        "Salt Lake City": new City("Salt Lake City"),
        "San Francisco": new City("San Francisco"), 
        "Santa Fe": new City("Santa Fe"),
        "Sault St Marie": new City("Sault St Marie"),
        "Seattle": new City("Seattle"),  
        "Toronto": new City("Toronto"), 
        "Vancouver": new City("Vancouver"), 
        "Washington": new City("Washington"), 
        "Winnipeg": new City("Winnipeg")
    }

map["Vancouver"].addNeighbour(map["Seattle"],1);				
map["Vancouver"].addNeighbour(map["Calgary"],3);				
map["Calgary"].addNeighbour(map["Seattle"],4);				
map["Calgary"].addNeighbour(map["Winnipeg"],6);				
map["Calgary"].addNeighbour(map["Helena"],4);
map["Helena"].addNeighbour(map["Seattle"],6);
map["Portland"].addNeighbour(map["Seattle"],1);
map["Portland"].addNeighbour(map["San Francisco"],5);
map["Portland"].addNeighbour(map["Salt Lake City"],6);
map["Salt Lake City"].addNeighbour(map["San Francisco"],5);
map["Los Angeles"].addNeighbour(map["San Francisco"],3);
map["Los Angeles"].addNeighbour(map["Las Vegas"],2);
map["Los Angeles"].addNeighbour(map["Phoenix"],3);
map["Las Vegas"].addNeighbour(map["Salt Lake City"],3);
map["Salt Lake City"].addNeighbour(map["Helena"],3);
map["Helena"].addNeighbour(map["Winnipeg"],4);
map["Helena"].addNeighbour(map["Denver"],4);
map["Salt Lake City"].addNeighbour(map["Denver"],3);
map["Phoenix"].addNeighbour(map["Santa Fe"],3);
map["Los Angeles"].addNeighbour(map["El Paso"],6);
map["Phoenix"].addNeighbour(map["El Paso"],3);
map["El Paso"].addNeighbour(map["Santa Fe"],2);
map["Santa Fe"].addNeighbour(map["Denver"],2);
map["Helena"].addNeighbour(map["Duluth"],6);
map["Helena"].addNeighbour(map["Omaha"],5);
map["Winnipeg"].addNeighbour(map["Duluth"],4);
map["Winnipeg"].addNeighbour(map["Sault St Marie"],6);
map["Denver"].addNeighbour(map["Omaha"],4);
map["Denver"].addNeighbour(map["Kansas City"],4);
map["Denver"].addNeighbour(map["Oklahoma City"],4);
map["Santa Fe"].addNeighbour(map["Oklahoma City"],3);
map["El Paso"].addNeighbour(map["Oklahoma City"],5);
map["El Paso"].addNeighbour(map["Dallas"],4);
map["El Paso"].addNeighbour(map["Houston"],6);
map["Houston"].addNeighbour(map["Dallas"],1);
map["Dallas"].addNeighbour(map["Oklahoma City"],2);
map["Oklahoma City"].addNeighbour(map["Kansas City"],2);
map["Omaha"].addNeighbour(map["Kansas City"],1);
map["Omaha"].addNeighbour(map["Duluth"],2);
map["Duluth"].addNeighbour(map["Sault St Marie"],3);
map["Duluth"].addNeighbour(map["Toronto"],6);
map["Duluth"].addNeighbour(map["Chicago"],3);
map["Omaha"].addNeighbour(map["Chicago"],4);
map["Dallas"].addNeighbour(map["Little Rock"],2);
map["Oklahoma City"].addNeighbour(map["Little Rock"],2);
map["Houston"].addNeighbour(map["New Orleans"],2);
map["New Orleans"].addNeighbour(map["Little Rock"],3);
map["Little Rock"].addNeighbour(map["Saint Louis"],2);
map["Kansas City"].addNeighbour(map["Saint Louis"],2);
map["Little Rock"].addNeighbour(map["Nashville"],3);
map["Nashville"].addNeighbour(map["Saint Louis"],2);
map["Saint Louis"].addNeighbour(map["Chicago"],2);
map["Sault St Marie"].addNeighbour(map["Toronto"],2);
map["Sault St Marie"].addNeighbour(map["Montreal"],5);
map["Montreal"].addNeighbour(map["Toronto"],3);
map["Montreal"].addNeighbour(map["Boston"],2);
map["Montreal"].addNeighbour(map["New York"],3);
map["Toronto"].addNeighbour(map["Pittsburgh"],2);
map["Toronto"].addNeighbour(map["Chicago"],4);
map["Boston"].addNeighbour(map["New York"],2);
map["New York"].addNeighbour(map["Pittsburgh"],2);
map["New York"].addNeighbour(map["Washington"],2);
map["Pittsburgh"].addNeighbour(map["Chicago"],3);
map["Pittsburgh"].addNeighbour(map["Saint Louis"],5);
map["Pittsburgh"].addNeighbour(map["Nashville"],4);
map["Pittsburgh"].addNeighbour(map["Raleigh"],2);
map["Pittsburgh"].addNeighbour(map["Washington"],2);
map["Washington"].addNeighbour(map["Raleigh"],2);
map["Raleigh"].addNeighbour(map["Nashville"],3);
map["Nashville"].addNeighbour(map["Atlanta"],1);
map["Atlanta"].addNeighbour(map["Raleigh"],2);
map["Raleigh"].addNeighbour(map["Charleston"],2);
map["Atlanta"].addNeighbour(map["New Orleans"],4);
map["Atlanta"].addNeighbour(map["Charleston"],2);
map["Miami"].addNeighbour(map["Charleston"],4);
map["Miami"].addNeighbour(map["Atlanta"],5);
map["Miami"].addNeighbour(map["New Orleans"],6);



}

// for (const [key, city] of Object.entries(map)) {
//     console.log(`cidade: ${key}`);
//     for (const neighbour of city.neighbours) {
//         console.log(`    ${neighbour.city.name}, ${neighbour.distance}`);
//     }
// }



function countPoints(city) {
    let total = 0;
    city.visited = true;

    for (const neighbour of city.neighbours) {
        if (cities.has(neighbour.city.name) && cities.has(city.name)) {
            //console.log(`${city.name} -> ${neighbour.city.name}`);
            //console.log(neighbour.distance);
            total += calculatePointsPerRails(neighbour.distance) / 2;
        }

        if (!neighbour.city.visited) {
            total += countPoints(neighbour.city);
        }
    }

    return total;
}





$(document).on('click', '#btClick', function() {
  
    //document.getElementById('Boston').disabled = false;
    // var currentPlayer = getColorSelected();

    // if (currentPlayer != undefined) {
       
    //     var citiesFromPlayer = getCities();
    //     if (citiesFromPlayer.length <= 0) {
    //         showErrorAlert("É necessário selecionar pelo menos uma cidade");
    //         return;
    //     }
    //     var citiesFromPlayer = getCities();
    //     Initialize(citiesFromPlayer);
    //     var firstElement = cities.values().next().value;
    //     var resultado = countPoints(map[firstElement]);

    //     saveMove(currentPlayer?.name, rail1Counter, rail2Counter, rail3Counter, rail4Counter, rail5Counter, rail6Counter , resultado)

    //     window.location.href = '../pages/teste.html';

    // }
    
    
});

$(document).on('click', '#adicionarBtId', function() {
    console.log("cunho de jaca")
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();
    //Seleciona todas as cidades marcadas
    var citiesFromPlayer = getCities();

    var quantidadeCidades = citiesFromPlayer.length;
    var primeiroIndex = 0;
    var ultimoIndex = quantidadeCidades - 1;
    // Cria as células e insere os valores
    const origem = novaLinha.insertCell(0);
    const destino = novaLinha.insertCell(1);
    const celulaAcao = novaLinha.insertCell(2);
    
    origem.innerText = citiesFromPlayer[primeiroIndex];
    destino.innerText = citiesFromPlayer[ultimoIndex];
    

    // Adiciona um botão de remover à última célula
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.style.backgroundColor = "#ff4d4d";
    botaoRemover.style.color = "white";
    botaoRemover.style.border = "none";
    botaoRemover.style.padding = "5px 10px";
    botaoRemover.style.borderRadius = "5px";
    botaoRemover.style.cursor = "pointer";

    // Define a função para remover a linha
    botaoRemover.onclick = function () {
        tabela.deleteRow(novaLinha.rowIndex - 1);
    };

    celulaAcao.appendChild(botaoRemover);

    //Limpa os campos de entrada
    enableAllCities()
    clearAllCheckBoxHighlights()
});


function main() {
    console.log("calculate");
    //var teste = getColorSelected();

    // Initialize()
    // cities = new Set(getCities())
    // const firstElement = cities.values().next().value;
    // var resultado = countPoints(map[firstElement]);

    // showAlert(resultado)
    
}

function showAlert(resultado) {
    // Using SweetAlert to show a basic alert
    Swal.fire({
        title: '<p style="text-align: justify"> Resultado: </p> <br>',
        
        html: '<p style="text-align: justify"> Total de pontos: ' + resultado + '<br>' + 
        (rail1Counter == 0 ? "" : "Trilhos de um: " + rail1Counter + '<br>') + 
        (rail2Counter == 0 ? "" : "Trilhos de dois: " + rail2Counter + '<br>') + 
        (rail3Counter == 0 ? "" : "Trilhos de tres: " + rail3Counter + '<br>') + 
        (rail4Counter == 0 ? "" : "Trilhos de quatro: " + rail4Counter + '<br>') + 
        (rail5Counter == 0 ? "" : "Trilhos de cinco: " + rail5Counter + '<br>') + 
        (rail6Counter == 0 ? "" : "Trilhos de seis: " + rail6Counter + '<br>') 
        + "</p>", 
        icon: 'success',
        width: "300px",
        height: "300px",

        confirmButtonText: 'Close'
    });
}

function getCities() {
    // Get all checked checkboxes with name 'fruits'
    const selectedCheckboxes = document.querySelectorAll('input[name="cities"]:checked');
    
    // Map through the NodeList to get an array of selected values
    const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

    // Display the selected values
    return selectedValues
}

function calculatePointsPerRails(size) {
    switch (size) {
        case 1:
            rail1Counter += 0.5;
            return 1;
        case 2:
            rail2Counter += 0.5;
            return 2;
        case 3:
            rail3Counter += 0.5;
           return 4;
        case 4:
            rail4Counter += 0.5;
            return 7;
        case 5:
            rail5Counter += 0.5;
            return 10;
        case 6:
            rail6Counter += 0.5;
            return 15;
    }
}

function checkCheckboxes() {
    // Get all checkboxes with name "cities"
    const checkboxes = document.querySelectorAll('input[name="cities"]');
    
    // Check if at least one checkbox is checked
    let isChecked = false;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    // Alert the result
    if (isChecked) {
        main()
    } else {
        alert('Please select at least one city.');
    }
}



$('input[name="cities"]').on('change', function() {
    var elementId = $(this)[0].id;
    clearAllCheckBoxHighlights()
    if ($(this).is(':checked')) {
        //Do
        highlightNeighboursFrom(elementId)
        teste(elementId)
        // Additional actions when checked
    } 
    else {
        //Undo
        
    }
});


function clearAllCheckBoxHighlights() {
    var checkbox = document.getElementsByName('cities');

    for(var index = 0; index < checkbox.length; index++) {
        var currentCheckbox = checkbox[index];
        var id = "#"
        var idJqueryElement = id+currentCheckbox.id;

        $(idJqueryElement).css({
                    'outline': 'none',
                    'background-color': 'transparent'
                });
    }

}

function enableAllCities() {
    var checkbox = document.getElementsByName('cities');
    for(var x = 0; x < checkbox.length; x++) {

        document.getElementById(checkbox[x].id).disabled = false;
        document.getElementById(checkbox[x].id).checked = false;
    }
}

function teste(cityName) {
    //Só deixa as cidades vizinhas liberadas
    var checkbox = document.getElementsByName('cities');

    for(var x = 0; x < checkbox.length; x++) {
        var currentCheckbox = checkbox[x];
        var id = "#"
        var idJqueryElement = id+currentCheckbox.id;

        var currentCityName = currentCheckbox.id;

        var cityNameSpacesFixed = cityName.replace(/([a-z])([A-Z])/g, '$1 $2');
        Initialize(undefined);
        var city = map[cityNameSpacesFixed];
        
        document.getElementById(currentCheckbox.id).disabled = true;
        var neighbours = city.neighbours;
        for(var index = 0; index < neighbours.length; index++)  {
            var neighbourCityName = city.neighbours[index].city.name;
            var cityNameTrim = neighbourCityName.replace(/\s+/g, '')
            var id = "#"
            var idJqueryElement = id+cityNameTrim;

            if(cityNameTrim == currentCityName)
            {
                document.getElementById(cityNameTrim).disabled = false;
            }
    
        }
    }

}

function highlightNeighboursFrom(cityName) {
    var cityNameSpacesFixed = cityName.replace(/([a-z])([A-Z])/g, '$1 $2');
    Initialize(undefined);
    var city = map[cityNameSpacesFixed];

    var neighbours = city.neighbours;
    for(var index = 0; index < neighbours.length; index++)  {
        var cityName = city.neighbours[index].city.name;
        var cityNameTrim = cityName.replace(/\s+/g, '')
        var id = "#"
        var idJqueryElement = id+cityNameTrim;

        $(idJqueryElement).css({
            'outline': '2px solid #4CAF50',
            'background-color': '#e0f7e0'
        });
    }
}