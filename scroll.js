

document.onreadystatechange = function(){

	console.log('testing')
	document.getElementsByClassName('main')[0].onmousewheel = function(event) {
		console.log('testing of the element');
	}
}	

var size = 1000000;
var arr1 = Array(size).map(() => { return 7});
var arr2 = Array(size).map(() => { return "7"});
var count = 1;

function test0(int) {
	return arr1.push(8)
}

function test1(int){
	return arr1[arr1.length] = 8
}

function test2(int){
	return arr2.push({p:90});
}

function driver() {

	var size = 1000000;
	var arr1 = Array(size).map(() => { return 7});
	var arr2 = Array(size).map(() => { return "7"});
	var count = 1;

	console.time("t0");
	test0("111.111")
	console.timeEnd("t0");

	console.time("t");
	arr1[arr1.length] = 8
	console.timeEnd("t");

	console.time("t1");
	arr2.push({p:90});
	console.timeEnd("t1");

}

driver()

