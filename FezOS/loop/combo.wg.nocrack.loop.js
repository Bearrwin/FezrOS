/** @param {NS} ns */
export async function main(ns) {
	let target = ns.args[0];
	let moneyThresh = ns.getServerMaxMoney(target) * 0.95;
	let securityThresh = ns.getServerMinSecurityLevel(target) + 1;

	while (ns.getServerSecurityLevel(target) > securityThresh || ns.getServerMoneyAvailable(target) < moneyThresh ) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		}
	}
}