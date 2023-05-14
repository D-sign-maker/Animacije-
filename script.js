const canvas=document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const particlesArray=[];

window.addEventListener('resize',function(){
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

});

const mouse={
	x: null,
	y: null,
}

canvas.addEventListener('click',function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	//drawCircle(); ne treba jer ima u funkciji animate

});
canvas.addEventListener('mousemove',function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	//drawCircle(); ne treba jer ima u funkciji animate
})


/*function drawCircle(){

ctx.fillStyle='red';
ctx.strokeStyle='blue';
ctx.beginPath();
ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
ctx.fill();
ctx.stroke();

}*/

class Particle{
	constructor(){
		//this.x=mouse.x;
		//this.y=mouse.y;
		this.x=500;
		this.y=500;
		this.size=Math.random()*5+1;
		this.speedX=Math.random()*3-1.5;
		this.speedY=Math.random()*3-1.5;
	}
	update(){
		this.x+=this.speedX;
		this.y+=this.speedY;

	}
	draw(){
		ctx.fillStyle='red';
		ctx.strokeStyle='blue';
		ctx.beginPath();
		ctx.arc(this.x,this.y,50,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();

	}

}
function init(){
	for(let i=0;i<100;i++){
		particlesArray.push(new Particle());
	}
}
init();

function handleParticles(){
	for(let i=0; i< particlesArray.length;i++){
			particlesArray[i].update();
			particlesArray[i].draw();
	}
}

function animate(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	handleParticles();
	//drawCircle();
	requestAnimationFrame(animate);

};
animate();