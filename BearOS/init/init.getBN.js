/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	let info = ns.getResetInfo();
	let cbn = info.currentNode;
	ns.print(cbn);
	ns.write("BearOS/savedVar/10010002.txt", cbn, "w");
	ns.clearPort(10010002);
	ns.writePort(10010002, cbn);

}