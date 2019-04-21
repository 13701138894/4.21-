var flag;
function move(box, targetValue, speed) {
    clearInterval(box.flag);
    box.flag = setInterval(function () {
        var v = box.offsetLeft;
        if (v == targetValue) {
            return;
        }
        if (Math.abs(v - targetValue) < speed) {
            v = targetValue;
        } else {
            if (v > targetValue) {
                v = v - speed;
            } else if (v < targetValue) {
                v = v + speed;
            }
        }
        box.style.left = v + 'px';
    }, 30);
}