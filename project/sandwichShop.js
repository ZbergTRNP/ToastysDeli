function menuItem(name, price, desc)  {
	this.name = name;
	this.price = price;
	this.desc = desc;
	
	this.display = function() {
		let listNode = document.createElement("li"); 
		listNode.className = "menuItem";
		let textNode = document.createTextNode(this.name + "     " + "$" + this.price + "     " + "     " + this.desc);
		listNode.appendChild(textNode);
		
		let listNodeImage = document.createElement("img");
		listNodeImage.className = this.name;
		
		listNodeImage.src = "images/" + this.name + ".jpeg";
		listNode.appendChild(listNodeImage);
		
		let menuList = document.getElementById("menu");
		menuList.appendChild(listNode);

	}
}
