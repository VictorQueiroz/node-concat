'use strict';

function concat () {
	var args = Array.prototype.slice.apply(arguments);
	var delimiter = (args[args.length] || ', ');

	args = args.map(function (arg) {
		if(typeof arg === 'object') {
			arg = JSON.stringify(arg);
		}

		return arg;
	});

	return args.splice(0, arguments.length - 1).join(delimiter);
}

module.exports = concat;