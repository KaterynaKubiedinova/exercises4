const myArr = [2, 4, 3, 1];
const myExp = 2;
let newArr = [];

function exponentiate(arr, exp){
	for(let numder of arr){
		newArr.push(numder **= exp);
	}
	return newArr;
}

console.log(exponentiate(myArr, myExp));