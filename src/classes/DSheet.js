'use strict';

class DSheet
{
	constructor(options)
	{
		this.options={};
		this.defaults={
			header_row:1,
			column_names:null,
			source_url:null,
			id_column:'A'
		}			
	}
	open(options)
	{
		Object.assign(this.options, this.defaults, options);
	}
	
}

export default DSheet;