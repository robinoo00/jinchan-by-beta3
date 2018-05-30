function toast(text,duration = 1000) {
    var has = document.getElementById('toast');
    if(has === null){
        var body = document.getElementsByTagName('body')[0];
        var wrap = document.createElement('div');
        wrap.innerHTML = '<div class="window_toast" id="toast"></div>';
        body.appendChild(wrap);
    }
    var item  = document.getElementById('toast');
    item.innerText = text;
    item.style.display = 'block';
    setTimeout(function () {
        item.style.display = 'none';
    }, duration)
}
var k_type_choose = "";
var work = $.connection.myHub;
$.connection.hub.url = 'http://47.96.146.155:1817/lcc';
var hub = $.connection.hub;
hub.start().done(function () {
    work.server.品种行情()
    setInterval(function () {
        work.server.品种行情()
    }, 1000)
});

