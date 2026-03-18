/** @param {NS} ns */
import { cloudQty } from "FezOS/func/func.js";

export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	let currWork = ns.singularity.getCurrentWork();
		let cloudMaxQty = ns.getPurchasedServerLimit();
		let cloudMaxSize = ns.getPurchasedServerMaxRam();
		let cloudCurrQty = cloudQty(ns);
		let buySize = 64;
		let cloudEndQty = cloudMaxQty;
		let cSize = cloudMaxSize;
		let sf9 = ns.peek(10010109);
		let currentCity = ns.getPlayer().city;

		//let thisBN =
		//let freshBN =

		// Is this a game reload - wait until ports have been initialsed
		// FezOS/init/init.ports.js then exit the while loop

		while (ns.peek(10010001) != "true") {
			await ns.sleep(1000);
		}

		// Check to see if thid is a freh BN or an aug install/soft reset.
		/*
		if (ns.peek(10010003) == "true"){

		run freshBN scripts
		ns.exit()
		}
		Run nuke worm
		Check home ram size
		For the following list start those being used
		BB
		Corp
		Sleeves
		Cloud
		Grafting
		Stocks
		Hacknet
		 */

		// Nuke all possible servers to gain root access
		ns.run("FezOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	// Run combo hack worm from all NPC servers we have root access to.
	await ns.run("FezOS/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");

	// Start sleeves working
	ns.run("FezOS/sleeves/startwork.js");

	if (sf9 < 3) {
		ns.run("FezOS/work/uni.rothman.hack.js");
		ns.print("You start studying Algorithms at Rothman University.");
		await ns.sleep(500);

	}
	ns.print("Setting Hash sale type to cash.");
	ns.run("FezOS/hnet/cash.js");
	await ns.sleep(500);
	ns.print("Starting Hash sales.");
	ns.run("FezOS/bot/bot.hacknet.sellhashes.js");
	ns.run("FezOS/utils/selling.js");

	while (ns.getServerMoneyAvailable("home") < 38000000) {
		await ns.sleep(1000);
	}

	if (currentCity != "Volhaven") {
		ns.run("FezOS/travel/Volhaven.js");
		await ns.sleep(1000);
	}
	ns.run("FezOS/work/uni.zb.hack.js");
	await ns.sleep(1000);

	if (!ns.hasTorRouter()) {
		ns.run("FezOS/darkweb/darkweb.tor.js");
		await ns.sleep(1000);
	}

	if (!ns.fileExists("BruteSSH.exe", "home")) {
		ns.run("FezOS/darkweb/darkweb.ssh.js");
	}

	if (!ns.fileExists("FTPCrack.exe", "home")) {
		ns.run("FezOS/darkweb/darkweb.ftp.js");
	}

	if (!ns.fileExists("relaySMTP.exe", "home")) {
		ns.run("FezOS/darkweb/darkweb.smtp.js");
	}

	if (!ns.fileExists("HTTPWorm.exe", "home")) {
		ns.run("FezOS/darkweb/darkweb.http.js");
	}

	ns.run("FezOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	ns.run("FezOS/worm/worm.killall.excepthome.js");
	await ns.sleep(1000);

	await ns.run("FezOS/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");

	if (cloudCurrQty < cloudEndQty) {
		let sToBuy = cloudEndQty - cloudCurrQty;
			ns.exec("FezOS/cloud/cloud.buy.loop.js", "home", 1, "S", buySize, sToBuy, 5000);
			while (cloudCurrQty < cloudEndQty) {
				cloudCurrQty = cloudQty(ns);
					ns.print("Waiting on funds to buy servers");
					await ns.sleep(10000);
			}
			ns.print("Finished buying servers, we now have ",  + cloudCurrQty);
	}

	ns.exec("FezOS/cloud/cloud.upgto.loop.js", "home", 1, cSize);
	ns.exec("FezOS/batcher/batcher.test.js", "home", 1, "phantasy", 2, 10, 1, 100, 100);

}

/*
ns.kill("/loop/combo.wgh.nocrack.loop.js", "home", "n00dles");


//ns.exec("/init/init.batcher.pservPool.js", "home", 1, "n00dles", 1, 1, 5, 1000)
//ns.exec("/utils/monitor2.js", "home", 1, "n00dles")


//await ns.sleep(1000)


*/
