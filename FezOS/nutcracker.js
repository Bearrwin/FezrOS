/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);

	let server = ns.args[0];

	ns.run("FezOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	ns.run("FezOS/worm/worm.killall.npc.js");
	await ns.sleep(1000);

	ns.run("FezOS/probe/probe.monitor.js", 1, server)

	// Run combo worm from all NPC servers we have root access to.
	ns.run("FezOS/worm/worm.wg.nocrack.loop.npconly.js", 1, server);

}

export function autocomplete(data, args) {
	return data.servers;
}
