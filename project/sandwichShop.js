function menuItem(name, price, desc)  {
	this.name = name;
	this.price = price;
	this.desc = desc;
	
	this.display = function() {
		let listNode = document.createElement("li");  
		let textNode = document.createTextNode(this.name + this.price + this.desc);
		listNode.appendChild(textNode);

		let menuList = document.getElementById("menu");
		menuList.appendChild(listNode);

	}
}
