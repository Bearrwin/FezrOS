/** @param {NS} ns */

export function threadMax(ns, host, scriptSize) {
	let threadNum = 1;
	let freeRam = ns.getServerMaxRam(host) - ns.getServerUsedRam(host);

	threadNum = freeRam / scriptSize;
	return Math.floor(threadNum);
}

export function servList(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).sort();
}

export function npcList(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).filter(s => !ns.getPurchasedServers().includes(s) && !s.startsWith("hacknet") && s != "home").sort();
}

export function hnetlist(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).filter(s => s.startsWith("hacknet"))
}

export function digiClock(input1, clockFormat = "MS") {
	// Opt params for clockFormat DHMSMi, HMSMi, HMS, MS
	let totalTimeMs = input1;
	let oneDayMs = 24 * 60 * 60 * 1000;
	let oneHourMs = 60 * 60 * 1000;
	let oneMinMs = 60 * 1000;
	let oneSecMs = 1000;

	let dDur = Math.floor((totalTimeMs / oneDayMs));
	let afterDays = totalTimeMs % oneDayMs;

	let hDur = Math.floor((afterDays / oneHourMs));
	let afterHours = afterDays % oneHourMs;

	let mDur = Math.floor((afterHours / oneMinMs));
	let afterMins = afterHours % oneMinMs;

	let sDur = Math.floor((afterMins / oneSecMs));
	let afterSecs = afterMins % oneSecMs;

	let msDur = Math.floor(afterSecs);

	switch (clockFormat) {
	case "DHMSMi":
		return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`
	case "HMSMi":
		return `${hDur}:${mDur}:${sDur}:${msDur}`
	case "HMS":
		return `${hDur}:${mDur}:${sDur}`
	case "MS":
		return `${mDur}:${sDur}`
	default:
		return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`
	}
}