$(document).ready(function(){
	$('#list').ready(function(){
	$.ajax({
		url : '/api',
		dataType : 'json',
		method : 'GET',
		data : {proc : 'going'},
		success: function(res){

			console.log(res.txt);
			
		
			var newLi = document.createElement('li');
  				newLi.innerHTML = 'txt: ' + res.txt;
				list.appendChild(newLi);
		
		
	},

		error: function(res){
			console.log('ajax error2');
		},
	});

		});
});
$('[name=add]').on('submit', function(event){
	event.preventDefault();
	var number = $('#number').val();
	
	
	$.ajax({
		method : "POST",
		url : '/api',
		dataType : "json",
		data : {'number' : number},
		success : function(res){
			console.log(res.txt);
			console.log(number);
			var newLi = document.createElement('li');
  				newLi.innerHTML = 'number: ' + number;
				list.appendChild(newLi);
			
		},
		error: function(res){
			console.log("ajax error1");
		},


	});
});


	

	

