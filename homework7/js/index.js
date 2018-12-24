var User = function ( name = "name", 
					  email = "user@sample.com",
					  photo = User.getAvatar() ) {
  		this.name = name
        this.email = email
        this.photoURL = photo
        this.info = ''
}

User.avatars = [
     "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
     "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]

User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "Murad"
}

User.getAvatar = function () {
	return this.avatars.shift ()
}

User.prototype.messageBox = ( function () {
    var box = document.createElement ("div")
    document.body.appendChild(box)
    box.style = `
        width: 400px;
        height: 300px;
        bottom: 0;
        left: 0;
        position: fixed;
        padding: 15px;
        overflow: auto;
        border: 1px solid gray;
        bacground-color: #000;
    `
    box.picture = box.appendChild(document.createElement("img"))
    box.picture.style.width = "50px"
    box.name = box.appendChild(document.createElement("span"))
    box.name.style = "font-weight: bold; color: #9ab; padding-left:10px;"
    box.message = box.appendChild(document.createElement("textarea"))
    box.message.placeholder = "Сообщение"
    box.message.oninput = function (event) {
        event.target.parentNode.querySelector("img").src = User.admin.photoURL
        event.target.parentNode.querySelector("span").innerHTML = User.admin.name
    }
    box.message.style = "width: 100%; height: 100%;"
    return box
}) ()

User.prototype.write = function () {
    
}

User.prototype.read =  function () {}
co





































