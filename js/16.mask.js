/* 사전지식 */
// API(Application Provider Interface) 통신


var url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=37.497986&lng=127.027533&m=1000";

$(".btMask").click(function(){
	$.get(url, function(res){
		for(var i=0; i<res.stores.length; i++) {
			insertData(res.stores[i], i+1);
		}
	});
});

function insertData(data, idx) {
	var html = '';
	html += '<tr>';
	html += '<td class="idx">'+idx+'</td>';
	html += '<td class="store">'+data.name+'</td>';
	html += '<td class="info">'+data.remain_stat+'</td>';
	html += '<td class="addr">'+data.addr+'</td>';
	html += '<td class="bts">';
	html += '<button class="map">지도보기</button>';
	html += '</td>';
	html += '</tr>';
	$(".list-tb > tbody").append(html);
}

