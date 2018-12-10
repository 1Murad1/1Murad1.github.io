var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
             display: inline-block;
             width: 100px;
             height: 100px;
             border-radius: 50%;
             border: solid 1px green;
             font-size: 25px;
        `
elements = tagNames.map ( x => document.body.appendChild ( document.createElement ( x ) ) )

elements.filter ( element => element.tagName === "DIV" )
        .forEach ( ( element, num ) => {
                        element.style = divStyle
                        element.innerText = num
                   })
elements.filter ( element => element.tagName === "BUTTON" )
        .forEach ( element => {
                        element.innerHTML = "remove DIVs"
                        element.onclick = function ( event ) {
                                recursRemove ()
                        }
                   })

var recursRemove = ( function ( selector ) {
    var k = 0
    var elements = document.querySelectorAll ( selector )
    return function remove () {
        if ( elements.length === k ) {
            var btn = document.querySelector ("button")
            btn.remove ()
            return
        } else {
            elements [ k ].parentNode.removeChild ( elements [ k++ ] )
            remove ()
        }
    }    
}) ( "div" )