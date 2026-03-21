/** @param {NS} ns */
import { npcList } from "FezOS/func/func.js";

export async function main(ns) {
	ns.disableLog("sleep");
	ns.ui.openTail();
	ns.ui.moveTail(50, 50);
	ns.ui.resizeTail(500, 150)

	let servers = npcList(ns).filter(s => !ns.hasRootAccess(s));

	for (let server of servers) {

		try {
			ns.brutessh(server);
			ns.ftpcrack(server);
			ns.relaysmtp(server);
			ns.httpworm(server);
			ns.sqlinject(server);
		} catch {}
		await ns.sleep(50);
		try {
			ns.nuke(server);
		} catch {}
		await ns.sleep(50);
	}
}