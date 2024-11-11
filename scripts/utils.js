export const Status = Object.freeze({
    NotSelected: 0,
    Selected: 1,
    Played: 2
});

export const Players = ['playerRed', 'playerBlack', 'playerGreen', 'playerYellow', 'playerBlue'];


export function showSucessAlert(message) {
    // Using SweetAlert to show a basic alert
    Swal.fire({
        title: '<p style="text-align: justify"> </p> <br>',
        
        html: '<p> teste </p>', 
        icon: 'success',
        width: "300px",
        height: "300px",

        confirmButtonText: 'Close'
    });
}

export function showErrorAlert(message) {
    // Using SweetAlert to show a basic alert
    Swal.fire({
        title: '<p style="text-align: justify; font-size: 15px;"> '+ message +' </p> <br>',
        icon: 'error',
        width: "250px",        
        position: 'top-end'   ,
        showConfirmButton : false,
        timer: 2000,
        customClass: {
            icon: 'custom-icon-size',
            title: 'custom-title-font-size',
            content: 'custom-content'  
        },    
        

         // Custom class to target the icon
           // Close after 2 seconds
           // Hide the confirm button
    });
}

export function showWarningAlert(message) {
    // Using SweetAlert to show a basic alert
    Swal.fire({
        title: '<p style="text-align: justify; "> '+ message +' </p> <br>',
        icon: 'warning',
        width: "200px",        
        position: 'top-end'   ,
        showConfirmButton : false,
        timer: 2000,
        customClass: {
            icon: 'custom-icon-size',
            title: 'custom-title-font-size',
            content: 'custom-content'  
        },    
        

         // Custom class to target the icon
           // Close after 2 seconds
           // Hide the confirm button
    });
}

export function showMessage(message) {
    Swal.fire(message, 'info');
}

export function getColorSelected() {
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

export function getAllPlayersResult() {
    var players = Players;
    var lenghtOfPlayers = players.length;
    var resultPlayers = []
    for(var index = 0; index < lenghtOfPlayers; index++) {
        var currentPlayer = players[index];
        
        var playerExist = checkIfPlayerExist(currentPlayer);
        if(playerExist) {
            var player = getUserLocalStorage(currentPlayer);
            resultPlayers.push(player)
        }
    }

    return resultPlayers;

}

export function debug() {
    console.log("it works")
}

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

function selectColor(selector ,elemtName, elementObj) {
    $(selector).addClass("bi bi-check");
    localStorage.setItem(elemtName, JSON.stringify(elementObj));
}

function unSelectColor(selector, elementName) {
    $(selector).removeClass("bi bi-check");
    localStorage.removeItem(elementName);
}

export function saveMove(playerName, rail1, rail2,  rail3, rail4, rail5, rail6, total) {
    var playerObj = getUserLocalStorage(playerName);
    playerObj.status = Status.Played;
    playerObj.rail1counter = rail1;
    playerObj.rail2counter = rail2;
    playerObj.rail3counter = rail3;
    playerObj.rail4counter = rail4;
    playerObj.rail5counter = rail5;
    playerObj.rail6counter = rail6;
    playerObj.total = total;
    localStorage.setItem(playerName, JSON.stringify(playerObj));
}