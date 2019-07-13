"use strict"

function minusplus (x,y) {
    if (x<0 && y<0)
    {
        x *= -1;
        y*= -1;

        let a = String(x);
        let b = String(y);
     
        let result = a + " " + b;
        return result;
} else if (x<0 && y>0|| x>0 && y<0)
{
    x*= 0.5;
    y*= 0.5;

    let a = String(x);
    let b = String(y);

    let result = a + " " + b;
    return result;
} else if (x<=0.5 && x>=2.0 || y<=0.5 && y>=2.0) {
if (x>0 && y>0)  {
    x/= 10;
    y/= 10;

    let a = String(x);
    let b = String(y);

    let result = a + " " + b;
    return result;
}
}
}

console.log(minusplus(5,-6));
console.log(minusplus(-8,-10));
console.log(minusplus(11,10));