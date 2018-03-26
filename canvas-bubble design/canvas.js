var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
/* 
console.log(window.innerHeight);
console.log(innerWidth);


// Rectangle
c.fillStyle="rgba(10,100,200,1)";
c.fillRect(50,50,50,50);

//Line
c.moveTo(50,300);
c.lineTo(190,200);
c.strokeStyle="rgba(200,200,0,1)";
c.stroke();

//Arc/Circle
for(var i=0;i<10;i++){
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	var radius=Math.random()*100;
	c.beginPath();
	c.arc(x,y,radius,0,Math.PI*2,false);
	c.strokeStyle="rgba(20,100,150,0.6)";
	c.stroke();
	}
*/
var mouse={
	x:undefined,
	y:undefined,
};
var maxRadius=50;
window.addEventListener("mousemove",function(event){mouse.x=event.x;mouse.y=event.y;console.log(event);});
window.addEventListener("resize",function(){canvas.width=innerWidth;canvas.height=innerHeight;init();})
var colorArray=["rgba(10,250,20,1)","rgba(5,200,200,1)","rgba(0,70,190,1)"];
function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw=function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.fillStyle=this.color;
		c.fill();
		}
	this.update=function(){
		this.draw();
		if(this.x+this.radius>window.innerWidth||this.x-this.radius<0){
			this.dx=-this.dx;
			}
		if(this.y+this.radius>window.innerHeight||this.y-this.radius<0){
			this.dy=-this.dy;
			}
		this.x+=this.dx;
		this.y+=this.dy;
		if(mouse.x-this.x<50&&mouse.x-this.x>-50&&mouse.y-this.y<50&&mouse.y-this.y>-50&&this.radius<maxRadius){
			
			this.radius+=1;
		
		
		}else if(this.radius>this.minRadius){
			this.radius-=1;	
		}
	}
}
var circleArray=[];
function init(){
	circleArray=[];
for (var i = 0; i <800; i++) {
	var radius=(Math.random()*5)+2;
	var x=Math.random()*(window.innerWidth-radius*2)+radius;
	var y=Math.random()*(window.innerHeight-radius*2)+radius;
	var dx=(Math.random()-0.5);
	var dy=(Math.random()-0.5);
	circleArray.push(new Circle(x,y,dx,dy,radius));
	}
}

function animate(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	requestAnimationFrame(animate);
}
init();
animate();
/*
	var radius=(Math.random()*60)+40;
	var x=Math.random()*(window.innerWidth-radius*2)+radius;
	var y=Math.random()*(window.innerHeight-radius*2)+radius;
	var dx=(Math.random()*0.5)*8;
	var dy=(Math.random()*0.5)*8;
function animate(){
		c.clearRect(0,0,window.innerWidth,window.innerHeight);
		c.beginPath();
		c.arc(x,y,radius,0,Math.PI*2,false);
		c.strokeStyle="rgba(20,100,150,0.6)";
		c.stroke();
		if(x+radius>window.innerWidth||x-radius<0){
			dx=-dx;
		}
		if(y+radius>window.innerHeight||y-radius<0){
			dy=-dy;
		}
		x+=dx;
		y+=dy;
		requestAnimationFrame(animate);
	}
animate();
*/