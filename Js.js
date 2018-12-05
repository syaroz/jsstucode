function myNonClosure(){
    var date = new Date();
    return "My Nonclosure " +date.getMilliseconds();
}


//class
function myClosure(){
    var date = new Date();
    return function(){
        return "My Closure " + date.getMilliseconds();
    }
}

//class
var myClosure2 = function(){
    var date = new Date();
    var myNestedFunction = function(){
        return "My Closure2 " + date.getMilliseconds();
    }

    return {
        foo: myNestedFunction
    }
}


var closure = myClosure();

var closure2 = new myClosure2();

setTimeout(function(){
    console.log(myNonClosure())
},500);

console.log(myNonClosure());
console.log(myNonClosure());

setTimeout(function(){
    console.log(closure())
},500);

console.log(closure());
console.log(closure());

setTimeout(function(){
    console.log(closure2.foo())
},500);

console.log(closure2.foo());
console.log(closure2.foo());