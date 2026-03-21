/** @param {NS} ns */
export async function main(ns) {

	// ns.ui.openTail();
	// ns.ui.resizeTail(300, 130);
	// ns.ui.moveTail(1225, 485);
	// ns.disableLog('sleep');

	let threshHashes = ns.peek(10040011);
	let hashType = ns.peek(10040012);
	let hashTarget = ns.peek(10040013);
	let cTimer = 100;
	
	await ns.sleep(5000)

	while (true) {
		cTimer = 100;
		threshHashes = ns.peek(10040011);
		hashType = ns.peek(10040012);
		hashTarget = ns.peek(10040013);

		if (ns.hacknet.numHashes() > threshHashes) {
			while (cTimer > 0 && ns.hacknet.numHashes() > ns.hacknet.hashCost(hashType, 1)) {
				// threshHashes = ns.peek(10040011);
				// hashType = ns.peek(10040012);
				// hashTarget = ns.peek(10040013);
				ns.hacknet.spendHashes(hashType, hashTarget, threshHashes)
				cTimer--;
				await ns.sleep(10);
			}
		}
		await ns.sleep(1000);
	}
}