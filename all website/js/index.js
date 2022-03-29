// 根据鼠标移动控制div的位置    
window.onload = function(){
    var SX = 0;
    var SY = 0;
    var MX = 0;
    var MY = 0;
    var Scount = 0;
    var Mcount = 0;
    var TSbox = 0;
    var LSbox = 0;
    var TMbox = 0;
    var LMbox = 0;
    //获取屏幕长、宽
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;

    // 鼠标移动事件
    document.getElementById('area').onmousemove = function (event) {
        event = event || window.event;
        var smallbox = document.getElementById('smallbox');
        var middlebox = document.getElementById('middlebox');

        //获取鼠标坐标
        var x = event.clientX;
        var y = event.clientY;
        Scount = 0;
        Mcount = 0;

        // console.log(y);
        //更新盒子坐标
        //小盒子坐标 
        TSbox  =  (h - y - 225) - smallbox.getBoundingClientRect().top ; 
        LSbox = w - x - 400 -smallbox.getBoundingClientRect().left ;
        // 中盒子坐标
        TMbox  =  (h - y - 310) - middlebox.getBoundingClientRect().top ; 
        LMbox = w - x - 550 -middlebox.getBoundingClientRect().left ;
    }  
    function smalldraw(){
        if(Scount < 200){
            SX += LSbox/200;
            SY += TSbox/200;
        }
        if (SX < 70) {
            SX = 70;
        }else if (SX < w - 800 - 70) {
            smallbox.style.left = SX + "px";
        }
            
        if (SY < 0) {
            SY = 0;
        }else if (SY < h - 450){
            smallbox.style.top = SY +"px";
        }
        Scount++;
    }
    function middledraw(){
        if(Mcount < 250){
            MX += LMbox/250;
            MY += TMbox/250;
        }
        if (MX < 70) {
            MX = 70;
        }else if (MX < w - 1100 - 70) {
            middlebox.style.left = MX + "px";
        }
            
        if (MY < 0) {
            MY = 0;
        }else if (MY < h - 620){
            middlebox.style.top = MY +"px";
        }
        Mcount++;
    }
    setInterval(smalldraw,1);
    setInterval(middledraw,1);
}
    
// 鼠标控制小视频播放
//鼠标移进去
function smallvideoPlayback(){
    //获取视频标签
    var video = document.getElementById('smallvideo');
    //给视频标签添加缓存播放---video标签属性。
    video.setAttribute("autoplay","autoplay")
    //给视频标签添加循环播放---video标签属性。
    video.setAttribute("loop","loop")
    //播放视频
    video.play();
}
//鼠标离开
function smallvideoStopped(){
    //获取视频标签
    var oDiv = document.getElementById('smallvideo');
    //停止播放
    oDiv.pause();
}

// 鼠标控制中视频播放
//鼠标移进去
function middlevideoPlayback(){
    //获取视频标签
    var video = document.getElementById('middlevideo');
    //给视频标签添加缓存播放---video标签属性。
    video.setAttribute("autoplay","autoplay")
    //给视频标签添加循环播放---video标签属性。
    video.setAttribute("loop","loop")
    //播放视频
    video.play();
}
//鼠标离开
function middlevideoStopped(){
    //获取视频标签
    var oDiv = document.getElementById('middlevideo');
    //停止播放
    oDiv.pause();
}

// 鼠标控制大视频播放
//鼠标移进去
function bigvideoPlayback(){
    //获取视频标签
    var video = document.getElementById('bigvideo');
    //给视频标签添加缓存播放---video标签属性。
    video.setAttribute("autoplay","autoplay")
    //给视频标签添加循环播放---video标签属性。
    video.setAttribute("loop","loop")
    //播放视频
    video.play();
}
//鼠标离开
function bigvideoStopped(){
    //获取视频标签
    var oDiv = document.getElementById('bigvideo');
    //停止播放
    oDiv.pause();
}

// 隐藏侧边栏
function siderback(){
    var sider = document.getElementById('sider');
    var img = document.getElementById('return');
    sider.className = "siderback";
    img.className = "imgback"
}
// 弹出侧边栏
function aside(){
    var sider = document.getElementById('sider');
    var img = document.getElementById('return');
    sider.className = "opensider";
    img.className = "imgup"
}
