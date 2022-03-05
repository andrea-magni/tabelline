function renderTabelline(inizia_da, finisci_a) {
	let tabelline = [];

	for (let x = inizia_da; x<= finisci_a; x++) {
		for (let y = 0; y<=10; y++) {
			tabelline.push(
				{ val1: x, val2: y}
			);
		}
	}

	tabelline = tabelline.sort( () => Math.random() - 0.5);

	$('#tabelline').empty();

	tabelline.map((e) => {
		$('#tabelline').append(`			
			<div class="card tabellina d-print-inline-block">
				<div class="card-body">
					${e.val1} x ${e.val2} = .......
				</div>
			</div>
		`);
	});
}


$(document).ready(function(){

	$('#produci').click(
		function(){
			renderTabelline(parseInt($('#inizia_da').val()), parseInt($('#finisci_a').val()))		
		}
	);

	$('#stampa').click(
		function(){
			window.print();
		}
	);

	

});