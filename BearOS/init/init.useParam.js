/** @param {NS} ns */
import { cloudMaxSize } from "BearOS/func/func.js";

export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	//Here we are going to establish use parameters for various aspects of the game
	
		// Here we work out the maximum allowed server quantiy based on the BN Mult * 25 rounded up
		
		let _10010201 = Math.ceil(ns.read("BearOS/savedVar/10010540.txt") * 25);
		let _10010202 = cloudMaxSize(ns, ns.read("BearOS/savedVar/10010541.txt"));
		
	
		ns.write("BearOS/savedVar/10010201.txt", _10010201, "w");
		ns.write("BearOS/savedVar/10010202.txt", _10010202, "w");
	
	








}