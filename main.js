$(document).ready(function(){
    var h=document.documentElement.clientHeight;
    $(".allpage").height(h);
    //头像旋转
var img = $("#logo img");
var deg = 0;
var mask=$(".mask");
var side=$(".sidebar");
var span=$(".more span");
var spant=0;
function show(){
	mask.stop().fadeIn(1000);
	side.stop().animate({"left":"0"}, 1000)
}
function hide(){
	mask.stop().fadeOut(1000);
	side.stop().animate({"left":-side.width()}, 1000)
}
mask.on("click",hide);
function rotate() 
{
    img.css({
        '-ms-transform': 'rotate(' + deg + 'deg)', /* IE 9 */
        '-moz-transform': 'rotate(' + deg + 'deg)', /* Firefox */
        '-webkit-transform': 'rotate(' + deg + 'deg)', /* Safari and Chrome */
        '-o-transform': 'rotate(' + deg + 'deg)', /* Opera */
        'transform': 'rotate(' + deg + 'deg)'
            });
    deg+=1;
    if (deg >= 360) {
        deg = 0;
    }
    return deg;
}
function move(){
    span.css({
        "top":spant
            });
    spant++;
    if (spant>=20) {spant=0};
}
var t=setInterval(rotate, 10);
    t1=setInterval(move, 50);
$("#logo img").hover(function() {
    	clearInterval(t);
    	show();

    },function() {
    	t=setInterval(rotate, 10);
    });
});