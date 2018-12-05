
/* Recursion */

function fact(n){
    if(n === 0){
        return 1
    } else{
        return n * fact(n-1)
    }

}

function newCounter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
    
}


const nc = newCounter();
console.log(nc())
console.log(nc())
console.log(nc())

/* Higher Order Function example run once */


const once = fn => {
    let done = false;
    return (...args) => {
    if (!done) {
    done = true;
    fn(...args);
    }}
    ;
    };

const squeak = a => console.log(a, " squeak!!!");

squeak('original');
squeak('original');

const squeakOnce = once(squeak);

squeakOnce("only one");
squeakOnce("only oqne");
squeakOnce("only oqgfne");
