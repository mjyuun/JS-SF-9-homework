var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

let faveStartup = [];
//creating array a=[]//

document.querySelector('#create').addEventListener('click', function(){
  random1=(Math.floor((Math.random() * startupX.length)))
  random2=Math.floor((Math.random() * startupY.length))
  document.querySelector('#xForY').innerHTML=('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2])
});

document.querySelector('#save').addEventListener('click', function(){
  faveStartup.push(document.querySelector('#xForY').innerHTML)
});

document.querySelector('#print').addEventListener('click', function(){
  for(let i=0; i<faveStartup.length;++i){
  console.log(faveStartup[i]);

  let faveList = document.querySelector('#favorites')
  let node= document.createElement('p')
  node.appendChild(document.createTextNode(faveStartup[i]))
  document.querySelector('#favorites').appendChild(node)
  //document.querySelector('#favorites').innerHTML = faveStartup[i]//
}
});
