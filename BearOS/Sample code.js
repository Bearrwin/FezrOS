import { npcList } from "BearOS/func/func.js";

  ns.ui.openTail();
  ns.ui.resizeTail(300, 130);
  ns.ui.moveTail(1225, 485);
  ns.ui.setTailTitle("Selling");
  //ns.ui.setTailFontSize(12)
  ns.disableLog('ALL');
  

		let target = ns.peek(1);
		let player = ns.getPlayer();
		let so = ns.getServer(target);
		const hackPctThread = ns.formulas.hacking.hackPercent(so, player);

		let hthreads = 100 / (hackPctThread * 100)

		so.hackDifficulty = so.minDifficulty;
		so.moneyAvailable = so.moneyMax * (1 - hackPctThread);

	let maxMoney = so.moneyMax 
	let moneyAvailable = so.moneyAvailable
	const gThreads = ns.formulas.hacking.growThreads(so, player, so.moneyMax);
		



		ns.print(gThreads)
		ns.print(hackPctThread)
		ns.print(hthreads)
		ns.print(maxMoney)
		ns.print(moneyAvailable)

}


	Red Dot
	>🔴<
	
	Yellow Dot
	>🟡<
	
	Green Dot>🟢<
	
	
Mgmt			mgmt
Sceupts			scripts
Work/Travel		work
Batching		batch
Cloud			cloud
Hacknet			hacknet
Corp			corp
Sleeves			sleeves
Gangs			gangs
Bladeb			bb
Stocks			stocks
IPV60			go

	
	This code closes the panel and exits the script if closebtn is defined earlier
	
	const closeBtn = doc.createElement("span");
	closeBtn.textContent = "❌";
	closeBtn.style = "cursor:pointer;";
	btnContainer.appendChild(closeBtn);
	
		closeBtn.onclick = (() => {
        ns.exit();
        panel.remove();
});

	This code is for a toggle display module style button
	
	// This initialises this variable
	
	let showModulemgmt = true;
	
	// This turns off display of this module by default
	
	showModulemgmt = !showModulemgmt;
    mgmt.style.display = showModulemgmt ? "block" : "none";
	
	// This goes into thw inner html section of what ever module/sub panel it is needed in
	// note second last line is displayed name of button
	// note the line wuth the name is icon not buttob for label to allow for icon change

    <button id="btn-mgmt" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-mgmt">🟢</span> Mgmt
    </button>
	
	// This code is what listens for the mpouse click and acts upon it.
	
	doc.getElementById("btn-mgmt").onclick = () => {
    showModulemgm = !showModulemgm;
    col2.style.display = showModulemgm ? "block" : "none";
    doc.getElementById("icon-mgmt").textContent = showModulemgm ? "🟢" : "🔴";
  };
  
  
  This code is for a toggle script style button
  
	// This initialises this variable
	
	 let runScriptdBoard = false;
	 
	// This goes into the inner html section of what ever module/sub panel it is needed in
	// note second last line is displayed name of button
	// note the line wuth the name is icon not buttob for label to allow for icon change
  
      <button id="btn-dBoard" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-dBoard">🔴</span> Dashboard
    </button>
	
	// This code is what listens for the mpouse click and acts upon it.
	
	  doc.getElementById("btn-dBoard").onclick = () => {
    runScriptdBoard = !runScriptdBoard;
    actionQueue.push({ type: "Dashboard", enable: runScriptdBoard });
    doc.getElementById("icon-dBoard").textContent = runScriptdBoard ? "🟢" : "🔴";
  };

  // switch case entry this along with the togglesimple function makes the toggle work
  
  case ("Dashboard"): toggleSimple(ns, action, 10); break;
  
  
  This code is for a one shot script launcher style button
  
  	// This initialises this variable
	
	 let runScript1 = false;
	 
	// This goes into thw inner html section of what ever module/sub panel it is needed in
	// note second last line is displayed name of button
	// note the line wuth the name is icon not buttob for label to allow for icon change
  
      <button id="btn-scr1" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-scr1">🔴</span> Contract
    </button>
	
	// This code is what listens for the mpouse click and acts upon it. NOTE: The absence f the 4th line 
	// from the toggle style, also notice the diff in the swith case entry
	
	  doc.getElementById("btn-scr1").onclick = () => {
    runScript1 = !runScript1;
    actionQueue.push({ type: "contract", enable: runScript1 });
   };

	// switch case entry
  
	case ("Start"): ns.exec("/testdb.js", "home", 1); break;
  
	// This is the main While loop that acts on instructions.w

  /** Main loop */
  while (true) {
    if (!collapsed) {
		
		//This part is for the parts of ScorpOS I am not using atm.
		
      //if (showModule4) col4.innerHTML = `${buildTree()}`;
      //if (showModule2) renderServerTable();
      //if (showModule3) renderPrivServerTable();
    }

    /** Process queued action */
    while (actionQueue.length > 0) {
      const action = actionQueue.shift();

      switch (action.type) {
        
        case ("batch1"): toggleSimple(ns, action, 10); break;
        case ("Start"): ns.exec("/testdb.js", "home", 1); break;
        case ("Dashboard"): toggleSimple(ns, action, 10); break;
        case ("hacknet"): toggleSimple(ns, action, 10); break;
        case ("hacking-simple"): tHackingSimple(ns, action); break;
        case ("hacking-batch"): tHackingBatch(ns, action); break;
        default: toggleSimple(ns, action); break;
      }
    }

    await ns.sleep(1500);
  }
}

	// This defines script to code labels used.

	const SCRIPT_MAP = {
  "batch1": "testtoggle.js",
  "Start": "testdb.js",
  "Dashboard": "utils/selling.js",
  "contract": "ScorpionOS/functions/contract.js",
    //"hacknet": "ScorpionOS/functions/hacknet.js"
}
	
	// This is the .js func that allows the toggling to Function
	// including killing the script on toggle off
	
	/**
 * Toggle simple
 */
function toggleSimple(ns, action, argument) {
  const script = SCRIPT_MAP[action.type];

  if (!script) {
    ns.toast(`❗ Error : script ${action.type}`, "error", 10000);
    return;
  }

  if (action.enable) {
    if (argument) ns.exec(script, "home", 1, argument);
    else ns.exec(script, "home", 1);
  }
  else for (const p of ns.ps("home")) if (p.filename === script) ns.kill(p.pid);
}
