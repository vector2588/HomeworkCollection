function closeContent() {
    contentElement = document.getElementById("content");
    if (contentElement.style.display === "none")
        contentElement.style.display = "block";
    else
        contentElement.style.display = "none";
    console.log(contentElement.style.display);
}

function showContent() {
    contentElement = document.getElementById("content");
    contentElement.style.display = "block";
    console.log(contentElement.style.display);
}

function hideAll() {
    courseContentElement = document.getElementById("courseContent");
    phylosContentElement = document.getElementById("philosopyElement");
    PurposesContentElement = document.getElementById("Purposes");
    courseContentElement.style.display = "block";
    phylosContentElement.style.display = "none";
    PurposesContentElement.style.display = "none";
}

function showCourseContent() {
    courseContentElement = document.getElementById("courseContent");
    phylosContentElement = document.getElementById("philosopyElement");
    PurposesContentElement = document.getElementById("Purposes");
    courseContentElement.style.display = "block";
    phylosContentElement.style.display = "none";
    PurposesContentElement.style.display = "none";
}

function showPhylosContent() {
    courseContentElement = document.getElementById("courseContent");
    phylosContentElement = document.getElementById("philosopyElement");
    PurposesContentElement = document.getElementById("Purposes");
    courseContentElement.style.display = "none";
    phylosContentElement.style.display = "block";
    PurposesContentElement.style.display = "none";
}
function showPurpose(){
    courseContentElement = document.getElementById("courseContent");
    phylosContentElement = document.getElementById("philosopyElement");
    PurposesContentElement = document.getElementById("Purposes");
    courseContentElement.style.display = "none";
    phylosContentElement.style.display = "none";
    PurposesContentElement.style.display = "block";
}
function showText(element) {
    let html = element.innerHTML;
    let text = element.innerText;
    alert("inner html = \n " + html +
        "\n" + "the text = \n " + text);
}

let counter = 0;

function increaseCounter() {
    counter = counter + 1;
    valueButton = document.getElementById("currentValue");
    valueButton.value = counter;
}

function decreaseCounter() {
    counter = counter - 1;
    valueButton = document.getElementById("currentValue");
    valueButton.value = counter;
}

function getCourseCode(element) {
    let currentTextElement = document.getElementById("currentValue");
    let newText = element.innerText;
    currentTextElement.value = newText;
}

function getTextBoxValue() {
    let textBoxElement = document.getElementById("inputText");
    var confirmBox = confirm("Do you want to show the text?");

    if (confirmBox == true) {
        alert(textBoxElement.value);
    } else {
        alert("the text box is not shown");
    }
}

var cnt = 1;
function ranstr(){
    var word = "";
    var text = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i< Math.floor((Math.random()*10) + 10);i++){
        word += text.charAt(Math.floor((Math.random()*text.length)));
    }
    return word;
}

function addButton(){
    cnt++;
    let ttrr = document.createElement('tr');
    let no = document.createElement('th');
    let word = document.createElement('td');
    no.setAttribute('scope','row');
    no.innerHTML = cnt;
    word.innerHTML = ranstr();
    ttrr.appendChild(no);
    ttrr.appendChild(word);

    var tby = document.getElementById('rowPlay');
    tby.appendChild(ttrr);
    //sowElement(butE);
}

function removeButton(){
    var buttonEle = document.getElementById("rowPlay");
    var chk = buttonEle.children.length;
    if(chk === 0){
        alert("There is no row left");
        return ;
    }
    var ran = Math.floor(Math.random()*chk);
    buttonEle.removeChild(buttonEle.children[ran]);
}

function sowElement(parent){
    var sowCount = document.getElementById('showChildText');
    var children = parent.children;
    var childrencnt = children.length;

    sowCount.innerHTML = childrencnt;
}