var name1=["Teeny-tiny", "Resolute", "Vengeful", "Spotless", "Good", "Craven", "Equable", "Bright", "Greedy", "Knowledgeable", "Cooing", "Violet", "Tough", "Lucky", "Deep", "Pale", "Eminent", "Romantic", "Petite", "Versed", "Energetic", "Abrasive", "Unhealthy", "Roasted", "Vigorous", "Boiling", "Colorful", "Obsequious", "Special", "Meaty", "Unruly", "Watery", "Smart"];
var woman=["Alice", "Alicia", "Olivia", "Ella", "Ebba", "Lilly", "Astrid", "Saga", "Freja", "Wilma", "Maja", "Agnes", "Elsa", "Alma", "Clara", "Ellie", "Selma", "Julia", "Stella", "Alva", "Signe", "Vera", "Ellen", "Leah", "Molly", "Ines", "Ester", "Linnea", "Isabelle", "Sara", "Nova", "Nellie", "Emilia", "Emma", "Elvira", "Sigrid", "Iris", "Nora", "Lova", "Juni", "Sofia", "Edith", "Elise", "Celine", "Liv", "Elin", "Luna", "Livia", "Leia", "Isabella", "Tyra", "Maria", "Meja", "Lykke", "Tuva", "Hanna", "Felicia", "Thea", "Ingrid", "Majken", "Ida", "Sally", "Amelia", "Moa", "Cornelia", "Lovisa", "Stina", "Rut", "Melissa", "Matilda", "Joline", "Siri", "Jasmine", "Ronja", "Bianca", "Lo", "Svea", "Maryam", "Amanda", "Mila", "Tilde", "Filippa", "Penny", "Märta", "Cleo", "Hilda", "Hedda", "Hilma", "Emelie", "Hedvig", "Julie", "Mira", "Ellinor", "My", "Greta", "Lovis", "Zoey", "Idun", "Melina", "Noomi"];
var man=["William", "Oscar", "Liam", "Lucas", "Oliver", "Alexander", "Elias", "Hugo", "Noah", "Adam", "Leo", "Charlie", "Elliot", "Walter", "Isak", "Axel", "Ludvig", "Adrian", "Alfred", "Nils", "Mohamed", "Filip", "Theo", "Theodor", "Arvid", "Harry", "Leon", "Vincent", "Melvin", "Edvin", "Viktor", "August", "Olle", "Benjamin", "Emil", "Gustav", "Josef", "Viggo", "Sixten", "Gabriel", "Matteo", "Loui", "Albin", "Melker", "Ebbe", "Erik", "Love", "Vidar", "Frank", "Henry", "Malte", "Jacob", "Max", "Sam", "Noel", "Wilmer", "Jack", "Loke", "Elton", "Milo", "Sigge", "Otto", "Colin", "Anton", "Carl", "Tage", "Casper", "Wilhelm", "Alvin", "Frans", "Aron", "Felix", "Kevin", "Milton", "Hjalmar", "Ivar", "Samuel", "Julian", "Vilgot", "Kian", "Elvin", "Elis", "Ali", "Omar", "John", "Ville", "Sebastian", "Jonathan", "Daniel", "Joel", "Simon", "Nicolas", "Folke", "David", "Maximilian", "Thor", "Milian", "Levi", "Vide", "Neo"];
var lastname=["Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson", "Pettersson", "Jonsson", "Jansson", "Hansson", "Bengtsson", "Jönsson", "Lindberg", "Jakobsson", "Magnusson", "Olofsson", "Lindström", "Lindqvist", "Lindgren", "Axelsson", "Berg", "Bergström", "Lundberg", "Lundgren", "Lind", "Lundqvist", "Mattsson", "Berglund", "Fredriksson", "Sandberg", "Henriksson", "Forsberg", "Sjöberg", "Wallin", "Engström", "Eklund", "Danielsson", "Håkansson", "Lundin", "Gunnarsson", "Björk", "Bergman", "Holm", "Samuelsson", "Fransson", "Wikström", "Isaksson", "Bergqvist", "Nyström", "Arvidsson", "Holmberg", "Löfgren", "Ali", "Söderberg", "Mohamed", "Nyberg", "Blomqvist", "Claesson", "Mårtensson", "Nordström", "Lundström", "Eliasson", "Pålsson", "Viklund", "Björklund", "Berggren", "Sandström", "Lund", "Nordin", "Ström", "Åberg", "Hermansson", "Ekström", "Holmgren", "Hedlund", "Falk", "Sundberg", "Dahlberg", "Hellström", "Sjögren", "Abrahamsson", "Ek", "Blom", "Martinsson", "Öberg", "Ahmed", "Andreasson", "Hassan", "Månsson", "Strömberg", "Åkesson", "Hansen", "Jonasson", "Norberg", "Åström", "Sundström"];

