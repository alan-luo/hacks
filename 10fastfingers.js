
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
