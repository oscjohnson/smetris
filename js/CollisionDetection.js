function CollisionDetection(createOptions){
	var board = createOptions.board;
	return {
		canGoLeft: canGoLeft,
		canGoRight: canGoRight,
		canGoDown: canGoDown,
		canRotate: canRotate
	};

	function canGoLeft() {
		for (var row = 0; row < piece.shape.length; row++) {
			for (var col = 0; col < piece.shape[row].length; col++) {
				var x = piece.x + col - 1;
				var y = piece.y + row;
				var isInside = x * piece.shape[row][col] < board.width;
				var hitRestingPieces = ( (board[y][x] !== 0) && (piece.shape[row][col] == 1) );
				if(hitRestingPieces || !isInside) return false;
			};
		};
		return true;
	}


	function canGoRight() {
		for (var row = 0; row < piece.shape.length; row++) {
			for (var col = 0; col < piece.shape[row].length; col++) {
				var x = piece.x + col + 1;
				var y = piece.y + row;
				var isInside = x * piece.shape[row][col] < board.width;
				var hitRestingPieces = ( (board[y][x] !== 0) && (piece.shape[row][col] == 1) );
				if(hitRestingPieces || !isInside) return false;
			};
		};
		return true;
	}

	function canGoDown() {
		for (var row = 0; row < piece.shape.length; row++) {
			for (var col = 0; col < piece.shape[row].length; col++) {
				var x = (piece.x + col);
				var y = (piece.y + 1 + row);

				var hit = ( (board[y][x] !== 0) && (piece.shape[row][col] == 1) );
				if(hit) {
					return false;
				}
			};
		};
		return true;
	}

	function canRotate() {
		var copy = new Piece(piece);
		copy.rotate();
		var shape = copy.shape;

		for (var row = 0; row < shape.length; row++) {
			for (var col = 0; col < shape[row].length; col++) {
				var x = (copy.x + col);
				var y = (copy.y + row);
				var hit = ( (board[y][x] !== 0) && (shape[row][col] !== 0) );
				if(hit) {
					return false;
				}
			};
		};	
		return true;	
	}
	
}