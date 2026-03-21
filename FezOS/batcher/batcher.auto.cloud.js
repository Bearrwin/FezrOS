/** @param {NS} ns */
import {
	cloudmem,
	maxbatch
} from "FezOS/func/func.js";

export async function main(ns) {


	ns.ui.openTail();
	ns.ui.moveTail(100, 100)
	ns.ui.resizeTail(650, 200);

	let newTarg = ns.peek(10020101);
	let sec = ns.getServerSecurityLevel(newTarg)
	let minSec = ns.getServerMinSecurityLevel(newTarg)
	ns.writePort(10020001, "False")
	let currTarg = newTarg
	let batch = maxbatch(ns, currTarg, cloudmem(ns));
	let currBurst = batch.shift();
	let currHack = batch.shift();
	let currGrow = batch.shift();
	let currWeak = batch.shift();
	let weakTime = batch.shift();
	let addHMSec = batch.shift();
	let addGMSec = batch.shift();
	let currDelay = Math.ceil(weakTime) + 5000;
	ns.ui.setTailTitle("Batcher 1 " + currTarg + " " + currWeak + " " + currGrow + " " + currHack + " " + currDelay + " " + currBurst + " ");

	let roundcounter = 100;
	let burstcounter = currBurst;

	let nextHost = false;
	let haveHost = false;
	let purchServList = ns.getPurchasedServers();
	let scriptOne = "FezOS/ammo/cw1.single.js";
	let scriptTwo = "FezOS/ammo/cg1.single.js";
	let scriptThree = "FezOS/ammo/ch1.single.js";
	let scriptRam = ((ns.getScriptRam(scriptOne) * currWeak) + (ns.getScriptRam(scriptTwo) * currGrow) + (ns.getScriptRam(scriptThree) * currHack));
	let reserveHomeRam = 64;

	while (ns.peek(10020001) != "False") { 
	await ns.sleep(1000);

}

//await ns.sleep(5000);
while (true) {

	newTarg = ns.peek(10020101);
	sec = ns.getServerSecurityLevel(newTarg)
	minSec = ns.getServerMinSecurityLevel(newTarg)
	if (newTarg != currTarg || sec > (minSec + 5)) {
		ns.writePort(10020001, "True")
		ns.run("FezOS/batcher/batcher.break.cloud.js", 1, newTarg);
		while (ns.peek(10020001) != "False") { 
		await ns.sleep(1000);
	}
}
currTarg = newTarg
batch = maxbatch(ns, currTarg, cloudmem(ns));
currBurst = batch.shift();
currHack = batch.shift();
currGrow = batch.shift();
currWeak = batch.shift();
weakTime = batch.shift();
addHMSec = batch.shift();
addGMSec = batch.shift();
currDelay = Math.ceil(weakTime) + 5000;
burstcounter = currBurst;
ns.ui.setTailTitle("Batcher 1 " + currTarg + " " + currWeak + " " + currGrow + " " + currHack + " " + currDelay + " " + currBurst + " ");

while (burstcounter > 0) {
	roundcounter = 100
	if (roundcounter > burstcounter) {
		roundcounter = burstcounter;
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
