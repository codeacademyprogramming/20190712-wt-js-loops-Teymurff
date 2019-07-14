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
} else if (x<0 && y>0 || x>0 && y<0)
{
    x*= 0.5;
    y*= 0.5;

    let a = String(x);
    let b = String(y);

    let result = a + " " + b;
    return result;
} else if (x!=-x && y!=-y) {
    x/= 10;
    y/= 10;

    let a = String(x);
    let b = String(y);

    let result = a + " " + b;
    return result;

} else {
console.log("Don't change anything");
}
}

console.log(minusplus(-5,-6));
console.log(minusplus(2,-3));
console.log(minusplus(5,7));
console.log(minusplus(0,1));
