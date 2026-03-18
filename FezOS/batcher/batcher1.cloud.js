/** @param {NS} ns */
export async function main(ns) {


	ns.ui.openTail(50, 50);
	//ns.ui.moveTail(1450, 540)
	ns.ui.resizeTail(500, 150);


	let currHack = ns.peek(10020104);
	let currTarg = ns.peek(10020101);
	let target = currTarg;
	let player = ns.getPlayer();
	let so = ns.getServer(target);
	so.hackDifficulty = so.minDifficulty;
	let hackPctThread = ns.formulas.hacking.hackPercent(so, player);
	let hackPerc = hackPctThread * currHack;
	so.moneyAvailable = so.moneyMax * (1 - hackPerc);
	let gThreads = ns.formulas.hacking.growThreads(so, player, so.moneyMax);
	let wThreads = Math.ceil(gThreads / 12.5) + Math.ceil(currHack / 25);
	let currWeak = Math.ceil(wThreads * 1.5)
	let currGrow = Math.ceil(gThreads * 1.1)
	let weakTime = ns.formulas.hacking.weakenTime(so, player);
	let currDelay = Math.ceil(weakTime) + 5000;
	let currBurst = ns.peek(10020106);
	ns.ui.setTailTitle("Batcher 1 " + currTarg + " " + currWeak + " " + currGrow + " " + currHack + " " + currDelay + " " + currBurst + " ");
	let addHMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.hackTime(so, player);
	let addGMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.growTime(so, player);

	let roundcounter = 100
	let burstcounter = currBurst;

	let nextHost = false;
	let haveHost = false;
	let purchServList = ns.getPurchasedServers();
	let scriptOne = "FezOS/ammo/cw1.single.js";
	let scriptTwo = "FezOS/ammo/cg1.single.js";
	let scriptThree = "FezOS/ammo/ch1.single.js";
	let scriptRam = ((ns.getScriptRam(scriptOne) * currWeak) + (ns.getScriptRam(scriptTwo) * currGrow) + (ns.getScriptRam(scriptThree) * currHack));
	let reserveHomeRam = 64;

	//await ns.sleep(5000);
	while (true) {

		currHack = ns.peek(10020104);
		currTarg = ns.peek(10020101);
		target = currTarg;
		player = ns.getPlayer();
		so = ns.getServer(target);
		so.hackDifficulty = so.minDifficulty;
		hackPctThread = ns.formulas.hacking.hackPercent(so, player);
		hackPerc = hackPctThread * currHack;
		so.moneyAvailable = so.moneyMax * (1 - hackPerc);
		gThreads = ns.formulas.hacking.growThreads(so, player, so.moneyMax);
		wThreads = Math.ceil(gThreads / 12.5) + Math.ceil(currHack / 25);
		currWeak = Math.ceil(wThreads * 1.5);
		currGrow = Math.ceil(gThreads * 1.1)
		weakTime = ns.formulas.hacking.weakenTime(so, player);
		currDelay = Math.ceil(weakTime) + 5000;
		currBurst = ns.peek(10020106);
		addHMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.hackTime(so, player);
		addGMSec = ns.formulas.hacking.weakenTime(so, player) - ns.formulas.hacking.growTime(so, player);
		burstcounter = currBurst;
		ns.ui.setTailTitle("Batcher 1 " + currTarg + " " + currWeak + " " + currGrow + " " + currHack + " " + currDelay + " " + currBurst + " ");

		while (burstcounter > 0) {
			roundcounter = 100
			if (roundcounter > burstcounter) {
				roundcounter = burstcounter
			}

			while (roundcounter > 0) {

				purchServList = ns.getPurchasedServers();
				for (let server of purchServList) {
					if (haveHost == false) {
						if (Math.floor(ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) > (scriptRam)) {
							haveHost = true;
							nextHost = server;
						} else {
							haveHost = false;
						}
					}
				}
				if (haveHost == false) {
					if ((Math.floor(ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) - reserveHomeRam) > (scriptRam * 2)) {
						haveHost = true;
						nextHost = "home";
					} else {
						haveHost = false;
					}
				}
				if (haveHost == true) {
					ns.exec("FezOS/ammo/ch1.single.js", (nextHost), (currHack), (currTarg), (addHMSec));
					ns.exec("FezOS/ammo/cg1.single.js", (nextHost), (currGrow), (currTarg), (addGMSec));
					ns.exec("FezOS/ammo/cw1.single.js", (nextHost), (currWeak), (currTarg));

					haveHost = false


				}
				roundcounter--;
				burstcounter--;

			}
			await ns.sleep(4);
		}
		await ns.sleep(currDelay);
	}

}
