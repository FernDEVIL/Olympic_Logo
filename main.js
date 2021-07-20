canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = 2;
ctx.rect(175, 195, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(290, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(383, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(476, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(337, 315, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(430, 315, 40, 0, 2 * Math.PI);
ctx.stroke();