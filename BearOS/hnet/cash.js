/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	ns.clearPort(10040011);
	ns.writePort(10040011, 1);
	ns.clearPort(10040012);
	ns.writePort(10040012, "Sell for Money");
	ns.clearPort(10040013);
	ns.writePort(10040013, "");

}



