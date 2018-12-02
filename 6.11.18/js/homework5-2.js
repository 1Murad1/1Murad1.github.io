////////////////////////////homework 5-2///////////////////////////
var elem = document.body.children

var arrElem =[]

for(var el of elem) {
	arrElem.push(el)
}

function clickHandler (event) {
	this.style.color = "red"
}

function clickHandler1 (event) {
	this.style.fontSize = "42px"
}

for(var btn of arrElem) {
	btn.addEventListener ("click", clickHandler),
	btn.addEventListener ("click", clickHandler1)
}

