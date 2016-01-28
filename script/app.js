var roster = []

var playerListElem = $('#roster');
var playerId = 0;

function Player(id, name, pos, num) {
    this.id = playerId++;
    this.name = document.getElementById('inputname').value;
    this.pos = document.getElementById('inputposition').value;
    this.num = document.getElementById('inputnum').value;
    roster.push(this);
    drawPlayerOnScreen(this);
  }

function drawPlayerOnScreen(currentPlayer) {
    var playerElem = $('<div class="player-card">');
    var removeBtn = $('<button type="button" class="btn-block btn-danger"> Remove Player </button>')
    removeBtn.click(function(){
        roster.splice(roster.indexOf(currentPlayer), 1);
        playerElem.remove();
    })
    playerElem.append(removeBtn)
    playerElem.append('<div>' +  '<img class="url" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">' + '<p class="playerinfo">' + "Name: " + currentPlayer.name + '</p> <p class="playerinfo">' + "Position: " + currentPlayer.pos + '</p> <p class="playerinfo">' + "# " + currentPlayer.num + '</p>' + '<p class="id" hidden>' + currentPlayer.id + '</p></div>')
    playerListElem.append(playerElem);
}




