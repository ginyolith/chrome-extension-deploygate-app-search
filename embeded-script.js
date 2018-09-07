window.MyEmbededProgram = {
  helloWorld: function() {
    alert("Hello World!")
  },

  getTitle: function(element) {
      return element.getElementsByClassName("media-body")[0]
                    .getElementsByClassName("media-heading")[0]
                    .getElementsByTagName("a")[0]
                    .innerText
  },
};


var names = []
var namesMap = {}

window.onload = function() {
  var div = document.getElementsByClassName("col-sm-7 applications")[0]
  
  var insertHtml = "\
    <form　onsubmit='doSomething();return false;'>\
      <input onChange='searchByTitle()' id='searchTitle' type='text' name='app_name'>\
    </form>"
    // <button type='button' name='aaa' id='searchButton' onClick='searchByTitle()' value='検索'>検索</button>\
  div.insertAdjacentHTML('afterbegin', insertHtml)
  
  var items = document.getElementsByClassName("media")
  for (var i = 0; i < items.length; i++) {
    var id = "media-" + i
    items[i].setAttribute("id",id);
    var name = window.MyEmbededProgram.getTitle(items[i])
    names.push(name)
    namesMap[id] = name
  }
}

function searchByTitle() {
  var div = document.getElementsByClassName("col-sm-7 applications")[0]
  var keys = Object.keys(namesMap)
  var searchTitle = document.getElementById("searchTitle").value
  keys.forEach(function(key){
      var name = namesMap[key]
      var item = document.getElementById(key)
      if (name.includes(searchTitle)) {
        item.setAttribute("style", "display : block")
      } else {
        item.setAttribute("style", "display : none")  
      }      
  })
}