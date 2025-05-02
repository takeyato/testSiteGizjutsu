/**
 *通知の生成
 */
function createNotification(){
    var notificationList = window.LIST; // 通知リストを取得
    
    let notifications ='';
    
    // JSONにあるオブジェクト数の分だけfor文で処理
    for (let i = 0; i < notificationList.length; i++) {
        notifications +=
        '<div class="alert '+ notificationList[i]["kind"] +' ">' +
        '<p class="notification-item">'+
        '<span class="icon"></span>'+
        '<span class="title">'+ notificationList[i]["title"] +'</span>';
        
        for (messege in notificationList[i]["messages"]) {
            notifications +=
            '<span class="message">'+ notificationList[i]["messages"][messege].message +'</span>';
        }
        
        notifications +=
        '</p>'+
        '<a class="closeBtn" href="javascript:void(0)">'+
        '<i class="fa fa-times">X</i>'+
        '</a>'+
        '</div>';
    }
    
    document.getElementById('notificationContents').innerHTML = notifications;
}

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
    
    createNotification();
});

/**
 *jQueryの常駐化
 */
$(function(){
    /**
     * メニューボタン
     */
    $("#menu-btn-check").click(function(){
        var navWrapper = $(".sidebar");
    
      if (navWrapper.class.contains('active')) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove('active');
      } else {
        navWrapper.class.add('active');
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
      }
    });
    
});

