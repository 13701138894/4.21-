var items = document.querySelectorAll('.content .item');
var bannerCenter = document.querySelector('#bannerCenter');
var content = document.querySelector('.content');
var litem = items[0].cloneNode(true);
var btnRight = document.querySelector('.btn-right');
content.append(litem);
var fitme = items[3].cloneNode(true);
content.insertBefore(fitme, items[0]);
var width = bannerCenter.offsetWidth;
content.style.width = 6 * width + 'px';
content.style.left = -1 * width + 'px';
var index = 1;

var btnRight = document.querySelector('.btn-right');
btnRight.onclick = function () {
    index++;
    if (index > 5) {
        index = 2;
        content.style.left = -1 * width + 'px';
    }
    var v = -index * width;
    move(content, v, 20);
}
var btnLeft=document.querySelector('.btn-left');
btnLeft.onclick=function(){
    index--;
    if(index<0){
        index=3
        content.style.left = -4 * width + 'px';
    }
    var v = -index * width;
    move(content, v, 20);
};