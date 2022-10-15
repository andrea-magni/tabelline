function renderTabelline(inizia_da, finisci_a) {
	let tabelline = [];

	for (let x = inizia_da; x<= finisci_a; x++) {
		for (let y = 0; y<=10; y++) {
			tabelline.push(
				{ val1: x, val2: y, res: x*y}
			);
		}
	}

	tabelline = tabelline.sort( () => Math.random() - 0.5);

	$('#tabelline').empty();

	tabelline.map((e) => {
		$('#tabelline').append(`			
			<div class="card tabellina d-print-inline-block">
				<div class="card-body">
					${e.val1} x ${e.val2} = ....
				</div>
			</div>
		`);
	});
}


function renderDivisioni(inizia_da, finisci_a) {
	let tabelline = [];

	for (let x = inizia_da; x<= finisci_a; x++) {
		for (let y = 0; y<=10; y++) {
			tabelline.push(
				{ val1: x, val2: y, res: x*y}
			);
		}
	}

	tabelline = tabelline.sort( () => Math.random() - 0.5);

	$('#tabelline').empty();

	tabelline.map((e) => {
		$('#tabelline').append(`			
			<div class="card tabellina d-print-inline-block">
				<div class="card-body">
					${e.res} : ${e.val1} = ....
				</div>
			</div>
		`);
	});
}

$(document).ready(function(){

	$('#produci_tabelline').click(
		function(){
			renderTabelline(parseInt($('#inizia_da').val()), parseInt($('#finisci_a').val()))		
		}
	);

	$('#produci_divisioni').click(
		function(){
			renderDivisioni(parseInt($('#inizia_da').val()), parseInt($('#finisci_a').val()))		
		}
	);


	$('#stampa').click(
		function(){
			window.print();
		}
	);

	$('#go_tabelline').click(
		function(){
			window.location = './tabelline.html';
		}
	);

	$('#go_divisioni').click(
		function(){
			window.location = './divisioni.html';
		}
	);
	

});