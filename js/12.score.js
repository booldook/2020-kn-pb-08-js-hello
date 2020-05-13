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
		kor: Number($("#kor").val()),
		eng: Number($("#eng").val()),
		math: Number($("#math").val()),
	});	//배열의 맨 뒤에 내용을 추가
	$("#btReset").trigger("click"); // 이벤트 실행
	$(".score-tb > tbody").empty();
	for(var i=0; i<std.length; i++) {
		dataInsert(std[i], "P", i+1);
	}
});

function dataInsert(data, position, index) {
	var html = '';
	html += '<tr>';
	html += '	<td>'+index+'</td>';
	html += '	<td>'+data.name+'</td>';
	html += '	<td>'+data.kor+'</td>';
	html += '	<td>'+data.eng+'</td>';
	html += '	<td>'+data.math+'</td>';
	html += '	<td>'+total(data)+'</td>';
	html += '	<td>'+avg(data)+'</td>';
	html += '</tr>';
	if(position == "A") {
		$(".score-tb > tbody").append(html);
	}
	else {
		$(".score-tb > tbody").prepend(html);
	}
}

function total(data) {
	return data.kor + data.eng + data.math;
}

function avg(data) {
	return ((data.kor + data.eng + data.math)/3).toFixed(2);
}