var kemal_vote = 0;
function kemalClick(){
  kemal_vote += 1;
  document.getElementById('kemal-click').innerHTML = kemal_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}
function kemalNegClick(){
  kemal_vote -= 1;
  document.getElementById('kemal-click').innerHTML = kemal_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}

var rte_vote = 0;
function rteClick(){
  rte_vote += 1;
  document.getElementById('rte-click').innerHTML = rte_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}
function rteNegClick(){
  rte_vote -= 1;
  document.getElementById('rte-click').innerHTML = rte_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}

var invalid_vote = 0;
function invClick(){
  invalid_vote += 1;
  document.getElementById('invalid-click').innerHTML = invalid_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}
function invNegClick(){
  invalid_vote -= 1;
  document.getElementById('invalid-click').innerHTML = invalid_vote;
  document.getElementById('sum-vote').innerHTML = kemal_vote + rte_vote + invalid_vote
}
function reset(){
  location.reload()
}

