//Name: Stephanie Gritz
//Date: 2/4/2018
//CS290-400
//Description: Sort array of automobile objects each of which has a year, make, model, and type by year, make or type.
//Then displays results of each type of sort.

function Automobile(year, make, model, type) {
  this.year = year; //integer (ex. 2001, 1995)
  this.make = make; //string (ex. Honda, Ford)
  this.model = model; //string (ex. Accord, Focus)
  this.type = type; //string (ex. Pickup, SUV)
  this.logMe = function(x){
	  if (x == true){
		  console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
	  }
	  else{
		  console.log(this.year + " " + this.make + " " + this.model);
	  }
  }
}

var automobiles = [
  new Automobile(1995, "Honda", "Accord", "Sedan"),
  new Automobile(1990, "Ford", "F-150", "Pickup"),
  new Automobile(2000, "GMC", "Tahoe", "SUV"),
  new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
  new Automobile(2005, "Lotus", "Elise", "Roadster"),
  new Automobile(2008, "Subaru", "Outback", "Wagon")
];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
  /*your code here*/
  var sortedArr = array;
  for (var i = 0; i < (sortedArr.length - 1); i++){
  	for (var j = i + 1; j <	sortedArr.length; j++){		//should this be j=i+1?
    	if(comparator(sortedArr[j], sortedArr[i])){
      	var temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }
  return sortedArr;
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2) {
  /* your code here*/
  return auto1.year > auto2.year;				
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2) {
  /* your code here*/
  var auto1make = auto1.make.toLowerCase();
  var auto2make = auto2.make.toLowerCase();
  
  return auto1make < auto2make;  
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2) {
  /* your code here*/
  var auto1type = auto1.type.toLowerCase();
  var auto2type = auto2.type.toLowerCase();
  var autoTypes = ["roadster", "pickup", "suv", "wagon"]; 	//"greatest" index is the least
  
  if (auto1type == auto2type){							//in case of equal types
  	return auto1.year > auto2.year;
  }
  
  var typeRank1 = 4;									//set default rank to unlisted
  var typeRank2 = 4;
  
  for (var i = 0; i < autoTypes.length; i++){			//Determine rank based on index in autoTypes
  	if (auto1type == autoTypes[i]){
    	typeRank1 = i;
    }
  	if (auto2type == autoTypes[i]){
    	typeRank2 = i;
    }
  }
  return typeRank1 < typeRank2;
}

var results = function(){
	console.log("*****");
  
  console.log("The cars sorted by year are:");				//list sorted descending from newest to oldest
  var yearSorted = sortArr(yearComparator, automobiles);	
  
  for (var i = 0; i < yearSorted.length; i++){
  	yearSorted[i].logMe(false);
  }  
  
    console.log("The cars sorted by make are:");			//sorted alphabetically by make, a-z
  var makeSorted = sortArr(makeComparator, automobiles);
  for (var j = 0; j < makeSorted.length; j++){
  	makeSorted[j].logMe(false);
  }
  
  console.log("The cars sorted by type are:");				//sorted by type order (roadster, pickup, suv, sedan, other)
  var typeSorted = sortArr(typeComparator, automobiles);
  for (var k = 0; k < typeSorted.length; k++){
  	typeSorted[k].logMe(false);
  }
    
  console.log("*****");
};

results();