var set = 1;
var matriz_game = Array(3);

matriz_game['a'] = Array(3);
matriz_game['b'] = Array(3);
matriz_game['c'] = Array(3);

matriz_game['a'][1] = 0;
matriz_game['a'][2] = 0;
matriz_game['a'][3] = 0;

matriz_game['b'][1] = 0;
matriz_game['b'][2] = 0;
matriz_game['b'][3] = 0;

matriz_game['c'][1] = 0;
matriz_game['c'][2] = 0;
matriz_game['c'][3] = 0;

$(document).ready(function() {

	$('#play_now').click(function() {

		if($('#name_player1').val() == ''){
			alert('nickname invalid');
			return false;
		}

		if($('#name_player2').val() == ''){
			alert('nickname invalid');
			return false;
		}
		
		//Show nickname

		$('#player1').html($('#name_player1').val());
		$('#player2').html($('#name_player2').val());

		//div preview
		$('#start-screen').hide();
		$('#start-game').show();


	});//star_game

	$('.move').click( function(){

		var id_clicked_area = this.id;
		$('#'+id_clicked_area).off();
		move(id_clicked_area);
	});

	function move(id){

		var icon = '';
		var score = 0;

		if((set % 2) == 1){
			icon = 'url("img/x.png")';
			score = -1;
		} else {
			icon = 'url("img/O.png")';
			score = 1;
		}

		set++;

		$('#'+id).css('background-image', icon);

		var line_column = id.split('-');

		matriz_game[line_column[0]][line_column[1]] = score;

		check_combination();

	}

	function check_combination(){

		//horizontal
		var scores = 0;
		for(var i = 1; i <= 3; i++){
			scores = scores + matriz_game['a'][i];
		}
		checkWinner(scores);

		scores = 0;
		for(var i = 1; i <= 3; i++){
			scores = scores + matriz_game['b'][i];
		}
		checkWinner(scores);

		scores = 0;
		for(var i = 1; i <= 3; i++){
			scores = scores + matriz_game['c'][i];
		}
		checkWinner(scores);

		//vertical
		for(var l = 1; l <= 3; l++){
			scores = 0;
			scores += matriz_game['a'][l];
			scores += matriz_game['b'][l];
			scores += matriz_game['c'][l];

			checkWinner(scores);
		}

		//diagonal
		scores = 0;
		scores = matriz_game['a'][1] + matriz_game['b'][2] + matriz_game['c'][3];
		checkWinner(scores);

		scores = 0;
		scores = matriz_game['a'][3] + matriz_game['b'][2] + matriz_game['c'][1];
		checkWinner(scores);

	}

	function checkWinner(scores){
		if(scores == -3){
			var move_1 = $('#name_player1').val();
			alert(move_1 + ' wins!');
			$('.move').off();

		} else if(scores == 3){
			var move_2 = $('#name_player2').val();
			alert(move_2 + ' wins!');
			$('.move').off();
		}
	}

}); //document.ready