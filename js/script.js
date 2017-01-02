
window.onload = function () {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    //当音乐播放停止，自动停止光盘旋转效果
    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
        // music.style.animationPlayState = "paused";
        // this.style.webkitAnimationPlayState='paused';
    }, false);


    //点击音乐图标控制音乐部分
    // music.onclick = function () {
    //     //animationPlayState兼容性不太好，特别安卓，不过效果很自然。；setAttribute("class","play")回到初始位置比较突兀。
    //     if (audio.paused) {
    //         audio.play();
    //         this.setAttribute("class", "play");
    //         // this.style.animationPlayState='running'
    //         // this.style.webkitAnimationPlayState='running'
    //     } else {
    //         audio.pause();
    //         this.setAttribute("class", "");
    //         // this.style.animationPlayState='paused';
    //         // this.style.webkitAnimationPlayState='paused';
    //     };
    // };
    //onclick是pc端，有300ms延迟，手机端用监听ddEventListener("touchstart", function (event)实现
    music.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute("class", "play");
            // this.style.animationPlayState='running'
            // this.style.webkitAnimationPlayState='running'
        } else {
            audio.pause();
            this.setAttribute("class", "");
            // this.style.animationPlayState='paused';
            // this.style.webkitAnimationPlayState='paused';
        };
    }, false);

    page1.addEventListener("touchstart", function () {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%"
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500);
    }, false);
};
