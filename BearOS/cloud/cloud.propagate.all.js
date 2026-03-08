/** @param {NS} ns */
import { hnetlist } from "BearOS/func/func.js";

export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	// set the following variable "servers" to = a list of your purchased servers
	let servers = ns.getPurchasedServers();
	let hnetServ = hnetlist(ns)

	// for every entry in the variable servers, run the below script which copies all scripts from home
	// to the target server.
	for (let serverName of servers) {

		ns.exec("BearOS/cloud/cloud.propagate.bought.js", "home", 1, serverName)
		await ns.sleep(100);
	};

	for (let serverName of hnetServ) {

		ns.exec("BearOS/cloud/cloud.propagate.bought.js", "home", 1, serverName)
		await ns.sleep(100);

	};

}