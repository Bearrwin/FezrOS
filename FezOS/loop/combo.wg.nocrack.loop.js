/** @param {NS} ns */
export async function main(ns) {
	let target = ns.args[0];
	let moneyThresh = ns.getServerMaxMoney(target);
	let securityThresh = ns.getServerMinSecurityLevel(target);

	while (ns.getServerSecurityLevel(target) > securityThres || ns.getServerMoneyAvailable(target) < moneyThresh ) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		}
	}
}