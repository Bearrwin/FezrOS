/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail(); ;
	ns.ui.resizeTail(300, 130); ;
	ns.ui.moveTail(1225, 485); ;
	ns.disableLog('ALL'); ;

	// Reset saved variables to default see BearOS/docs/portList.txt for port listings


	ns.write("BearOS/savedVar/10010001.txt", "false", "w");
	ns.write("BearOS/savedVar/10010002.txt", 1, "w");
	ns.write("BearOS/savedVar/10010003.txt", "true", "w");

	// Source files

	ns.write("BearOS/savedVar/10010101.txt", 0, "w");
	ns.write("BearOS/savedVar/10010102.txt", 0, "w");
	ns.write("BearOS/savedVar/10010103.txt", 0, "w");
	ns.write("BearOS/savedVar/10010104.txt", 0, "w");
	ns.write("BearOS/savedVar/10010105.txt", 0, "w");
	ns.write("BearOS/savedVar/10010106.txt", 0, "w");
	ns.write("BearOS/savedVar/10010107.txt", 0, "w");
	ns.write("BearOS/savedVar/10010108.txt", 0, "w");
	ns.write("BearOS/savedVar/10010109.txt", 0, "w");
	ns.write("BearOS/savedVar/10010110.txt", 0, "w");
	ns.write("BearOS/savedVar/10010111.txt", 0, "w");
	ns.write("BearOS/savedVar/10010112.txt", 0, "w");
	ns.write("BearOS/savedVar/10010113.txt", 0, "w");
	ns.write("BearOS/savedVar/10010114.txt", 0, "w");
	ns.write("BearOS/savedVar/10010115.txt", 0, "w");

	// Bit Node Mults

	ns.write("BearOS/savedVar/10010501.txt", 1, "w");
	ns.write("BearOS/savedVar/10010502.txt", 1, "w");
	ns.write("BearOS/savedVar/10010503.txt", 1, "w");
	ns.write("BearOS/savedVar/10010504.txt", 1, "w");
	ns.write("BearOS/savedVar/10010505.txt", 1, "w");
	ns.write("BearOS/savedVar/10010506.txt", 1, "w");
	ns.write("BearOS/savedVar/10010507.txt", 1, "w");
	ns.write("BearOS/savedVar/10010508.txt", 1, "w");
	ns.write("BearOS/savedVar/10010509.txt", 1, "w");
	ns.write("BearOS/savedVar/10010510.txt", 1, "w");
	ns.write("BearOS/savedVar/10010511.txt", 1, "w");
	ns.write("BearOS/savedVar/10010512.txt", 1, "w");
	ns.write("BearOS/savedVar/10010513.txt", 1, "w");
	ns.write("BearOS/savedVar/10010514.txt", 1, "w");
	ns.write("BearOS/savedVar/10010515.txt", 1, "w");
	ns.write("BearOS/savedVar/10010516.txt", 1, "w");
	ns.write("BearOS/savedVar/10010517.txt", 1, "w");
	ns.write("BearOS/savedVar/10010518.txt", 1, "w");
	ns.write("BearOS/savedVar/10010519.txt", 1, "w");
	ns.write("BearOS/savedVar/10010520.txt", 1, "w");
	ns.write("BearOS/savedVar/10010521.txt", 1, "w");
	ns.write("BearOS/savedVar/10010522.txt", 1, "w");
	ns.write("BearOS/savedVar/10010523.txt", 1, "w");
	ns.write("BearOS/savedVar/10010524.txt", 1, "w");
	ns.write("BearOS/savedVar/10010525.txt", 1, "w");
	ns.write("BearOS/savedVar/10010526.txt", 1, "w");
	ns.write("BearOS/savedVar/10010527.txt", 1, "w");
	ns.write("BearOS/savedVar/10010528.txt", 1, "w");
	ns.write("BearOS/savedVar/10010529.txt", 1, "w");
	ns.write("BearOS/savedVar/10010530.txt", 1, "w");
	ns.write("BearOS/savedVar/10010531.txt", 1, "w");
	ns.write("BearOS/savedVar/10010532.txt", 1, "w");
	ns.write("BearOS/savedVar/10010533.txt", 1, "w");
	ns.write("BearOS/savedVar/10010534.txt", 1, "w");
	ns.write("BearOS/savedVar/10010535.txt", 1, "w");
	ns.write("BearOS/savedVar/10010536.txt", 1, "w");
	ns.write("BearOS/savedVar/10010537.txt", 1, "w");
	ns.write("BearOS/savedVar/10010538.txt", 1, "w");
	ns.write("BearOS/savedVar/10010539.txt", 1, "w");
	ns.write("BearOS/savedVar/10010540.txt", 1, "w");
	ns.write("BearOS/savedVar/10010541.txt", 1, "w");
	ns.write("BearOS/savedVar/10010542.txt", 1, "w");
	ns.write("BearOS/savedVar/10010543.txt", 1, "w");
	ns.write("BearOS/savedVar/10010544.txt", 1, "w");
	ns.write("BearOS/savedVar/10010545.txt", 1, "w");
	ns.write("BearOS/savedVar/10010546.txt", 1, "w");
	ns.write("BearOS/savedVar/10010547.txt", 1, "w");
	ns.write("BearOS/savedVar/10010548.txt", 1, "w");
	ns.write("BearOS/savedVar/10010549.txt", 1, "w");
	ns.write("BearOS/savedVar/10010550.txt", 1, "w");
	ns.write("BearOS/savedVar/10010551.txt", 1, "w");
	ns.write("BearOS/savedVar/10010552.txt", 1, "w");

	// Which game mechanics are we going to use.

	ns.write("BearOS/savedVar/10010601.txt", "true", "w");
	ns.write("BearOS/savedVar/10010602.txt", "true", "w");
	ns.write("BearOS/savedVar/10010603.txt", "true", "w");
	ns.write("BearOS/savedVar/10010604.txt", "true", "w");
	ns.write("BearOS/savedVar/10010605.txt", "true", "w");
	ns.write("BearOS/savedVar/10010606.txt", "true", "w");
	ns.write("BearOS/savedVar/10010607.txt", "true", "w");
	ns.write("BearOS/savedVar/10010608.txt", "true", "w");
	
	
	// Hacknet options
	ns.write("BearOS/savedVar/10040011.txt", 1, "w");
	ns.write("BearOS/savedVar/10040012.txt", "Sell for Money", "w");
	ns.write("BearOS/savedVar/10040013.txt", "", "w");
	
	


}