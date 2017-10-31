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


			var yourCharacter;
			var currentEnemy;

			var allCharacters = [{name:"Obi Wan", hp:120, imgSrc:"https://img.buzzfeed.com/buzzfeed-static/static/2017-08/18/16/enhanced/buzzfeed-prod-fastlane-01/enhanced-32245-1503089139-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
								{name:"Rey", hp:100, imgSrc:"http://lrmonline.com//inc/uploads/2017/06/img-1-9.jpg"},
								{name:"Darth Maul", hp:150, imgSrc:"https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=75%2C42%2C1525%2C858&width=768"},
								{name:"Darth Vader", hp:180, imgSrc:"https://1.bp.blogspot.com/-JnRMWN4T5mM/WNJ4tNjeFZI/AAAAAAABDZM/dNiRnTykLRwaTyhLWiROlrMmc46QOhcKQCLcB/s1600/Vader.jpeg"}]
									
			var remainingCharacters = allCharacters; 



			renderAllCharacters($("#all-characters"), allCharacters); 

			function renderAllCharacters(element, chars)
			{
				var allButtons = "";
				for(var i = 0; i < chars.length; i++){
					allButtons += renderOneCharacter(chars[i]);
				}
				element.html(allButtons); 
			}

			function makeId(name){
				return name.toLowerCase().replace(" ", "-"); 
			}

			function renderOneCharacter(character){
				var id = makeId(character.name); 
				var img = '<img class="allCharacters" src="'+character.imgSrc+'">';
				var characterName = '<div>'+character.name+'</div>'; 
				var characterHp = '<div>'+character.hp+'hp</div>'
				return '<button id="'+id+'" class="characters"><div>' + characterName + img +  characterHp +'</div></button>';
			}

			function attackButton(){

			}

			for(var i = 0; i < allCharacters.length; i++){
				var thisCharacter = allCharacters[i];
				$("#" + makeId(thisCharacter.name)).click(function(event){
					if(yourCharacter === undefined || yourCharacter === null){
						yourCharacter = thisCharacter; 
						remainingCharacters.splice[i, 1];
						// $("#all-characters").html("");
						renderAllCharacters($("#your-character"), [yourCharacter]); 
						renderAllCharacters($("#your-enemies"), remainingCharacters);
					} 
				})
			}







			// make character hp represent an actual value
			
			// allow user to choose their character 

			//  move users character to the Your Character section

			// give users character a strength value
			
			// move the allCharacters that are left to the enemies section

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

		
