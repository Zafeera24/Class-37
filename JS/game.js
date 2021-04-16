class Game{
    constructor(){
   
    }

    getState(){
        var start =database.ref("gameState")
        start.on("value",(data)=>{
         gameState = data.val()
        })
    

    }

    updateState(state){
     database.ref("/").update({
         gameState: state
     })
    }

    startState(){
      if(gameState=== 0){
        player= new Player();
        form= new Form();
        form.display();
      }

    }

    playState(){
    //  form.hide();
      textSize (25);
      text ("Start Game ",100, 100);
      Player.getPlayerInput();
      if(allplayers !== undefined){
        var pos = 120;
        for (var i in allplayers){
          if(i === "player" + player.index){
             fill("red")
          }else{
            fill("purple")
          }
        pos += 20;
        textSize(25);
        text(allplayer [i].name +":"+allplayers[i].distance, 120, pos);
        }
      }
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance += 50;
          player.updatename();
        }
    }


}
