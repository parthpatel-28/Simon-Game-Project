console.log("heloooooooooooo");

 var game_buttons_list = []; /////////// game buttons array
 var player_buttons_list = [];////////// player buttons array

 var started = false; //condition for game not being started
var level = 1;

 $(document).keypress(function(event){
    if(started == false){
   
        $("body").removeClass("gameover");
        console.log(event.key);

               started = true;

        game_button()
        
    }

 })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////CLICK BUTTON FUNCTION AND EVENTLISTNER////////////////////////////////////////










$(".button").click(function(){

var player_button = $(this).attr("id");
player_buttons_list.push(player_button);
console.log(player_buttons_list);

/////////////////////////////////////////////////
//ANIMATION
$("#" + player_button ).addClass("animation");
                                                                             
                                                                          
setTimeout(function(){
    $("#" + player_button ).removeClass("animation");
    
},400);
////////////////////////////////////////////////

var last_level = player_buttons_list.length - 1


check_answer(last_level);

})















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////CHECK ANSWERS/////////////////////////////////////////////////////////////////

function check_answer(current_level){

if(game_buttons_list[current_level] ==  player_buttons_list[current_level]){
if(game_buttons_list.length == player_buttons_list.length){
    
    level = level + 1;

    setTimeout( function(){
    
        game_button();
        
        
    
    }, 1000)
    }


}else{

$("h2").text("Game Over . Press any key on keyboard to restart");
started = false
level = 1;
game_buttons_list = [];

$("body").addClass("gameover");



}

}


 








 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////GENERATION OF NEW BUTTON////////////////////////////////////////////////////

 function game_button(){

    $("h2").html("Level " + level )

    player_buttons_list = [];

    var new_button = (Math.random() * 4) + 1;
    var new_button = Math.floor(new_button);
    console.log(new_button);

/////////////////////////////////////////////////////////
//ADDING ANIMATION
    $("#" + new_button ).addClass("animation");
                                                                             
                                                                          
    setTimeout(function(){
        $("#" + new_button ).removeClass("animation");
        
    },400);

/////////////////////////////////////////////////////////
// ADDING VALUE TO ARRAYS OF GAME BUTTON
     
    
    game_buttons_list.push( new_button);

    console.log(game_buttons_list);





};