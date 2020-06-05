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
	var getLotto = _.sortBy(_.sample(lotto, 6));
	
}

$(".bt-lotto").click(onNumbers);











function lottoMaker(arr) {
var html = '';
	/* <li class="lotto">
	<span class="yellow">1</span>
	<span class="blue">13</span>
	<span class="red">26</span>
	<span class="gray">33</span>
	<span class="green">42</span>
	<span class="green">44</span>
	</li> */
}