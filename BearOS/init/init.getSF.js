/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	let owned = ns.singularity.getOwnedSourceFiles();

		for (const o of owned) {

			let c = o["n"];
				let d = o["lvl"];

				switch (c) {

				case 1:
					ns.write("BearOS/savedVar/10010101.txt", d, "w");
					break;

				case 2:
					ns.write("BearOS/savedVar/10010102.txt", d, "w");
					break;

				case 3:
					ns.write("BearOS/savedVar/10010103.txt", d, "w");
					break;

				case 4:
					ns.write("BearOS/savedVar/10010104.txt", d, "w");
					break;

				case 5:
					ns.write("BearOS/savedVar/10010105.txt", d, "w");
					break;

				case 6:
					ns.write("BearOS/savedVar/10010106.txt", d, "w");
					break;

				case 7:
					ns.write("BearOS/savedVar/10010107.txt", d, "w");
					break;

				case 8:
					ns.write("BearOS/savedVar/10010108.txt", d, "w");
					break;

				case 9:
					ns.write("BearOS/savedVar/10010109.txt", d, "w");
					break;

				case 10:
					ns.write("BearOS/savedVar/10010110.txt", d, "w");
					break;

				case 11:
					ns.write("BearOS/savedVar/10010111.txt", d, "w");
					break;

				case 12:
					ns.write("BearOS/savedVar/10010112.txt", d, "w");
					break;

				case 13:
					ns.write("BearOS/savedVar/10010113.txt", d, "w");
					break;

				case 14:
					ns.write("BearOS/savedVar/10010114.txt", d, "w");
					break;

				case 15:
					ns.write("BearOS/savedVar/10010115.txt", d, "w");
					break;

				}
		}
}