                                      //Часть 1


var girl = {
  name: "Masha",
  age: 20,
  handBag: [],
  addItem: function ( nameItem ) {
    this.handBag.includes( nameItem ) ? console.log (`${nameItem} уже есть в сумочке!`) : this.handBag.push ( nameItem ) 
  },
  removeItem: function ( nameItem ) {
    if ( this.handBag.includes( nameItem ) ) {
    	for ( var x in this.handBag ) this.handBag[x] == nameItem ? this.handBag.splice ( x, 1 ) : null
    } else console.log ( `В сумочке нет ${nameItem} !` )
  }
}





                                      //Часть 2

var LibraryBook = function (_title = "название книги", _year = "год издания", _author = "автор") {
    var title = _title
    var year = _year
    var author = _author
    var readerName = null
    var readerData = null
    function giveTheBook (client, data = new Date()) {
        readerName = client
        readerData = data   
    }
    this.getBookInfo = function () {
        var text = readerName ? "выдана на руки" : "есть в наличии"
        console.info ( `${author}, ${title} (${year}): ${text}` )
    }
    this.getTheBook = function (client, data) {
        if (readerName) {
          this.getBookInfo ()
          return null
        } else {
            giveTheBook (client, data) 
            return {
                title: title,
                year: year,
                author: author
            }
          }
    }
}
var books = []
books ["Война и мир"] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books ["Отцы и дети"] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )
books ["Кобзарь"] = new LibraryBook ( "Кобзарь", "2005", "Тарас Шевченко" )