function addNewWEfield(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQfield(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

//generateCV
function generateCV(){
    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField;

    let contactfield=document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML=contactfield;

    let addressfield=document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML=addressfield;

    let fbfield=document.getElementById('fbField').value;
    document.getElementById('fbT').innerHTML=fbfield;

    let instafield=document.getElementById('instaField').value;
    document.getElementById('instaT').innerHTML=instafield;

    let linkedfield=document.getElementById('linkedField').value;
    document.getElementById('linkedT').innerHTML=linkedfield;

    //objective

    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //workExperience

    let wes=document.getElementsByClassName('weField');

    let str='';

    for(let e of wes)
    {
        str=str+ `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //academicField

    let aqs=document.getElementsByClassName('aqField');

    let str1='';

    for(let e of wes)
    {
        str1=str1+ `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //code for getting image
    let file=document.getElementById('imgField').files[0];

    let reader= new FileReader()

    reader.readAsDataURL(file);

    //set the image to template
    reader.onloadend = function(){
    document.getElementById('imgTemplate').src=reader.result;
    };
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

//print cv
function printCV(){
    window.print();
}
