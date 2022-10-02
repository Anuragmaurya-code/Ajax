console.log("this is ajax");
let SubClick = document.getElementById("SubBtn");
SubClick.addEventListener('click',Onbuttonclick());
function Onbuttonclick(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","anurag.txt",true);
    let txt=""
    xhr.onload=function(){
        let txt=this.responseText;
        txt=txt+"Added new in js file hope u like it "
        document.getElementById("note").innerHTML=txt;

    }
    xhr.send();

}
