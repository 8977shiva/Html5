 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');

 /* -------------------------------------------------------------------------- */
 /*                           creating a rectangle                          */
 /* -------------------------------------------------------------------------- */

 // method for rect
 //1. fillRect()
 // fillRect( x, y , width , height)
 // ctx.fillRect( 20,20, 150, 100);
 // ctx.fillStyle='red'; // we can set the color
 // ctx.fillRect(200, 20 , 150, 100);

 // // strokeRect()
 // //gives an outline  of the reactangle
 // ctx.lineWidth=5;
 // ctx.strokeStyle='red';
 // ctx.strokeRect(100, 200, 150, 100);

 // // clearRect
 // ctx.clearRect(30, 25, 140, 90)





 /* -------------------------------------------------------------------------- */
 /*                                    text                                    */
 /* -------------------------------------------------------------------------- */
 // // fillText("text", x , y)
 // ctx.font="30px Arial";
 // ctx.fillStyle='purple';
 // ctx.fillText('Hello World', 400, 50);

 // //stokeText()
 // ctx.lineWidth=1;
 // ctx.strokeStyle='orange';
 // ctx.strokeText('hello world', 400 ,100);


 /* -------------------------------------------------------------------------- */
 /*                                    Paths                                   */
 /* -------------------------------------------------------------------------- */
//triangle
//  ctx.beginPath();
//  ctx.moveTo(50, 50);
//  ctx.lineTo(150, 50);
//  ctx.lineTo(100, 200);
//  ctx.lineTo(50, 50);
//  //  ctx.closePath()
//  ctx.fill();


//  ctx.beginPath();
//  ctx.moveTo(200, 50);
//  ctx.lineTo(150, 200);
//  ctx.lineTo(250, 200);
//  ctx.closePath()
//   ctx.stroke();

//   //rectangele
//   ctx.beginPath();
//   ctx.rect(300, 50, 150, 100);
//   ctx.fill()

  //Arc (circle)
  //arc(x, y, radius, startangle , endangle)
//   ctx.beginPath();
//   ctx.arc(100, 100, 50, 0, Math.PI*2)
// //   ctx.fill();
// ctx.stroke();


