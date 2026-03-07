/** @param {NS} ns */
export async function main(ns) {
    for (let script of ns.ls("home",".script")){
        try{ns.rm(script,"home")}catch{}
    }
    for (let script of ns.ls("home",".js")){
        try{ns.rm(script,"home")}catch{}
    }
	 for (let script of ns.ls("home",".txt")){
        try{ns.rm(script,"home")}catch{}
    }
}