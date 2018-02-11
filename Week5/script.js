var showTable = function(){
	var currentRow = 1;
	var currentCol = 1;

	function buildTable(content){
		var myBody = document.body;
		var myTable = document.createElement('table');
		var myTableBody = document.createElement('tbody');
	
		myTable.style.width = '100%';
		myTable.setAttribute('border', '1');
		myTable.style.borderCollapse = 'collapse';
	
		for (var i = 0; i < 4; i++){
			var trow = document.createElement('tr');
			for (var j = 0; j < 4; j++){
				if (i === 4 && j === 4){
					break;
				}
				else{
					if (i === 0) {
						var thead = document.createElement('th');
						thead.appendChild(document.createTextNode("Header " + (j+1)));
						trow.appendChild(thead);
					}
					else{
						var td = document.createElement('td');
						var cell = (j+1) + "," + i;
						td.appendChild(document.createTextNode(cell));
						td.setAttribute('id', cell);
						if (j === 0 && i === 1) {
							td.style.border = "3px solid black";
						}
					trow.appendChild(td);
					}
				}
			}
			myTableBody.appendChild(trow);
		}
		myTable.appendChild(myTableBody);
		myBody.appendChild(myTable);
	
		if(content){
			content();
		}
	}	
	
	function appendButtons(){
		var myBody = document.body;
		var blabels = ["Left", "Up", "Down", "Right", "Mark Cell"];

		for (var i = 0; i < blabels.length; i++){
			var button = document.createElement('button');
			button.appendChild(document.createTextNode(blabels[i]));
			myBody.appendChild(button);
			var direction = blabels[i];
			button.addEventListener("click", function(choice){
				if (choice.target.innerText !== "Mark Cell"){
					cursor(choice.target.innerText);
				}
				else{
					mark();
				}
			});
		}
	}

	function mark(){
		var cell = document.getElementById(currentCol + "," + currentRow);
		cell.style["backgroundColor"] = "yellow";
	}
	
	function cursor(direction){
		var currentCellID = currentCol + "," + currentRow;
		var currentCell = document.getElementById(currentCellID);
		currentCell.style.border = "1px solid black";
		
		switch (direction){
			case "Up":
				if (currentRow !== 1){
					currentRow--;
				}
				break;
			case "Down":
				if (currentRow !== 3){
					currentRow++;
				}
				break;
			case "Left":
				if (currentCol !== 1){
					currentCol--;
				}
				break;
			case "Right":
				if (currentCol !== 4){
					currentCol++;
				}
				break;
		}
		currentCellID = currentCol + "," + currentRow;
		currentCell = document.getElementById(currentCellID);
		currentCell.style.border = "3px solid black";
	}
	buildTable(appendButtons);
};
showTable();