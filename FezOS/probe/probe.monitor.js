/** @param {NS} ns */
import { digiClock } from "FezOS/func/func.js";

export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(370, 185);
	ns.disableLog('ALL');
	let server = ns.args[0];
	ns.ui.setTailTitle(server);

	while (true) {
		let money = ns.getServerMoneyAvailable(server);
		if (money === 0)
			money = 1;
		const maxMoney = ns.getServerMaxMoney(server);
		const minSec = ns.getServerMinSecurityLevel(server);
		const sec = ns.getServerSecurityLevel(server);
		let hackSkill = ns.getHackingLevel();
		let hackServ = ns.getServerRequiredHackingLevel(server);
		let rootAccess = ns.hasRootAccess(server);

		ns.clearLog(server);
		ns.print(` $_________: ${ns.formatNumber(money, 4)} / ${ns.formatNumber(maxMoney, 2)} `);
		ns.print(` Hack Skill: ${hackSkill} / ${hackServ} / +${(hackSkill - hackServ)}`);
		ns.print(` security__: ${(sec).toFixed(0)} / ${(minSec).toFixed(4)} / ${rootAccess}`);
		ns.print(` hack______: ${digiClock(ns.getHackTime(server))} (t=${Math.ceil(ns.hackAnalyzeThreads(server, money))})`);
		ns.print(` grow______: ${digiClock(ns.getGrowTime(server))} (t=${Math.ceil(ns.growthAnalyze(server, maxMoney / money))})`);
		ns.print(` weaken____: ${digiClock(ns.getWeakenTime(server))} (t=${Math.ceil((sec - minSec) * 20)})`);
		await ns.sleep(200);
	}
}

export function autocomplete(data, args) {
    return data.servers;
}