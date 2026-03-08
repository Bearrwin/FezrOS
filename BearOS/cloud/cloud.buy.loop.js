/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('sleep');
	ns.disableLog('getServerMoneyAvailable');

	let serverName = ns.args[0];
	let ram = ns.args[1];
	let desiredQty = ns.args[2];
	let cycleDelay = ns.args[3];
	let purchasedServers = ns.getPurchasedServers();
	let servCount = 0;
	const serverCost = ns.getPurchasedServerCost(ram);
	let availMoney = ns.getServerMoneyAvailable("home");

		// Check and see if we already have enough
		for (let pServer of purchasedServers) {
			servCount++;
		}
		ns.print("You currently have " + servCount + " / " + desiredQty + " servers")
		if (servCount < desiredQty) {
			servCount = 0;
		}

		while (servCount < desiredQty) {
			servCount = 0;
				purchasedServers = ns.getPurchasedServers()

				for (let pServer of purchasedServers) {
					servCount++;
				}

				if (ns.getServerMoneyAvailable("home") > serverCost) {
					ns.purchaseServer(serverName, (ram));
					ns.print("We have enough money, I am buying a " + ram + " Gb server");
					await ns.sleep(500);
					ns.run("BearOS/cloud/cloud.propagate.all.js");
					servCount++;
				}
				availMoney = ns.getServerMoneyAvailable("home")
				ns.print("You currently have " + servCount + " / " + desiredQty + " servers");
				ns.print(`You have ${ns.formatNumber(availMoney)} / ${ns.formatNumber(serverCost)}`);
				ns.print(` Waiting ${ns.tFormat(cycleDelay)} and trying again`);
				await ns.sleep(cycleDelay);
		}
		ns.print(`We ae done, I am outta here!`)
}