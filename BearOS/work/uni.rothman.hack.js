/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	// Self-explanatory
	// ns.singularity.universityCourse("Rothman University", "Algorithms")

	// second entry stops it automaticall focusing on work when you start it.
	// uncomment second line and comment first line at need. ctrl+/ toggles
	// commenting on whatever line the cursor is on
	ns.singularity.universityCourse("Rothman University", "Algorithms", false)

}