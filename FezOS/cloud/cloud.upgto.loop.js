/** @param {NS} ns */
import { cloudQty, upgCount, nextUpg, smallest } from "FezOS/func/func.js";

export async function main(ns) {

	/*
	128
256
512
1024
2048
4096
8192
16384
32768
65536
131072
262144
524288
1048576
*/

	ns.ui.openTail();
	ns.ui.resizeTail(900, 220);
	ns.ui.moveTail(455, 50);
	ns.disableLog('ALL');
	
	let maxRam = ns.args[0];
	let upgQty = upgCount(ns, maxRam);
	let smallestServ = smallest(ns);
	let serverRam = ns.getServerMaxRam(smallestServ);
	let nextUp = nextUpg(ns, smallestServ, maxRam);
	let upgCost = ns.getPurchasedServerCost(nextUp) - ns.getPurchasedServerCost(serverRam);
	let availMoney = ns.getServerMoneyAvailable("home");

	await ns.sleep(100);

	while (upgQty > 0) {

		ns.print(` We still need to upgrade ${(upgQty).toFixed(0)} servers`);

		smallestServ = smallest(ns);
		serverRam = ns.getServerMaxRam(smallestServ);
		nextUp = nextUpg(ns, smallestServ, maxRam);
		if (nextUp > 0) {
			upgCost = ns.getPurchasedServerCost(nextUp) - ns.getPurchasedServerCost(serverRam);
			availMoney = ns.getServerMoneyAvailable("home");
			ns.print(`Next Upgrade is ${smallestServ} from ${ns.formatRam(serverRam, 0)} to ${ns.formatRam(nextUp, 0)}, it will cost ${ns.formatNumber(upgCost, 2)}`);
			while (availMoney < upgCost) {
				availMoney = ns.getServerMoneyAvailable("home");

				ns.print(`Saving my pennies for the next upgrade, we have ${ns.formatNumber(availMoney, 2)} / ${ns.formatNumber(upgCost, 2)}`);
				await ns.sleep(10000);
			}
			if (availMoney > upgCost) {
				ns.upgradePurchasedServer(smallestServ, nextUp);
				ns.print(`Upgraded ${smallestServ} from ${ns.formatRam(serverRam, 0)} to ${ns.formatRam(nextUp, 0)}, it cost ${ns.formatNumber(upgCost, 2)}`);
				await ns.sleep(10);
				upgQty = upgCount(ns, maxRam);
			}
			await ns.sleep(20);
		}
	}
	ns.print(`We ae done, I am outta here!`)
}
