function toast(text) {
    $('#toast').html(text).show();
    setTimeout(function () {
        $('#toast').hide();
    }, 1000)
}

// var k_url = 'http://192.168.1.3/hdl-test/test1';
// var k_url = 'http://www.i7quan.com/test/k.html';
var k_url = 'http://web.hdlkg.net/k.html';
var work = $.connection.myHub;
$.connection.hub.url = 'http://47.96.146.155:1817/lcc';
var hub = $.connection.hub;
hub.start().done(function () {
    window.work.server.品种行情()
    setInterval(function () {
        window.work.server.品种行情()
    }, 1000)
});
// var home_data;
// work.client.GetFSData = function (data) {
//     home_data = data;
// };
