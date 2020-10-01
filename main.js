canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="#008ad0";
ctx.lineWidth=5;
ctx.arc(280,150,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(410,150,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#e60120";
ctx.lineWidth=5;
ctx.arc(540,150,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#f6c30c";
ctx.lineWidth=5;
ctx.arc(345,205,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#009732";
ctx.lineWidth=5;
ctx.arc(475,205,50,0,2*Math.PI);
ctx.stroke();


