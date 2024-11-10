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
        title: '<p style="text-align: justify"> Error: </p> <br>',
        
        html: '<p> ' + message +' </p>', 
        icon: 'error',
        width: "300px",
        height: "300px"
    });
}

export function showWarningAlert(message) {
    // Using SweetAlert to show a basic alert
    Swal.fire({
        title: '<p style="text-align: justify"> '+ message +' </p> <br>',
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