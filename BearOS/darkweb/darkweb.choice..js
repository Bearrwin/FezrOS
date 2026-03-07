/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.disableLog('ALL');
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);

	while (true) {
		let desired = [];
		let cash = ns.getServerMoneyAvailable("home");

			if (!ns.hasTorRouter()) {
				desired.push("Tor Router - $200k");
			}
			if (!ns.fileExists("BruteSSH.exe", "home")) {
				desired.push("BruteSSH.exe - $500k");
			}
			if (!ns.fileExists("FTPCrack.exe", "home")) {
				desired.push("FTPCrack.exe - $1.5m");
			}
			if (!ns.fileExists("relaySMTP.exe", "home")) {
				desired.push("relaySMTP.exe - $5m");
			}
			if (!ns.fileExists("HTTPWorm.exe", "home")) {
				desired.push("HTTPWorm.exe - $30m");
			}
			if (!ns.fileExists("SQLInject.exe", "home")) {
				desired.push("SQLInject.exe - $250m");
			}
			if (!ns.fileExists("ServerProfiler.exe", "home")) {
				desired.push("ServerProfiler.exe - $500k");
			}
			if (!ns.fileExists("DeepscanV1.exe", "home")) {
				desired.push("DeepscanV1.exe - $500k");
			}
			if (!ns.fileExists("DeepscanV2.exe", "home")) {
				desired.push("DeepscanV2.exe - $25m");
			}
			if (!ns.fileExists("AutoLink.exe", "home")) {
				desired.push("AutoLink.exe - $1m");
			}
			if (!ns.fileExists("Formulas.exe", "home")) {
				desired.push("Formulas.exe - $5b");
			}

			desired.push("I'm finished, leave and run worm");
			desired.push("I'm finished, go home");

		const queryResponse = await ns.prompt(` What would you like to buy? You have ${ns.formatNumber(cash, 2)}`, {
			type: "select",
			choices: [...desired]
		});

		switch (queryResponse) {

		case "Tor Router - $200k":
			ns.singularity.purchaseTor();
			break;

		case "BruteSSH.exe - $500k":
			ns.singularity.purchaseProgram("BruteSSH.exe");

			break;
		case "FTPCrack.exe - $1.5m":
			ns.singularity.purchaseProgram("FTPCrack.exe");

			break;
		case "relaySMTP.exe - $5m":
			ns.singularity.purchaseProgram("relaySMTP.exe");

			break;
		case "HTTPWorm.exe - $30m":
			ns.singularity.purchaseProgram("HTTPWorm.exe");

			break;
		case "SQLInject.exe - $250m":
			ns.singularity.purchaseProgram("SQLInject.exe");

			break;
		case "ServerProfiler.exe - $500k":
			ns.singularity.purchaseProgram("ServerProfiler.exe");

			break;
		case "DeepscanV1.exe - $500k":
			ns.singularity.purchaseProgram("DeepscanV1.exe");

			break;
		case "DeepscanV2.exe - $25m":
			ns.singularity.purchaseProgram("DeepscanV2.exe");

			break;
		case "AutoLink.exe - $1m":
			ns.singularity.purchaseProgram("AutoLink.exe");

			break;
		case "Formulas.exe - $5b":
			ns.singularity.purchaseProgram("Formulas.exe");

			break;

		case "I'm finished, leave and run worm":
			ns.run("BearOS/worm/worm.nuke.js");
			await ns.sleep(1000);
			ns.print("Worm");
			ns.exit();
			break;

		case "I'm finished, go home":
			ns.print("Home Solo");
			ns.exit();
			break;
			await ns.sleep(1000)
		}
	}
}