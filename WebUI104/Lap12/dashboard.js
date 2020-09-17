/* globals Chart:false, feather:false */

(function () {
    'use strict';
    feather.replace();
}());

var cnt = true;

function setActive(inputMenu){
    var activeMenu = document.querySelector('nav li a.active');
    activeMenu.classList.remove('active');
    inputMenu.classList.add('active');
    cnt = true;
    let act = document.querySelector('#submenu1 a.active');
    if(act != null){
        act.classList.remove('active');
    }
}

function setActiveSubList(input){   
    var act = document.querySelector('#submenu1 a.active');
    var act2 = document.querySelector('#submenu2 a.active');
    if(act2 != null){
        act2.classList.remove('active');
    }
    if(act == null){
        input.classList.add('active');
    }else{
        act.classList.remove('active');
        input.classList.add('active');
    }
    let studnetId = input.id;
    loadStudent2(studnetId);
    let a = document.querySelectorAll('#submenu1 a');
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
        if(a[i] == input){
            loadStudent2(i+1);
            break;
        }
    }
}

function setActiveSubList2(input){   
    var act = document.querySelector('#submenu2 a.active');
    var act2 = document.querySelector('#submenu1 a.active');
    if(act2 != null){
        act2.classList.remove('active');
    }
    if(act == null){
        input.classList.add('active');
    }else{
        act.classList.remove('active');
        input.classList.add('active');
    }
}

function hideAll(){
    document.getElementById('STUDENT').style.display = "none";
    document.getElementById('MOVIE').style.display = "none"; 
}

function showAllStudent(){
    hideAll();
    let stu_table = document.getElementById("stu_table");
    
    fetch('https://dv-student-backend-2019.appspot.com/students')
        .then((res)=>{
            return res.json();
        }).then((j)=>{
            for(let i=0;i<j.length;i++){
                let TR = document.createElement('tr');
                let thIndex = document.createElement('th');
                thIndex.scope = 'row';
                thIndex.innerHTML = (i+1);
                let tdStudentId = document.createElement('td');
                let tdStudentNameSur = document.createElement('td');
                let gpaData = document.createElement('td');
                let frame = document.createElement('td');
                let imgData = document.createElement('img');
                tdStudentId.innerHTML = j[i].studentId;
                tdStudentNameSur.innerHTML = j[i].name + " " + j[i].surname;
                gpaData.innerHTML = j[i].gpa;
                imgData.src = j[i].image;
                imgData.classList.add("profile-img");
                frame.appendChild(imgData);
                TR.appendChild(thIndex);
                TR.appendChild(tdStudentId);
                TR.appendChild(tdStudentNameSur);
                TR.appendChild(gpaData);
                TR.appendChild(frame);
                stu_table.appendChild(TR);
                TR.addEventListener('click',function(){
                    alert(JSON.stringify(j[i]));
                });
            }
        });
}

function showAllMovie(){
    hideAll();
    let mov_table = document.getElementById('mov_table');
    fetch('https://dv-excercise-backend.appspot.com/movies')
        .then((res)=>{
            return res.json();
        }).then((j)=>{
            for(let i=0;i<j.length;i++){
                
                //create the element
                let img = document.createElement('img');
                let movName = document.createElement('h3');
                let synopsis = document.createElement('p');

                //push the attribute inside
                img.src = j[i].imageUrl;
                movName.innerHTML = j[i].name;
                synopsis.innerHTML = j[i].synopsis;

                //create big colum-3
                let theater = document.createElement('div');
                theater.className = 'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 border';

                //create 3 row for contain in theater
                let moviePic = document.createElement('div');
                moviePic.classList.add('row');
                let movieName = document.createElement('div');
                movieName.classList.add('row');
                let moviesynopsis = document.createElement('div');
                moviesynopsis.classList.add('row');

                //create 3 small colum for each row
                let contPic = document.createElement('div');
                contPic.className ='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12';
                let contName = document.createElement('div');
                contName.className ='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12';
                let contSyn = document.createElement('div');
                contSyn.className ='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12';

                //put the element in small colum
                contPic.appendChild(img);
                contName.appendChild(movName);
                contSyn.appendChild(synopsis);

                //put the small colum to each row
                moviePic.appendChild(contPic);
                movieName.appendChild(contName);
                moviesynopsis.appendChild(contSyn);

                //put the row into the big colum
                theater.appendChild(moviePic);
                theater.appendChild(movName);
                theater.appendChild(moviesynopsis);

                //addeverything to table
                mov_table.appendChild(theater);
            }
        });
}

document.getElementById('stu_menu')
.addEventListener('click',function(){
    showAllStudent();
    document.getElementById('STUDENT').style.display = "block";
    document.getElementById('MOVIE').style.display = "none"; 
});

document.getElementById('mov_menu')
.addEventListener('click',function(){
    showAllMovie();
    document.getElementById('STUDENT').style.display = "none";
    document.getElementById('MOVIE').style.display = "block"; 
});