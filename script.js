
// let myname = 'nivi'

// function helow(name) {
   
//     console.log(name)
// }

// helow(myname);


// Looping conept

// WHILE LOOP (oru condition true ah irukkira varaikkum varum)
// let mynum = 1;

// while(mynum <= 10){
//  console.log('my number is ' + mynum)
//  mynum++;
// }

// FOR LOOP const and increement and condition ellaththajum one line la call panrathu thaan for loop

// for(mynum = 1; mynum <= 10; mynum++){
//     console.log('my number is ' + mynum)
// }


//DO-WHILE LOOP (if check one Time if true)

// do{
//     console.log('my number is  ' + mynum);
//     mynum++;
// }while(mynum <=10) ;

// REAL EXAMPLE ****
// for you don't know when is starting or endig point
// let num = 123456;

// while(num > 0){
//     console.log(num%10);
//    num = parseInt(num/10);
// }


// oru office la 200 empolyees irukkanka avankalukku same time leave message anumppanum endaal 

// let leav = 2000;

// while(leav >= 0){
//     console.log('today is leav '+ leav)
//     leav--;
// }


// for loop using BRAKE ( oru condition ah full ah breake panrathu)

// for(let i = 0; i < 5; i++){

//     if(i == 3){
//         break;
//     }
//     console.log(i)
// }


// for loop using CONTINUE ( oru condition ah full ah breake panrathu) -- oru loop kkulla oru if condition eluthum pothu hearlybrase poda theavajillai

// for(let i = 0; i < 5; i++){
//     if (i == 3) {
//         continue;
//     }
//     console.log(i)
// }


// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 10; j++){
//         if (j == 5)  break;  
//             console.log(i , j);
        
           
//     }
   
// }

// ithu full loop ahjum break pannum same as like continue

//   loop:for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 10; j++){
//         if (j == 5)  break loop;  
//             console.log(i , j);
        
           
//     }
   
// }

let loop;
let fps = 60;
let cnv, ctx;
let ball = {
    xpos:0,
    zpos:0,
    xvel:5,
    yvel:5,
    size:30,
    color:'white',
    init: function(cnv) {
 this.xpos = (cnv.width - this.size) / 2;
 this.ypos = (cnv.height - this.size) / 2;
    },
    draw:function(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI*2, true);
        ctx.fill();
    },
    PaymentRequestUpdateEvent: function(cnv) {
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollision(cnv);
    },
    checkForCollision: function(cnv) {
        if(this.xpos + this.size / 2 > cnv.width || this.xpos - this.size / 2 <0) {
            this.xvel = -this.xvel;
        }
        if(this.ypos + this.size /2 > cnv.height || this.ypos - this.size / 2 < 0) {
            this.yvel = -this.yvel
        }
    }
}

window.onload = function() {
    prepareCanvas();
    ball.init(cnv);
    loop = setInterval(()=> {
        PaymentRequestUpdateEvent()
        WebGL2RenderingContext()
    }
    ,1000/fps);
}

function fillCanvas(){
    ctx.fillStyle = '#E7BCDE';
    ctx.fillRect(0,0 ,cnv.width,cnv.height);
}

function prepareCanvas(){
    cnv = document.getElementById('cnv');
    ctx = cnv.getContext('2d');
    document.body.style.padding = 0
    document.body.style.margin = 0
    document.body.style.backgroundColor = ''
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    
}

function PaymentRequestUpdateEvent() {
    ball.PaymentRequestUpdateEvent(cnv)
    
}

function WebGL2RenderingContext(){
    fillCanvas();
    ball.draw(ctx);
}


