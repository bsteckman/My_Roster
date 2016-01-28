var roster = {
       players: []
}


var playerListElem = document.getElementById('roster');


function Player(name, pos, num) {
    
    this.name = document.getElementById('inputname').value;
    this.pos = document.getElementById('inputposition').value;
    this.num = document.getElementById('inputnum').value;
    roster.players.push(this);
    drawPlayerOnScreen(this);
  }

// for(var i = 0; i < roster.players.length; i++) {
//     var currentPlayer = roster.players[i];
//     drawPlayerOnScreen(currentPlayer);
// }



function drawPlayerOnScreen(currentPlayer) {
    var playerElem = document.createElement('div');
    playerElem.className = 'player-card';
    playerElem.innerHTML = '<div><button type="button" class="btn-block btn-danger" id="remove"> Remove Player </button></div>' +  '<img class="url" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">' + '<p class="playerinfo">' + "Name: " + currentPlayer.name + '</p> <p class="playerinfo">' + "Position: " + currentPlayer.pos + '</p> <p class="playerinfo">' + "# " + currentPlayer.num + '</p>' + "</div>"
    playerListElem.appendChild(playerElem);
}




