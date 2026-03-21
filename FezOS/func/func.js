/** @param {NS} ns */

export function maxbatch(ns, target, availRam) {

	let answer = 0;
	let currHack = 1;
	let currWeak = 1;
	let currGrow = 1;
	let haveans = false
	let hSize = 1.75;
	let gSize = 1.75;
	let wSize = 1.75;
	let player = ns.getPlayer();
	let so = ns.getServer(target);
	let weakTime = 1
	let addHMSec = 1;
	let addGMSec = 1;


	while (haveans == false) {
		so.hackDifficulty = so.minDifficulty;
		weakTime = ns.formulas.hacking.weakenTime(so, player);
		let hackPctThread = ns.formulas.hacking.hackPercent(so, player);
		let hackPerc = hackPctThread * currHack;
		so.moneyAvailable = so.moneyMax * (1 - hackPerc);
		let gThreads = ns.formulas.hacking.growThreads(so, player, so.moneyMax);
		let wThreads = Math.ceil(gThreads / 12.5) + Math.ceil(currHack / 25);
		currWeak = Math.ceil(wThreads * 1.5);
		currGrow = Math.ceil(gThreads * 1.1);
		let hRam = currHack * hSize;
		let gRam = currGrow * gSize;
		let wRam = currWeak * wSize;
		let batchRam = hRam + gRam + wRam;
		let batchSize = Math.floor(availRam / batchRam);
		addHMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.hackTime(so, player);
		addGMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.growTime(so, player);
		if (batchSize > 20000) {
			currHack++
		} else {
			answer = batchSize
			haveans = true
		}

	}
	const answerArray = [answer, currHack, currGrow, currWeak, weakTime, addHMSec, addGMSec]

	return answerArray;
}

export function cloudused(ns) {

	let cloud = ns.getPurchasedServers();
	let totalUsed = 0;
	for (let server of cloud) {
		let usedmem = ns.getServerUsedRam(server);
		totalUsed += usedmem;

	}

	return totalUsed;
}


	


export function cloudmem(ns) {

	let cloud = ns.getPurchasedServers();
	let totalmem = 0;
	for (let server of cloud) {
		let maxmem = ns.getServerMaxRam(server);
		let usablemem = Math.floor(maxmem * 0.98);
		totalmem += usablemem;

	}

	return totalmem;
}

/*
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
*/

export function nutcracker(ns, server) {

	let money = ns.getServerMoneyAvailable(server);
	if (money === 0)
		money = 1;
	let maxMoney = ns.getServerMaxMoney(server);
	let minSec = ns.getServerMinSecurityLevel(server);
	let sec = ns.getServerSecurityLevel(server);
	let gThreads0 = Math.ceil(ns.growthAnalyze(server, maxMoney / money));
	let wThreads0 = (Math.ceil(gThreads0 / 12.5)) + (Math.ceil(sec - minSec) * 20);
	let gThreads = gThreads0 * 2
	let wThreads = wThreads0 * 2
	const answerArray = [gThreads, wThreads]

	return answerArray;
	
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

export function npcRooted$(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).filter(s => !ns.getPurchasedServers().includes(s) && ns.hasRootAccess(s) && ns.getServerMaxMoney(s) > 0 && !s.startsWith("hacknet") && s != "home").sort();
}


export function npcRooted(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).filter(s => !ns.getPurchasedServers().includes(s) && !s.startsWith("hacknet") && ns.hasRootAccess(s) && s != "home").sort();
// 
}


export function npcList(ns) {
	const sList = new Set(["home"]);
	for (const serv of sList) {
		for (const nextnode of ns.scan(serv)) {
			sList.add(nextnode);
		}
	}
	return Array.from(sList).filter(s => !ns.getPurchasedServers().includes(s)&& !s.startsWith("hacknet") && s != "home").sort();
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
