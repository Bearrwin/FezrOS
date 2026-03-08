/** @param {NS} ns */
export async function main(ns) {

	//ns.ui.openTail();
	//ns.ui.resizeTail(300, 130);
	//ns.ui.moveTail(1225, 485);
	//ns.disableLog('ALL');

	// set dirList variable to be a list of all files on home server, including folders
	// then filter list and only keep ones that include .js in the name excluding exe and other
	// file types that we can't copy
	let sName = ns.args[0];
	let dirlist = ns.ls("home");
	let shortlist = dirlist.filter(s => s.includes(".js"));

	// use the filtered list of servers, and use the scp or copy command to copy every file
	// on that list to the target server, in concert with /serv/serv.propagate.all.js to copies
	// all script files on home to every purchased server.
	ns.scp(shortlist, (sName));

}