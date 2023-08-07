//var name= prompt("enter your name");
//alert("welcome "+name);
var sn = document.getElementById("suf");
var ln = document.getElementById("lif");
var ws = document.getElementById("workspace");
var pdb = document.getElementById("privat");
var p1 = document.getElementById("p1");
var op = document.getElementById("options");

pdb.addEventListener('click' ,function (){
    //ws.appendChild(sn);
    ws.appendChild(op);
    p1.style.display="none";
    op.style.display="block";
    //ln.style.display="block";
} );

