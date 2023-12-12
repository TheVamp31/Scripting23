console.log("Working?")

function write(){
    console.log("inside the write function");

var Name = document.getElementById('Name').value;
console.log(Name);

var Number = document.getElementById('Number').value;
console.log(Number);

var Town = document.getElementById('Town').value;
console.log(Town);

var Colour = document.getElementById('Colour').value;
console.log(Colour);

var Exclamation = document.getElementById('Exclamation').value;
console.log(Exclamation);

var MystAni = document.getElementById('MystAni').value;
console.log(MystAni);

var Body = document.getElementById('Body').value;
console.log(Body);

var StName = document.getElementById('StName').value;
console.log(StName);

var StType = document.getElementById('StType').value;
console.log(StType);

var Actioned = document.getElementById('Actioned').value;
console.log(Actioned);

var Toy = document.getElementById('Toy').value;
console.log(Toy);

var Expression = document.getElementById('Expression').value;
console.log(Expression);

var Animal = document.getElementById('Animal').value;
console.log(Animal);

var Material = document.getElementById('Material').value;
console.log(Material);

var ActionPast = document.getElementById('ActionPast').value;
console.log(ActionPast);

var Word = document.getElementById('Word').value;
console.log(Word);

var FicChar = document.getElementById('FicChar').value;
console.log(FicChar);

var Exercise = document.getElementById('Exercise').value;
console.log(Exercise);

var Actioning = document.getElementById('Actioning').value;
console.log(Actioning);

var Tran = document.getElementById('Tran').value;
console.log(Tran);

var prefer= document.querySelector('input[name="prefer"]:checked').value;
console.log(prefer);

var preferMessage;

if(prefer=="Zoo"){
    preferMessage = "I love taking photos of all the animals"
}else if(prefer=="Museum"){
    preferMessage = "I love it when museums have Dinosaur bones & fossils"

}



console.log(preferMessage);

document.getElementById('output').innerHTML = "<h6>"+Name+" is one of "+Number+" security guards at the "+Number+" is one of "+Number+" security guards at the "+prefer+" Of "+Town+". When "+Name+" walks down a hallway they see someone in an all "+Colour+" onesie taking something down from the wall, "+Name+" quickly jumps behind a garbage can and pulls out their radio from their pocket and presses the big button on the right and whispers “there is someone in a "+Colour+" onesie taking something down from the wall” no response comes from the radio so "+Name+" crawled on the floor out from behind the garbage can and stands up "+Exclamation+"! Stop what your doing!” the onesie person stops what they’re doing and runs with the object in hand, "+Name+" starts to run and as they pass the wall, they see that a painting was taken. "+Name+" chases after the person down the hallway & takes a right and passes the "+Colour+" "+MystAni+", all the sudden the onesie person jumps through the window at the end of the hall, "+Name+" does the same, and lands on their "+Body+" “ouch” they cry before getting up and run after the onesie person. "+Name+" chased the person down the back alley between "+StName+" and the "+StType+". "+Name+" watched as the person ran into a dead end. “Nothing can help you now” said "+Name+", “that’s where your wrong” says the person as they "+Actioned+" around, once they finish "+Name+" sees them holding a "+Toy+". "+Name+" looks "+Expression+" as the person is holding it like a weapon. Then a "+Animal+" breaks through the "+Material+" wall of "+StName+" and "+ActionPast+" the person, as the person is shouting "+Word+" he drops the "+Toy+" and the painting of "+FicChar+" doing a "+Exercise+" that he had rolled up in his jacket pocket. "+Name+" grabs it as the "+Animal+" comes over to them, having finished "+Actioning+" the onesie person, "+Name+" decides to Name the "+Animal+" and keep them as a pet. As they are petting their new friend, the cops come around the corner from where they were and say, “good job, this guy has been stealing our cop "+Tran+" since last month, then he moved onto weird paintings, thanks for catching him”. "+Name+" decides to take a walk home with their new pet and take the next week off. </h6>";

}