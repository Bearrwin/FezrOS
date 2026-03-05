/** @param {NS} ns */

function threadCount(ns, hostname, scriptRam) {
    let threads = 1;
    let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname)

    threads = free_ram / scriptRam
    return Math.floor(threads)
}


export function npcList(ns, current = "home", set = new Set()) {
  let connections = ns.scan(current)
  let next = connections.filter(c => !set.has(c))
  next.forEach(n => {
    set.add(n);
	let m = n(ns).filter(s => !ns.getPurchasedServers().includes(s) && !s.startsWith("hacknet") && !s.includes ("home"));
    return npcList(ns,m, set)
  })
  return Array.from(set.keys())
}


// filter out everything but hacknet servers
// let purchServList = serverList(ns).filter(s => s.startsWith("hacknet"))

// Filter out cloud servers, home and hacknet servers
// let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s) && !s.startsWith("hacknet") && !s.includes ("home"));


export function digiClock(input1, clockFormat = "MS") {
  // Opt params for clockFormat DHMSMi, HMSMi, HMS, MS
  let totalTimeMs = input1
  let oneDayMs = 24 * 60 * 60 * 1000
  let oneHourMs = 60 * 60 * 1000
  let oneMinMs = 60 * 1000
  let oneSecMs = 1000

  let dDur = Math.floor((totalTimeMs / oneDayMs))
  let afterDays = totalTimeMs % oneDayMs

  let hDur = Math.floor((afterDays / oneHourMs))
  let afterHours = afterDays % oneHourMs

  let mDur = Math.floor((afterHours / oneMinMs))
  let afterMins = afterHours % oneMinMs

  let sDur = Math.floor((afterMins / oneSecMs))
  let afterSecs = afterMins % oneSecMs

  let msDur = Math.floor(afterSecs)

  switch (clockFormat) {
    case "DHMSMi":
      return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`
    case "HMSMi":
      return `${hDur}:${mDur}:${sDur}:${msDur}`
    case "HMS":
      return `${hDur}:${mDur}:${sDur}`
    case "MS": 
      return `${mDur}:${sDur}`
    default: 
      return `${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`
  }
}


