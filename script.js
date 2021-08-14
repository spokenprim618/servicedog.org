let dogurl = "https://dog.ceo/api/breeds/image/random";
let testButton=document.querySelector('button');
testButton.addEventListener("click", button);
function button(){
fetch(dogurl)
     .then(function(response){
     return response.json();
     })
     .then(function(myJson){
     let body=document.querySelector('body');

     let sprite =document.createElement('img');

 
     sprite.src = myJson.message;
     sprite.width=200;
     sprite.height=200;
 
     body.appendChild(sprite);
 
    
     });
};
