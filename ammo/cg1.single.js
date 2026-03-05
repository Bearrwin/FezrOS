/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var hold = ns.args[1]
	
	// a very simple script that uses the grow command on the target server.
	// the hold variable is there as a placeholder so that the bot that spawns
	// these scripts can use a different arugment each time, which acts as a counter 
	// for the wood chipper so you can have hundres of this script all heading to the
	// one hacking target from the same host server because each script has a different
	// number in the hold argument.

	if (hold > 0)
	await ns.grow(target);
}