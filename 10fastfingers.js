activate_keylistener =function(){
	var android_spacebar = 0;
	
	$inputfield.keyup(function(event) {
		if ( loading == 0 ) {
			start_countdown();
		}
		
		$reloadBtn.show();

		$row1_span_wordnr = $('#row1 span[wordnr="'+word_pointer+'"]');
		
		if(event.which == 8)
		{
			backspace_counter++;
		}
		
		if(event.which == input_key_value && $inputfield.val() == ' ')
		{
			$inputfield.val('');
		}
		else if (event.which == input_key_value && loading == 0 || android_spacebar == 1) { //event.which == 32 => SPACE-Taste
			
			//evaluate
     		var eingabe = $inputfield.val().split(" ");
     		user_input_stream += eingabe[0]+" ";
			
			$row1_span_wordnr.removeClass('highlight-wrong');
			
     		if(1==1)
     		{
     			$row1_span_wordnr.removeClass('highlight').addClass('correct');
     			error_correct++;
     			error_keystrokes += words[word_pointer].length;
     			error_keystrokes++; //fÃ¼r jedes SPACE
     		}	
     		else
     		{
     			$row1_span_wordnr.removeClass('highlight').addClass('wrong');
     			error_wrong++;
     			error_keystrokes -= Math.round(words[word_pointer].length / 2);
     		}	
     		
     		//process
     		word_pointer++;
     		$row1_span_wordnr = $('#row1 span[wordnr="'+word_pointer+'"]');
     		
			$row1_span_wordnr.addClass('highlight');
     		
     		p = $row1_span_wordnr.position();
     	
     		//console.log(p.top+"\n");
     		
     		if(p.top > previous_position_top + 10) //"+ 5 ist die Toleranz, damit der Zeilensprung auch funktioniert, wenn User die Schriftart grÃ¶ÃŸer gestellt hat, etc."
     		{
     			row_counter++;
     			previous_position_top = p.top;
     			
     			var zeilensprung_hoehe = (-1 * line_height) * row_counter;
     			$row1.css('top', zeilensprung_hoehe+"px"); //bei einem zeilensprung wird der text um "line_height" verschoben 
     			$row1_span_wordnr.addClass('highlight');
     		}
     		
     		//erase
     		$("#inputstream").text(user_input_stream);
     		$inputfield.val(eingabe[1]);
   		} else {
   			//prÃ¼fe ob user das wort gerade falsch schreibt (dann zeige es rot an, damit user direkt korrigieren kann)
			if($inputfield.val().replace(/\s/g, '') == words[word_pointer].substr(0, $inputfield.val().length))
				$row1_span_wordnr.removeClass('highlight-wrong').addClass('highlight');
			else
				$row1_span_wordnr.removeClass('highlight').addClass('highlight-wrong');	
   		}
   		
	});
};
//words.push($(this).html());

words=[];
for(var i=0; i<10000; i++) {
	words.push("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}
var str=""
for(var i=0; i<words.length-1; i++) {
	str=""+str+words[i]+"|";
}
str=""+str+words[words.length-1];
$("#wordlist").text(str);

countdown=1;

var press = jQuery.Event("keyup");
press.ctrlKey = false;
press.which = 32;

for(var i=0; i<words.length-1; i++) {
	$inputfield.val(words[i]);
	$inputfield.trigger(press);
}
