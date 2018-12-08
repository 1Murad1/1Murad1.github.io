var picture = document.body.appendChild(
	document.createElement("img")
)

fetch ("https://images.pexels.com/photos/302271/pexels-photo-302271.jpeg")
	.then (response => {
		response.blob()
			.then(response => {
				urlObject = URL.createObjectURL(response)
				picture.src = urlObject
				picture.width = 700
			})
	})