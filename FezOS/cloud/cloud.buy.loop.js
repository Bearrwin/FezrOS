/** @param {NS} ns */
import { cloudQty } from "FezOS/func/func.js";
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('sleep');
	ns.disableLog('getServerMoneyAvailable');

	let serverName = ns.args[0];
	let ram = ns.args[1];
	let servCount = cloudQty(ns);
	let desiredQty = ns.args[2] + servCount;
	let cycleDelay = ns.args[3];
	const serverCost = ns.getPurchasedServerCost(ram);
	let availMoney = ns.getServerMoneyAvailable("home");

	ns.print("You currently have " + servCount + " / " + desiredQty + " servers");

	while (servCount < desiredQty) {
		servCount = cloudQty(ns);
		ns.print(`Next purchase is a ${ns.formatRam(ram, 0)} Gb server, it will cost ${ns.formatNumber(serverCost, 2)}`);

		while (availMoney < serverCost) {
			availMoney = ns.getServerMoneyAvailable("home");
			ns.print(`Saving my pennies for the next server, we have ${ns.formatNumber(availMoney, 2)} / ${ns.formatNumber(serverCost, 2)}`);
			await ns.sleep(10000);
		}

		if (ns.getServerMoneyAvailable("home") > serverCost) {
			ns.purchaseServer(serverName, (ram));
			ns.print("We have enough money, I am buying a " + ram + " Gb server");
			await ns.sleep(500);
			ns.run("FezOS/cloud/cloud.propagate.all.js");
		}
		availMoney = ns.getServerMoneyAvailable("home")
			servCount = cloudQty(ns);
		ns.print("You currently have " + servCount + " / " + desiredQty + " servers");

	}
	ns.print(`We ae done, I am outta here!`);
}
