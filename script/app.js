var roster = {
    players: []
}


var playerListElem = document.getElementById('player-list');


function Player(name, pos, num, url) {
    
    this.name = name;
    this.pos = pos;
    this.num = num;
    this.url = url;
    roster.players.push(this);
  } 

for(var i = 0; i < roster.players.length; i++) {
    var currentPlayer = roster.players[i];
    drawPlayerOnScreen(currentPlayer);
}

function drawPlayerOnScreen(currentPlayer) {
    var playerElem = document.createElement('div');
    playerElem.className = 'player-card';
    playerElem.innerHTML = '<button type="button" class="btn btn-danger"> Remove Player </button>' + '<p>' + currentPlayer.name + '</p> <p>' + currentPlayer.pos + '</p> <img src="' + currentPlayer.url + '" alt="assets\images\blankplayer.png"><div class="btn-group"><button>Add to Cart</button></div>'
    playerListElem.appendChild(playerElem);
}