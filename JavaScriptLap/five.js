function showTxt(evt){
    document.getElementById("curVal").value = evt.innerText;
}

function deCnt(){
    let cnt = document.getElementById("curVal").value;
    if(typeof cnt !== "number"){
        document.getElementById("curVal").value = 0;
    }
    cnt--;
    document.getElementById("curVal").value = cnt;
}

function inCnt(){
    let cnt = document.getElementById("curVal").value;
    if(typeof cnt !== "number"){
        document.getElementById("curVal").value = 0;
    }
    cnt++;
    document.getElementById("curVal").value = cnt;
}

function getTxt(){
    let txt = document.getElementById('inTxt');
    var chk = confirm("Do you want to show the text?");

    alert(chk?txt.value:"not shown");
}

