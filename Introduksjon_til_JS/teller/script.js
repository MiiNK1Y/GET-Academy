function getCurNum() {
    let num = document.getElementById("count").innerHTML;
    return num
}

function setNum(num) {
    document.getElementById("count").innerHTML = num;
}

function plusOne() {
    let num = getCurNum();
    num++;
    setNum(num);
}

function minusOne() {
    let num = getCurNum();
    if (num > 0){
        num--;
        setNum(num);
    };
}