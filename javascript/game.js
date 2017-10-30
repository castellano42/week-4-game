$(document).ready(function(){
			var obiWan;
			var rey;
			var darthMaul;
			var darthVader;
			var userChar;
			var enemies;
			var enemyChoice;
			var obiHp;
			var reyHp;
			var maulHp;
			var vaderHp;
			var userHp;
			var enemyHp;

			// steps:
			// make character images into buttons that the user can click x


			var yourCharacter 
			var currentEnemy
			var characters = [{name:"obiWan", hp:150, imgSrc:"https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=75%2C42%2C1525%2C858&width=768"}]

			renderAllCharacters($("#your-character"), characters); 

			// $("#"+yourCharacter.name).click(fucntion(event){

			// });


			function renderAllCharacters(element, chars)
			{
				var allButtons = "";
				for(var i = 0; i < chars.length; i++){
					allButtons += renderOneCharacter(chars[i]);
				}
				element.html(allButtons); 
			}


			function renderOneCharacter(character){
				var img= '<img class="characters" id="'+character.name+'" src="'+character.imgSrc+'">';
				var characterName = '<p id="obi-tag">'+character.name+'</p>'; 
				var characterHp = '<p id="obi-hp"><span id="kenobi-hp">'+character.hp+'hp</span></p>'
				return '<button id="button"><div class="image">' + img + characterName + characterHp +'</div></button>';
			}


			function attack(){

			}





			// make character hp represent an actual value
			$("#kenobi-hp").text("130 hp");
			
			// allow user to choose their character 

			//  move users character to the Your Character section

			// give users character a strength value
			
			// move the characters that are left to the enemies section

			// give all enemies they're own strength value
			
			// allow user to choose their enemy
			
			// move enemy choice to the defender section

			// make attack button

			// when attack button is clicked take the value of the users strength away from the enemies hp and vice versa

			// once user has attacked add their original strength value to the current and 

			// do the same everytime the user attacks but leave the enemy strength the same

			// if users hp gets to zero, alert that they lost, and allow them to restart the game

			// if enemy hp gets zero alert that the user won that round and allow them to choose their next enemy

			// repeat previous step until all enemies have been defeated

			// let the user know that they won, either by alert or displaying it on the page

})

		
