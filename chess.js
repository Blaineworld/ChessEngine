'use strict';

class Board {
	columns = 8;
	rows = 8;

	constructor(columns = 8, rows = 8) {
		this.columns = Number(columns);
		this.rows = Number(rows);
	}
}
