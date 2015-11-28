var pieceColors = {
	'I': '#27DEFF', //ljusblå
	'J': '#3C66FF', //blå
	'L': '#E8740C', //orange
	'O': '#FFD70D', //gul
	'S': '#26FF00', //grön
	'T': '#9E0CE8', //lila
	'Z': '#FF0000'  //röd
}

module.exports = {
	board: {
		stroke: false,
		background: 'pink',
		checkered: true,
		checked: {
			color1: '#fff',
			color2: '#eee'
		},
		stroke: false,
		strokeThickness: 0.3
	},
	piece: {
		strokeThickness: 3.5,
		stroke: true,
		colors: pieceColors,
		movingPiece: true //dummy no config property
	},
	ghostPiece: { 
		background: 'rgba(100, 100, 100, 0.6)', 
		stroke: false
	}
}