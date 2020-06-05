var lotto = [];
for(var i=0; i<45; i++) lotto.push(i+1);

function onNumbers() {
	/*
	var getLotto = [];
	for(var i=0; i<1000; i++) {
		var idx = Math.floor(Math.random() * 45);
		if(getLotto.indexOf(lotto[idx]) == -1) {
			getLotto.push(lotto[idx]);
			if(getLotto.length == 6) break;
		}
	}
	var getLotto = lotto
	.sort(function(a, b) {
		return 0.5 - Math.random()
	})
	.slice(0, 6)
	.sort(function(a, b) {
		return a - b
	});
	*/
	var html = lottoMaker(	_.sortBy(_.sample(lotto, 6))	);
	$(".lotto-wrap").prepend(html);
}

$(".bt-lotto").click(onNumbers);


function lottoMaker(arr) {
	var html = '<li class="lotto">';
	for(var i=0; i<6; i++) {
		if(arr[i] <= 10) html += '<span class="yellow">'+arr[i]+'</span>';
		else if(arr[i] <= 20) html += '<span class="blue">'+arr[i]+'</span>';
		else if(arr[i] <= 30) html += '<span class="red">'+arr[i]+'</span>';
		else if(arr[i] <= 40) html += '<span class="gray">'+arr[i]+'</span>';
		else html += '<span class="green">'+arr[i]+'</span>';
	}
	html += '</li>';
	return html;
}