module.exports = function (options) {

	var board = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,1,1],
		[1,0,0,0,0,0,0,0,1,0],
		[0,0,0,0,0,0,0,2,3,0],
		[0,0,0,0,1,0,0,1,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,5,5,3,2,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,0,0,0,0,0,0],
	];

	board.height = board.length;
	board.width = board[0].length;

	return board;
}

