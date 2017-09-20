// the plan here is to replace all the words with really long ones, since typing speed is calculated
// based on # characters rather than # words. for good measure, we also add 10000 words.

// the plan is basically to set up a really difficult typing test and have the computer do it for us

//initialize array
words=[]; 
for(var i=0; i<10000; i++) {
	words.push("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

//concat array into a single string (this is how their website handles it internally)
var str="";
for(var i=0; i<words.length-1; i++) {
	str=""+str+words[i]+"|";
}
str=""+str+words[words.length-1];
$("#wordlist").text(str); //this is the element which handles word list on the client side

countdown=1; // stop the countdown so we don't have to wait 60 sec
// this doesn't work when you put it at the end - i'm not exactly sure why

var press = jQuery.Event("keyup");
press.which = 32; //spacebar


//here we essentially generate the equivalent of typing our really long garbage word correctly
//and then pressing space
for(var i=0; i<words.length-1; i++) {
	$inputfield.val(words[i]); 
	$inputfield.trigger(press);
}