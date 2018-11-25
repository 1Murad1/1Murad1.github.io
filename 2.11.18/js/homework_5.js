/////////////////////////Homework5-1///////////////////

var p = document.body.appendChild(
	document.createElement("p")
)
p.innerText = "кликни меня"
p.style = `
	cursor: pointer;
`
p.onclick = function (event) {
	var img = document.body.appendChild(
		document.createElement("img")
	)
	img.src = "https://theawesomedaily.com/wp-content/uploads/2017/08/cool-pictures-of-cars-4-1.jpg"
    img.style.width = "100px"
    img.style.heidth = "100px"
    img.style.transition = "all .5s"
	img.onmouseover = function (event) {
		this.style.width = "200px"
		this.style.heidth = "200px"
	}
	img.onmouseout = function (event) {
		this.style.width = "100px"
		this.style.heidth = "100px"
	}
	img.onclick = function (event) {
		img.style.display = "none"
	}
}
