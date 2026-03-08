/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	let currWork = ns.singularity.getCurrentWork()
		//let thisBN =
		//let freshBN =

		// Is this a game reload - wait until ports have been initialsed
		// BearOS/init/init.ports.js then exit the while loop

		while (ns.peek(10010001) != "true") {
			await ns.sleep(1000)
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
		ns.run("BearOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	// Run combo hack worm from all NPC servers we have root access to.
	await ns.run("BearOS/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");

	// Start sleeves working
	ns.run("BearOS/sleeves/startwork.js");

	if (currWork == null) {
		ns.run("BearOS/work/uni.rothman.hack.js");
		ns.print("You start studying Algorithms at Rothman University.")
		await ns.sleep(2000)
	} else {
		if (currWork.classType != "Algorithms" && currWork.location != "Rothman University") {
			ns.run("BearOS/work/uni.rothman.hack.js");
			ns.print("Changing work to studying Algorithms at Rothman University.")
		} else {
			currWork = ns.singularity.getCurrentWork()
				ns.print("You are studying " + currWork.classType + " at " + currWork.location)
		}
	}

}
if (ns.getPurchasedServers() < 5) {
	let sToBuy = 5 - ns.getPurchasedServers()
		await ns.exec("BearOS/cloud/cloud.buy.loop.js", "home", 1, "S", 64, sToBuy, 20000)
}

/*
ns.print("Setting Hash sale type to cash.");
ns.run("/hnet/cash.js");
await ns.sleep(500);
ns.print("Starting Hash sales.");
ns.run("/bot/bot.hacknet.sellhashes.js");
ns.run("/utils/selling.js");

while (ns.getServerMoneyAvailable("home") < (ns.singularity.getDarkwebProgramCost("BruteSSH.exe") + 200000)) {
await ns.sleep(1000)
}

if (!ns.hasTorRouter()) {
ns.singularity.purchaseTor()
}

if (!ns.fileExists("BruteSSH.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("BruteSSH.exe")) {
ns.singularity.purchaseProgram("BruteSSH.exe");
}

ns.kill("/loop/combo.wgh.nocrack.loop.js", "home", "n00dles");


//ns.exec("/init/init.batcher.pservPool.js", "home", 1, "n00dles", 1, 1, 5, 1000)
//ns.exec("/utils/monitor2.js", "home", 1, "n00dles")


//await ns.sleep(1000)


 */