var messages=[
["Probably I will have to move because I cannot find job here &#128549</br><span class=\"heshtag\">#Unemplyment #Arbetsverket</span>","It is immposible to find job in this city! &#128545</br><span class=\"heshtag\">#Unemplyment</span>"],//0-unemplyment
["We need more people that can work in this city! Cannot find anyone to work for me! </br><span class=\"heshtag\">#IKEA</span>","Who planned this city?! We need more people - all business are understaffed! &#128548</br><span class=\"heshtag\">#WeNeedMoreWorkers!</span>"],//1-lack of workers
["I need some places to relax in this city! </br><span class=\"heshtag\">#PartyPooper #ThisPlaceIsNotFun</span>","This city needs more nature and places for entertaiment </br><span class=\"heshtag\">#BoringLife</span>"],//2-lack of parks
["I wish I would live in a place with ELECTRICITY!!! </br><span class=\"heshtag\">#WantSomeLight</span>","This city needs more energy sources </br><span class=\"heshtag\">#DarkSide</span>"],//3-lack of energy
["My kids don't have day care to attend :("], //4 - lack of dagis
["No school today! Because there is no enought schools!"], //5 - lack of schools
["Sadly planning to move to different city to college, because I don't have one in my home city!"], //6 - lack of university
["My home was burned because there are no enought fire stations"], //7 - lack of fire stations
["Crime level is too hight!"], //8 - lack of polis
["Is it flu or just a cold. Plese, hire more doctors!"], //9 - lack of hospitals
["This place ROCKS!!!! &#128518 </br><span class=\"heshtag\">#BestPlaceEver #YOLO</span> ","Wow! I feel happy in this place! </br><span class=\"heshtag\">#BalancedLife</span>"],//10-people are happy
["Some housholds complain that there is too high level of pollution"], //11-pollution close to factories
["Some housholds complain that they are not connected to road network"], //12-houses not connected
["Some companies complain that there is too high other companies around them"], //13-companies too many other companies around them
["Some companies complain that they are not connected to road network"], //14-companies are not connected

["I cannot get to a park because it is not connected by road"], //15-26 not connected each object
["I cannot get to a casino because it is not connected by road"],
["I cannot get to a museum because it is not connected by road"],
["I cannot get to a coal station because it is not connected by road"],
["I cannot get to a windmill station because it is not connected by road"],
["I cannot get to a nuclear station because it is not connected by road"],
["I cannot get to a dagis because it is not connected by road"],
["I cannot get to a school because it is not connected by road"],
["I cannot get to a hogskolan because it is not connected by road"],
["I cannot get to a firestation because it is not connected by road"],
["I cannot get to a polis because it is not connected by road"],
["I cannot get to a hospital because it is not connected by road"],

["Some people complain about traffic"], //27-traffic too high
["People are happy for short traveling times"], //28 - short travel time
["People are OK with the traveling time."], //29 - mid travel time
["People are sad because they have to travel a lot"] //30 - long travel time
];


function tweeting(choice) {
var tweet;
var nameID=Math.floor(Math.random() * 100);
var lastnameID=Math.floor(Math.random() * 100);
var nickname = name1[Math.floor(Math.random() * name1.length)];
var avatarID=Math.ceil(Math.random() * 56);

tweet="<tr><td style=\"width:55px;\"><img src=\"c-campus/" + avatarID + ".png\" class=\"avatar\"></td><td>";
var nameIS=(avatarID < 27 ? woman[nameID] : man[nameID]);
tweet=tweet+"<b>" + nameIS + " " + lastname[lastnameID] + "</b> <span style=\"color:#657786\">@" + nickname + nameIS + lastname[lastnameID] + Math.floor(Math.random() * 1000) + " &#xb7 1min </span></br>";
tweet=tweet+messages[choice][Math.floor(Math.random() * messages[choice].length)];
tweet=tweet+"<p style=\"color: #657786; font-size: 12px;font-weight: bold;\"><img src=\"img/reply.png\" style=\"height:14px;\">&nbsp;&nbsp;";
tweet=tweet+Math.round(Math.random() * 50)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"img/retweet.png\" style=\"height:14px;\">&nbsp;&nbsp;";
tweet=tweet+Math.round(Math.random() * 250)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"img/like.png\" style=\"height:14px;\">&nbsp;&nbsp;";
tweet=tweet+Math.round(Math.random() * 500)+"</p></td><td  style=\"width:12px;\"><img src=\"img/more.png\" style=\"height:12px;\"></td></tr>";
return (tweet);
}