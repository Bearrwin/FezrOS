/** @param {NS} ns */
import { npcList, threadCount } from "BearOS/func/func.js";

export async function main(ns) {
	let target = ns.args[0];

	ns.ui.openTail()
	let servers = npcList(ns);

	for (let server of servers) {
		await ns.scp("BearOS/loop/combo.wgh.nocrack.loop.js", server, "home")
	}

	let available_threads = threadCount(ns, server, 2.8)
		if (available_threads >= 1) {
			ns.print(available_threads)
			ns.exec("BearOS/loop/combo.wgh.nocrack.loop.js", server, available_threads, target)

		}

}
await ns.sleep(50)

}