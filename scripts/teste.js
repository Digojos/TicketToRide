import { Status, Players, showSucessAlert, showErrorAlert, showWarningAlert, showMessage  } from '../scripts/utils.js';


$(document).ready(function(){
    var players = Players;
    var lenghtOfPlayers = players.length;
    for(var index = 0; index < lenghtOfPlayers; index++) {
        var currentPlayer = players[index];
        
        var playerExist = checkIfPlayerExist(currentPlayer);
        if(playerExist) {
            var player = getUserLocalStorage(currentPlayer);
            
            if(player.status == Status.Played) {
                checkElementToBlock(currentPlayer)
            }
        }

    }
});


$(document).on('click', '#btNext', function() {

    var playerSelected = getColorSelected();

    var exist = checkIfPlayerExist(playerSelected.name)
    if (exist != null) {
        saveMove(playerSelected.name)
    }
    else
        console.log('nao existe')
});

$(document).on('click', '#btResult', function() {
    var exist = checkIfPlayerExist('playerRed')
    if (exist != null) {
        saveMove('playerRed')
    }
        
    else
        console.log('nao existe')
});



$(document).on('click', '#redCircle', function() {
    
    var name = "playerRed";
    var exist = checkIfPlayerExist(name);
    if(!exist) {
        if (checkIfAlreadyOneColorSelected())
            return
        var player = {
            "id" : 1,
            "color" : "red",
            "name" : name,
            "status" : Status.Selected
        }

        selectColor("#redCircle", name, player)
    
    }
    else {
        unSelectColor("#redCircle", name);
    }


});

$(document).on('click', '#blackCircle', function() {
    var name = "playerBlack";
    var exist = checkIfPlayerExist(name);
    if(!exist) {
        if (checkIfAlreadyOneColorSelected())
            return
        var player = {
            "id" : 2,
            "color" : "black",
            "name" : name,
            "status" : Status.Selected
        }

        selectColor("#blackCircle", name, player)
    
    }
    else {
        unSelectColor("#blackCircle", name);
    }
});


$(document).on('click', '#greenCircle', function() {
    var name = "playerGreen";
    var exist = checkIfPlayerExist(name);
    if(!exist) {
        if (checkIfAlreadyOneColorSelected())
            return
        var player = {
            "id" : 3,
            "color" : "green",
            "name" : name,
            "status" : Status.Selected
        }

        selectColor("#greenCircle", name, player)
    
    }
    else {
        unSelectColor("#greenCircle", name);
    }
});


$(document).on('click', '#yellowCircle', function() {
    var name = "playerYellow";
    var exist = checkIfPlayerExist(name);
    if(!exist) {
        if (checkIfAlreadyOneColorSelected())
            return
        var player = {
            "id" : 4,
            "color" : "yellow",
            "name" : name,
            "status" : Status.Selected
        }

        selectColor("#yellowCircle", name, player)
    
    }
    else {
        unSelectColor("#yellowCircle", name);
    }
});


$(document).on('click', '#blueCircle', function() {
    var name = "playerBlue";
    var exist = checkIfPlayerExist(name);
    if(!exist) {
        if (checkIfAlreadyOneColorSelected())
            return
        var player = {
            "id" : 5,
            "color" : "blue",
            "name" : name,
            "status" : Status.Selected
        }

        selectColor("#blueCircle", name, player)
    
    }
    else {
        unSelectColor("#blueCircle", name);
    }
});

function checkIfPlayerExist(player) {
    var exist = getUserLocalStorage(player)
    if(exist != null)
        return true
    else
        return false
}

function getUserLocalStorage(player) {
    return JSON.parse(localStorage.getItem(player));
}

function ClearAllLocalStorage() {
    localStorage.clear();
}


function checkElementToBlock(player) {

    switch(player) {
        case 'playerRed':
            disableElement("#redCircle")
            break;
        case 'playerBlack':
            disableElement("#blackCircle")
            break;
        case 'playerGreen':
            disableElement("#greenCircle")
            break;
        case 'playerYellow':
            disableElement("#yellowCircle")
            break;
        case 'playerBlue':
            disableElement("#blueCircle")
            break;
        default:
            break;
    }
}

function checkIfAlreadyOneColorSelected() {
    var players = Players;
    var lenghtOfPlayers = players.length;
    for(var index = 0; index < lenghtOfPlayers; index++) {
        var currentPlayer = players[index];
        
        var playerExist = checkIfPlayerExist(currentPlayer);
        if(playerExist) {
            var player = getUserLocalStorage(currentPlayer);
            
            if(player.status == Status.Selected) {
                showWarningAlert('Já existe uma cor selecionada');
                return true
            }
        }
    }

    return false
}

function getColorSelected() {
    var players = Players;
    var lenghtOfPlayers = players.length;
    for(var index = 0; index < lenghtOfPlayers; index++) {
        var currentPlayer = players[index];
        
        var playerExist = checkIfPlayerExist(currentPlayer);
        if(playerExist) {
            var player = getUserLocalStorage(currentPlayer);
            
            if(player.status == Status.Selected) {
                return player
            }
        }

    }
}


function selectColor(selector ,elemtName, elementObj) {
    $(selector).addClass("bi bi-check");
    localStorage.setItem(elemtName, JSON.stringify(elementObj));
}

function unSelectColor(selector, elementName) {
    $(selector).removeClass("bi bi-check");
    localStorage.removeItem(elementName);
}

function saveMove(playerName) {
    var playerObj = getUserLocalStorage(playerName);
    playerObj.status = Status.Played;
    localStorage.setItem(playerName, JSON.stringify(playerObj));
}

function disableElement(selector) {
    $(selector).prop("disabled", true);
    $(selector).css("cursor", "not-allowed");
    $(selector).addClass("bi bi-x");
}