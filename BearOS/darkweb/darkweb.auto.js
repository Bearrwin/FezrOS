/** @param {NS} ns */
export async function main(ns) {


	if (!ns.hasTorRouter()) {
		ns.singularity.purchaseTor()
	}


	if (!ns.fileExists("BruteSSH.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("BruteSSH.exe")) {
		ns.singularity.purchaseProgram("BruteSSH.exe");
	}
	if (!ns.fileExists("FTPCrack.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("FTPCrack.exe")) {
		ns.singularity.purchaseProgram("FTPCrack.exe");
	}
	if (!ns.fileExists("relaySMTP.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("")) {
		ns.singularity.purchaseProgram("relaySMTP.exe");
	}
	if (!ns.fileExists("HTTPWorm.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("HTTPWorm.exe")) {
		ns.singularity.purchaseProgram("HTTPWorm.exe");
	}
	if (!ns.fileExists("SQLInject.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("SQLInject.exe")) {
		ns.singularity.purchaseProgram("SQLInject.exe");
	}
	if (!ns.fileExists("ServerProfiler.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("ServerProfiler.exe")) {
		ns.singularity.purchaseProgram("ServerProfiler.exe")
	}
	if (!ns.fileExists("DeepscanV1.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("DeepscanV1.exe")) {
		ns.singularity.purchaseProgram("DeepscanV1.exe");
	}
	if (!ns.fileExists("DeepscanV2.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("DeepscanV2.exe")) {
		ns.singularity.purchaseProgram("DeepscanV2.exe");
	}
	if (!ns.fileExists("AutoLink.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("AutoLink.exe")) {
		ns.singularity.purchaseProgram("AutoLink.exe");
	}
	if (!ns.fileExists("Formulas.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("Formulas.exe")) {
		ns.singularity.purchaseProgram("Formulas.exe");
	}


	// BruteSSH.exe - $500.000k - Opens up SSH Ports.

	// FTPCrack.exe - $1.500m - Opens up FTP Ports.

	// relaySMTP.exe - $5.000m - Opens up SMTP Ports.

	// HTTPWorm.exe - $30.000m - Opens up HTTP Ports.

	// SQLInject.exe - $250.000m - Opens up SQL Ports.

	// ServerProfiler.exe - $500.000k - Displays detailed information about a server.

	// DeepscanV1.exe - $500.000k - Enables 'scan-analyze' with a depth up to 5.

	// DeepscanV2.exe - $25.000m - Enables 'scan-analyze' with a depth up to 10.

	// AutoLink.exe - $1.000m - Enables direct connect via 'scan-analyze'.

	// Formulas.exe - $5.000b - Unlock access to the formulas API.








}