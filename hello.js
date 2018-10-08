// let은 블록스코프이고 선언전에 안써진다는 걸 보여주는 예시
// let lValue = 2;
// console.log(`lValue = ${lValue}`);
// if (lValue ==2 ){
//     let lValue = 2001;
//     console.log(`block scoped lValue : ${lValue}`);
// }
// console.log(`lValue = ${lValue}`)
// return type을 정하면 그렇게 리턴해야 하는거. 그래서 여기선 toString걸어줌
// function addNumbers(a: number, b: number): string {
//     return (a + b).toString();
// }
// var addResult = addNumbers(2,3);
// console.log(`addNumber returned : ${addResult}`);
// anonymous function javaScript버젼 
// var addVar = function(a,b){
//     return a+b;
// }
// var addVarResult = addVar(2,3);
// console.log("addVarResult: "+ addVarResult);
// anonymous function typescript 버젼
// var addFunction = function(a: number, b: number): number {
//     return a + b;
// }
// var addFunctionResult = addFunction(2,3);
// console.log(`addFunctionResult : ${addFunctionResult}`);
// optional parameters
// var concatStrings = function(a: string,b?: string,c?: string){
//     return a+b+c;
// }
// var concat3strings = concatStrings("a","b","c");
// console.log(`concat3strings: ${concat3strings}`);
// var concat2strings = concatStrings("a","b");
// console.log(`concat2strings: ${concat2strings}`);
// var concat1string = concatStrings("a");
// var concatAb = concatStrings("a","b");
// default parameter 주는 법
// function concatStringsDefault(
//     a: string,
//     b: string,
//     c: string = "c"){
//         return a + b + c;
//     }
// var defaultConcat = concatStringsDefault("a","b");
// console.log(`defaultConcat : ${defaultConcat}`);
// Rest parameter 
function testArguments() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray[" + i + "] = " + argArray[i]);
            console.log("arguments[" + i + "] = " + arguments[i]);
        }
    }
}
testArguments(9);
testArguments(1, 2, 3);
