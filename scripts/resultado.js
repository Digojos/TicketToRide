
import { Status, Players, getAllPlayersResult  } from '../scripts/utils.js';


// $(document).ready(function() {
//      playDrumRoll();
// });

function playDrumRoll() {
    const drum = document.querySelector('.drum');
    const stickLeft = document.querySelector('.stick-left');
    const stickRight = document.querySelector('.stick-right');
    const audio = document.getElementById('drum-audio');

    // Define a duração da animação para o mesmo tempo que o áudio
    const audioDuration = audio.duration * 1000;  // converte para ms (milissegundos)

    // Adiciona a classe de animação
    drum.classList.add('animate');
    stickLeft.classList.add('animate');
    stickRight.classList.add('animate');
    
    // Reproduz o áudio
    //audio.play();
    console.log(audioDuration)

    setTimeout(() => {
        console.log("terminou o audio");
        drum.classList.remove('animate');
        stickLeft.classList.remove('animate');
        stickRight.classList.remove('animate');
        $('#drumsAnimation').hide();
        updatePodiumsColor()
        $('#podiumId').show()
        $('#podiumFourthId').show()
        $('#podiumFifthId').show()
    }, 1);



 }

$(document).on('click', '#drumsAnimation', function() {
    playDrumRoll()
});

function updatePodiumsColor() {
    var primeiro = '';
    var segundo = '';
    var terceiro = '';
    var quarto = '';
    var quinto = '';


    var players = getAllPlayersResult();
    //orderna o array pela propriedade total, descendente (do maior para o menor)
    players.sort((a, b) => b.total - a.total);
    
    //Verifica se existe primeira posição no array
    if(0 < players.length) {
        $('.first').css("background-color", players[0].color);
        $('#firstTotal').text(players[0].total)
    }

    if(1 < players.length) {
        $('.second').css("background-color", players[1].color);
        $('#secondTotal').text(players[1].total)
    }

    if(2 < players.length) {
        $('.third').css("background-color", players[2].color);
        $('#thirdTotal').text(players[2].total)
    }

    if(3 < players.length) {
        $('.fourth').css("background-color", players[3].color);
        $('#fourthTotal').text(players[3].total)
    }
    // else {
    //     $('.fourth').hide()
    // }

    if(4 < players.length) {
        $('.fifth').css("background-color", players[4].color);
        $('#fifthTotal').text(players[4].total)
    }
    // else {
    //     $('.fifth').hide()
    // }

    

    
}

$('#openPopup').click(function() {
    $('#popup').fadeIn(); // Show the popup with fade-in effect
  });

  // Close the popup when the "x" is clicked
  $('#closePopup').click(function() {
    $('#popup').fadeOut(); // Hide the popup with fade-out effect
  });

  // Optional: Close the popup when clicking outside of it
  $(window).click(function(event) {
    if ($(event.target).is('#popup')) {
      $('#popup').fadeOut();
    }
  });