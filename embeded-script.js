
// アプリタイトルの配列
const names = []

// key=domのid, value=アプリタイトル文字列
const namesMap = {}

// key=domのid, value=dom
const domMap = {}


// アプリのタイトルをDOMから取得
const getTitle = (element) => {
    return element.getElementsByClassName("media-body")[0]
                  .getElementsByClassName("media-heading")[0]
                  .getElementsByTagName("a")[0]
                  .innerText
}

// テキストボックスに入力されたタイトルを元に部分一致検索を行う
function searchByTitle() {
  var div = document.getElementsByClassName("col-sm-7 applications")[0]
  var keys = Object.keys(namesMap)
  var searchTitle = document.getElementById("searchTitle").value
  keys.forEach(function(key){
      var name = namesMap[key]
      var item = domMap[key]
      if (name.includes(searchTitle)) {
        item.setAttribute("style", "display : block")
      } else {
        item.setAttribute("style", "display : none")  
      }      
  })
}

window.onload = function() {
  const div = document.getElementsByClassName("col-sm-7 applications")[0]
  
  // 検索ワード入力用のテキストボックスを埋め込む
  const insertHtml = "\
    <form　onsubmit='doSomething();return false;'>\
      <input onChange='searchByTitle()' id='searchTitle' type='text' name='app_name'>\
    </form>"
  div.insertAdjacentHTML('afterbegin', insertHtml)
  
  // アプリ一覧用の配列を作成
  const items = document.getElementsByClassName("media")
  for (let i = 0; i < items.length; i++) {
    // 各アプリのDOMにID設定
    const id = "media-" + i
    items[i].setAttribute("id",id);
    
    // 検索に用いる配列・連想配列の初期化
    const name = getTitle(items[i])
    names.push(name)
    namesMap[id] = name
    domMap[id] = this.document.getElementById(id)
  }
}

