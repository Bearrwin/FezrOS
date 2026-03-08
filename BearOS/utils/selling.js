/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.ui.setTailTitle("Selling");
	ns.disableLog('ALL');

	let printThresh = ns.peek(10040011);
	let printType = ns.peek(10040012);
	let printTarget = ns.peek(10040013);
	let wallet = ns.hacknet.numHashes();
	let walletCap = ns.hacknet.hashCapacity();
	let typeCost = ns.hacknet.hashCost(printType, printThresh);
	let maxRam = ns.getServerMaxRam("home")
		let usedRam = ns.getServerUsedRam("home")

		while (true) {
			ns.clearLog();

			const server = "home"
				maxRam = ns.getServerMaxRam("home")
				usedRam = ns.getServerUsedRam("home")

				typeCost = ns.hacknet.hashCost(printType, printThresh);
			wallet = ns.hacknet.numHashes();
			walletCap = ns.hacknet.hashCapacity();
			printThresh = ns.peek(10040011);
			printType = ns.peek(10040012);
			printTarget = ns.peek(10040013);

			ns.print(`${ns.formatRam(maxRam, 0)} / ${ns.formatRam(usedRam, 0)}`);
			ns.print(`$__________: ${ns.formatNumber(wallet, 2)} / ${ns.formatNumber(walletCap, 2)} `);
			ns.print(`Qty to sell: ${ns.formatNumber(printThresh, 0)}`);
			if (ns.peek(10040012) == ("Improve Studying")) {
				ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)} / ${(ns.hacknet.getStudyMult() * 100)} %`);
			} else {
				if (ns.peek(10040012) == ("Improve Gym Training")) {
					ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)} / ${(ns.hacknet.getTrainingMult() * 100)} %`);
				} else {
					ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)}`);
				}
				ns.print(printTarget)

				await ns.sleep(1000);
			}
		}

}