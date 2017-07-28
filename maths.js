
var functions=[add,subtract,multiply,modulus ];

function add(x,y){
    console.log(x+" + "+y+" = "+(x+y));
};

function subtract(x,y){
    console.log(x+" - "+y+" = "+(x-y));

};

function multiply(x,y){
    console.log(x+" X "+y+ " = "+(x*y));

};

function modulus(x,y){
    console.log(x+" % "+y+ " = "+(x%y));

};

function execute(arrayOrFun,x,y){

    if (arrayOrFun.typeof==="function"){
        arrayOrFun(x,y);  
    } else if arrayOrFun.typeof==="array" {

        arrayOrFun.forEach(function(fun){
        fun(x,y);
        })
    }

};

// function executeOne(fun,x,y){
//         fun(x,y);
// };



execute(functions,1,2);

execute("all",1,2);
