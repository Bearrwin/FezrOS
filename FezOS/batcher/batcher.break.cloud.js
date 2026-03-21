/** @param {NS} ns */
import {
	cloudmem,
	cloudused,
	maxbatch,
	npcRooted,
	npcRooted$,
	nutcracker
} from "FezOS/func/func.js";

export async function main(ns) {


	//ns.ui.openTail();
	//ns.ui.moveTail(100, 100)
	//ns.ui.resizeTail(650, 200);

	ns.atExit(() => {
	ns.clearPort(10020001);
	ns.writePort(10020001, "False");
	});

	ns.writePort(10020001, "True")

	let currTarg = ""
	let rooted = npcRooted$(ns)
	let cycle = 1

	if (ns.args[0] != undefined) {
		currTarg = ns.args[0];
		if (ns.args[1] != undefined) {
			cycle = ns.args[1]
		}
	} else {

		currTarg = await ns.prompt("Which server would you like to break?", {
			type: "select",
			choices: [...rooted]
		});
	}
	if (ns.hasRootAccess(currTarg)) {
		ns.run("FezOS/probe/probe.monitor.js", 1, currTarg)
		let batch = nutcracker(ns, currTarg)
		let currGrow = batch.shift()
		let currWeak = batch.shift()
		ns.ui.setTailTitle("Break Batcher " + currTarg + " " + currWeak + " " + currGrow);
		ns.ui.openTail();
		ns.ui.moveTail(100, 100)
		ns.ui.resizeTail(650, 200);

		let nextHost = false;
		let haveHost = false;
		let purchServList = ns.getPurchasedServers();
		let scriptOne = "FezOS/ammo/cw1.single.js";
		let scriptTwo = "FezOS/ammo/cg1.single.js";
		let scriptRam = (ns.getScriptRam(scriptOne) * cycle) + (ns.getScriptRam(scriptTwo) * cycle);
		let reserveHomeRam = 64;
		let gCount = currGrow;
		let wCount = currWeak;
		let sec = ns.getServerSecurityLevel(currTarg);
		let minSec = ns.getServerMinSecurityLevel(currTarg)	;
		let money  = ns.getServerMoneyAvailable(currTarg);	
		let maxMoney = ns.getServerMaxMoney(currTarg);
		

		while (money < maxMoney || sec > minSec) {

			while (cloudused(ns) > cloudmem(ns) * 0.98  ){
					await ns.sleep(10000);

			}

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
				if (money < maxMoney) {
					ns.exec("FezOS/ammo/cg1.single.js", (nextHost), cycle, (currTarg));
					}
				if (sec > minSec) {
					ns.exec("FezOS/ammo/cw1.single.js", (nextHost), cycle, (currTarg));
					}

				haveHost = false


			}
		sec = ns.getServerSecurityLevel(currTarg);
		minSec = ns.getServerMinSecurityLevel(currTarg)	;
		money  = ns.getServerMoneyAvailable(currTarg);	
		maxMoney = ns.getServerMaxMoney(currTarg);
			await ns.sleep(10);
		}
	} else {
		ns.ui.openTail();
		ns.ui.moveTail(100, 100)
		ns.ui.resizeTail(650, 200);
		ns.print("You do not have root access to that server")
	}

}

export function autocomplete(data, args) {
	return data.servers;
}
