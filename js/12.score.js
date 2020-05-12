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

var i = 10;
i = i + 1;
i++;
i += 1;
console.log(i); 

var j = 10;
j += 5; // j = j + 5;

var html = '';
html += '<tr>'; 									// <tr>
html += '<td>' + j + '</td>'; 		// <tr><td>10</td>
html += '</tr>'; 									// <tr><td>10</td></tr>
console.log(html);




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
	var html = '';
	html += '<tr>';
	html += '	<td>1</td>';
	html += '	<td>'+$("#name").val()+'</td>';
	html += '	<td>'+$("#kor").val()+'</td>';
	html += '	<td>'+$("#eng").val()+'</td>';
	html += '	<td>'+$("#math").val()+'</td>';
	html += '	<td>240</td>';
	html += '	<td>80</td>';
	html += '</tr>';
	$(".score-tb > tbody").append(html);
});