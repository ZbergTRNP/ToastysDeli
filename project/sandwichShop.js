const menuItems = [];
const itemPrices = [];

function menuItem(name, price, desc)  {
	this.name = name;
	this.price = price;
	this.desc = desc;
	 
	this.display = function() {
		menuItems.push(this.name);
		itemPrices.push(this.price);
		
		let listNode = document.createElement("div"); 
		listNode.className = "menuItem";
		listNode.id = this.name.replace(/\s+/g, '');
		let textNode = document.createTextNode(this.name + "	$" + this.price);
		let description = document.createTextNode(this.desc);
		let linebreak1 = document.createElement("br");
		let linebreak2 = document.createElement("br");
		listNode.appendChild(textNode);
		listNode.appendChild(linebreak1);
		
		
		let listNodeImage = document.createElement("img");
		listNodeImage.className = this.name;
		
		listNodeImage.src = "images/" + this.name.replace(/\s+/g, '') + ".jpeg";
		
		let menuList = document.getElementById("menu");
		menuList.appendChild(listNode);
		listNode.appendChild(listNodeImage);
		listNode.appendChild(description);
		
		let input = document.createElement("input");
		input.id = this.name + "input";
		input.name = this.name + "input";
		input.type = "text";
		input.value = "0";
		input.className = "itemQuantity";
		
		let label = document.createElement("label");
		label.id = this.name + "label";
		label.htmlFor = this.name + "input";
		label.innerHTML = "QTY";
		
		listNode.appendChild(linebreak2);
		listNode.appendChild(label);
		listNode.appendChild(input);
		
		
		
	}
}

function findSubtotal() {
	let total = 0;
	for (i = 0; i <= menuItems.length; i++)  {
		let itemQty = document.getElementById(menuItems[i] + "input").value;
		let itemPrice = itemPrices[i];
		let itemTotal = itemQty * itemPrice;
		total = total + itemTotal;
		document.getElementById("total").innerHTML = "<br>Total Price is: $" + total;
	}
}
function resetTotal(){
	for (i = 0; i <= menuItems.length; i++)  {
		document.getElementById(menuItems[i] + "input").value = "0";
		}
    for (i = 0; i <= menuItems.length; i++)  {
		let itemQty = document.getElementById(menuItems[i] + "input").value;
		let itemPrice = itemPrices[i];
		let itemTotal = itemQty * itemPrice;
		total = total + itemTotal;
		document.getElementById("total").innerHTML = "<br>Total Price is: $" + total;
	}
}
