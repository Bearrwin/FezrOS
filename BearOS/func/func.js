/** @param {NS} ns */

export function cloudMaxSize(ns, mult) {

	let maxSize = Math.ceil(mult * 1048576)

		switch (true) {

		case maxSize < 4:
			return 2
		case maxSize < 8:
			return 4
		case maxSize < 16:
			return 8
		case maxSize < 32:
			return 16
		case maxSize < 64:
			return 32
		case maxSize < 128:
			return 64
		case maxSize < 256:
			return 128
		case maxSize < 512:
			return 256
		case maxSize < 1024:
			return 512
		case maxSize < 2048:
			return 1024
		case maxSize < 4096:
			return 2048
		case maxSize < 8192:
			return 4096
		case maxSize < 16384:
			return 8192
		case maxSize < 32768:
			return 16384
		case maxSize < 65536:
			return 32768
		case maxSize < 131072:
			return 65536
		case maxSize < 262144:
			return 131072
		case maxSize < 524288:
			return 262144
		case maxSize < 1048576:
			return 524288

		}

}
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