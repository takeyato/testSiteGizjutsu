/*
 *jQueryのCDN
 */
var resText="this is include.js";

/**
 * 初期表示
 * json読み込み
 */
window.addEventListener("load",function() {
    var json = window.SWEETS; // 読み込みデータを利用

    // JSONデータを変換
    //let json = JSON.parse(data);

    // 生成したHTMLを入れておく変数
    let main = '';
    let sub = '';
    
    sub +=
    '<h2>目次</h2>' +
    '<ul>' ;

    // JSONにあるオブジェクト数の分だけfor文で処理
    for (let i = 0; i < json.length; i++) {
        //-------main--------
        main +=
        
        //タイトル部分
        '<h2 id="'+ json[i].abbreviatedName +'" class="content-heading">' +
        json[i].name +
        '</h2>' +
        '<div class= "block block-rounded" >' +
        '<div class= "block-content" >' +
        '<div class= "row items-push text-center" >';
        
        for(str in json[i].attribute){
            //システム単体を構成
            if(null != json[i]["attribute"][str]){
                let htmlParts =
                '<div class= "col-3 col-md-3" >' +
                '<a class= "item item-circle '+ str +' text-white-75 mx-auto mb-3"' +
                ' href="' + json[i]["attribute"][str].url + '" >' +
                '</a>' +
                '<div class= "fw-semibold" >' +
                json[i]["attribute"][str].title +
                '</div>' +
                '</div>';
                
                main += htmlParts;
            }

        }
        
        main +=

        //タイトル部分
        '</div>' +
        '</div>' +
        '</div>';
        
        //-------main--------
        sub +=
        '<li><a href="#'+ json[i].abbreviatedName +'">'+ json[i].abbreviatedName +'</a></li>';
        
    }
    
    sub+=
    
    '</ul>' +
    '</div>';
    
    // 変数に格納したHTMLを出力
    document.getElementById('mainContent').innerHTML = main;
    document.getElementById('subContent2').innerHTML = sub;
});


/**
 * メニューボタン
 */
const navToggle = document.getElementsByClassName(".nav__toggle");
const navWrapper = document.getElementsByClassName(".nav__wrapper");

function menuButtonClick() {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
}