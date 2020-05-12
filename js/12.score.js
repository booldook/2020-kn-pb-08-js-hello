/* 본 프로그램을 위한 사전 지식 */
var arr = [];
arr[0] = 10;
arr[1] = {
	name: "홍길동",
	kor: 90,
	eng: 80,
	math: 70,
}
console.log(arr);

var name = '홍길동';
var hello = '안녕하세요 저는 "' + name + '" 입니다.';
console.log(hello);



/* 변수선언 */
var std = [];


/* btSave를 클릭시 */
$("#btSave").click(function(){
	std.push({
		name: $("#name").val(),
		kor: $("#kor").val(),
		eng: $("#eng").val(),
		math: $("#math").val(),
	});
	var html = '<tr><td>1</td><td>홍길동</td><td>89</td><td>80</td><td>70</td></tr>';
	$(".score-tb > tbody").append(html);
});