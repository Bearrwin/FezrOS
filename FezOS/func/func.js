/** @param {NS} ns */

export function growmax(ns, server) {

	let money = ns.getServerMoneyAvailable(server);
	if (money === 0)
		money = 1;
	let maxMoney = ns.getServerMaxMoney(server);
	let minSec = ns.getServerMinSecurityLevel(server);
	let sec = ns.getServerSecurityLevel(server);
	let gThreads = Math.ceil(ns.growthAnalyze(server, maxMoney / money));
	let wThreads = (Math.ceil(gThreads / 12.5)) + (Math.ceil(sec - minSec) * 20);
	return gThreads;
}

export function nutcracker(ns, server) {

	let money = ns.getServerMoneyAvailable(server);
	if (money === 0)
		money = 1;
	let maxMoney = ns.getServerMaxMoney(server);
	let minSec = ns.getServerMinSecurityLevel(server);
	let sec = ns.getServerSecurityLevel(server);
	let gThreads = Math.ceil(ns.growthAnalyze(server, maxMoney / money));
	let wThreads = (Math.ceil(gThreads / 12.5)) + (Math.ceil(sec - minSec) * 20);
	return wThreads;
}

export function smallest(ns) {
	let cloud = ns.getPurchasedServers();
	let servName = cloud[0];
	let prev = ns.getServerMaxRam(servName);
	for (let server of cloud) {
		let curr = ns.getServerMaxRam(server);
		if (curr < prev) {
			prev = curr;
			servName = server;
		}
	}
	return servName;
}

export function nextUpg(ns, server, maxRam) {
	let curr = ns.getServerMaxRam(server);
	let max = maxRam;
	if (curr < maxRam) {
		let newLog = Math.log2(curr) + 1;
		return 2 ** (newLog);
	} else {
		return 0;

	}
}

export function upgCount(ns, maxRam) {
	let cloud = ns.getPurchasedServers()
		let sCount = 0;
	for (let server of cloud) {
		let curr = ns.getServerMaxRam(server)
			if (curr < maxRam) {
				sCount++;
			}
	}
	return sCount;
}

export function cloudQty(ns) {
	let cloud = ns.getPurchasedServers()
		let sCount = 0;
	for (let server of cloud) {
		sCount++;
	}
	return sCount;
}

/*
export function cloudMaxSize(ns, mult) {
return 2 ** (0|Math.log2(mult * 1048576));
}
 */

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
	return Array.from(sList).filter(s => s.startsWith("hacknet"));
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
		return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`;
	case "HMSMi":
		return `${hDur}:${mDur}:${sDur}:${msDur}`;
	case "HMS":
		return `${hDur}:${mDur}:${sDur}`;
	case "MS":
		return `${mDur}:${sDur}`;
	default:
		return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`;
	}
}
