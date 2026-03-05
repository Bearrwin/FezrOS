/**
	Creits:
		- This is based in part on ScorpionOS sontrol pad - Thanks.
		- Much help was given along the way from the Denizens of Discord - Thanks
 * @param {NS} ns
  */


export async function main(ns) {

    ns.atExit(() => {
    const panID = doc.getElementById(PANEL_ID);
        panID?.remove();
});

  ns.disableLog("ALL");

  const doc = eval("document");
  const PANEL_ID = "BearOS";
  
  const old = doc.getElementById(PANEL_ID);
  if (old) old.remove();

  let actionQueue = [];

  /** Panel */
  const panelControl = doc.createElement("div");
  panelControl.id = PANEL_ID;
  panelControl.style = `
	position: fixed;
    top: 10px;
    left: 10px;
    z-index: 9999;
    background: rgba(10,10,20,0.95);
    border: 1px solid #444;
    border-radius: 8px;
    padding: 0;
    color: #ddd;
    font-family: monospace;
    font-size: 12px;
	max-height: 90vh;
    overflow: hidden;
    min-width: 125px;
    box-shadow: 0 0 10px #000;

  `;
    
  
  doc.body.appendChild(panelControl);
  

  /** Header */	
  const header = doc.createElement("div");
  header.style = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;
    padding: 6px 8px;
    border-bottom: 1px solid #333;
    cursor: move;
  `;

  const title = doc.createElement("span");
  title.style = "color:#7fd1ff; font-weight:bold;";
  title.innerHTML = "Control Panel"
 header.appendChild(title);

  panelControl.appendChild(header);

  /** Header buttons */
  const btnContainer = doc.createElement("div");

  const toggleBtn = doc.createElement("span");
  toggleBtn.textContent = "🔽";
  toggleBtn.style = "cursor:pointer; margin-right:8px;";
  btnContainer.appendChild(toggleBtn);

  const closeBtn = doc.createElement("span");
  closeBtn.textContent = "❌";
  closeBtn.style = "cursor:pointer;";
  btnContainer.appendChild(closeBtn);

  header.appendChild(btnContainer);

  /** Content (4 modules) */
  const content = doc.createElement("div");
  content.style = `
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 8px;
	height: 45vh;
    max-height: 80vh;
    overflow: auto;

  `;
  panelControl.appendChild(content);
  
 

  /** Module 1 : Control Pad */
  const col1 = doc.createElement("div");
  col1.style = `
    flex: 1;
    line-height: 1.2;
    min-width: 125px;
    max-width: 125px;
    width: 125px;
	height: 95vh;
  `;
//  <h3 style="color:#7fd1ff; margin:0; padding:0;">Control Pad</h3>
//  <h4 style="color:#7fd1ff; margin-bottom:2px; margin-top:2px; padding:0;">UI</h4>

  
  col1.innerHTML = `

    <button id="btn-dash" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-dash">🔴</span> Dashboard
    </button>
    
     
    <button id="btn-mgmt" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-mgmt">🔴</span> Mgmt
    </button>

    <button id="btn-scripts" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-scripts">🔴</span> Scripts
    </button>
	
	<button id="btn-work" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-work">🔴</span> Work/Travel
    </button>

    <button id="btn-batch" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-batch">🔴</span> Batching
    </button>
	
	<button id="btn-cloud" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-cloud">🔴</span> Cloud
    </button>
	
	<button id="btn-hacknet" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-hacknet">🔴</span> Hacknet
    </button>
	
	     <button id="btn-corp" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-corp">🔴</span> Corp
    </button>

    <button id="btn-sleeves" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;  text-align: left;
    ">
      <span id="icon-sleeves">🔴</span> Sleeves
    </button>
	
	<button id="btn-gangs" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-gangs">🔴</span> Gangs
    </button>
	
	<button id="btn-bb" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-bb">🔴</span> Bladeburners
    </button>
	
	<button id="btn-stocks" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-stocks">🔴</span> Stocks
    </button>


	<button id="btn-go" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-go" >🔴</span> Go
    </button>


	
	//<h4 style="color:#7fd1ff; margin-bottom:2px; margin-top:2px; padding:0;">Script</h4>
    
  `;
  
    /** Module 2 : Management */
  const dash = doc.createElement("div");
  dash.style = `
    flex: 1;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 200x;
    max-width: 200px;
    width: 200px;
  `;
    dash.innerHTML = `
	
	  `;


  /** Module 3 : Management */
  const mgmt = doc.createElement("div");
  mgmt.style = `
    flex: 1;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 125px;
    max-width: 125px;
    width: 125px;
  `;
    mgmt.innerHTML = `
	
		<button id="btn-init" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-init">🟡</span> Init
    </button>

	<button id="btn-dwall" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%; text-align: left;
    ">
      <span id="icon-dwall">🟡</span> Buy all DW
    </button>



    
  `;

  /** Module 4 : Scripts */
  const scripts = doc.createElement("div");
  scripts.style = `
    flex: 1;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  //ol3.innerHTML = `<div id="private-server-table" style="font-size:11px; margin-top:4px;"></div>`;

  /** Module 5 : Work/Travel */
  const work1 = doc.createElement("div");
  work1.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
  const work2 = doc.createElement("div");
  work2.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
  const work3 = doc.createElement("div");
  work3.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
  const work4 = doc.createElement("div");
  work4.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
    /** Module 6 : Batching */
  const batch1 = doc.createElement("div");
  batch1.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
  const batch2 = doc.createElement("div");
  batch2.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  
  const batch3 = doc.createElement("div");
  batch3.style = `
    flex: 1;
    white-space: pre;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;





  /** Module 5 : Guide */
  const col5 = doc.createElement("div");
  col5.style = `
    flex: 1;
    line-height: 1.2;
    border-left: 1px solid #333;
    padding-left: 10px;
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  `;
  col5.innerHTML = `
  
  `;
  
  
  content.appendChild(col1);
  content.appendChild(dash);
  content.appendChild(mgmt);
  content.appendChild(scripts);
  content.appendChild(work1);
  content.appendChild(work2);
  content.appendChild(work3);
  content.appendChild(work4);
  content.appendChild(batch1);
  content.appendChild(batch2);
  content.appendChild(batch3);

  content.appendChild(col5);

  /** Control Pad buttons logic */
  let showModuledash = true;
  let showModulemgmt = true;
  let showModuleScripts = true;
  let showModuleWork1 = true;
  let showModuleWork2 = true;
  let showModuleWork3 = true;
  let showModuleWork4 = true;
  let showModuleBatch1 = true;
  let showModuleBatch2 = true;
  let showModuleBatch3 = true;
  let showModule5 = true;

  let runScriptsSart = false;
  let runScript2 = false;
  let runScript3 = false;
  let runScript4 = false;
  let runScript5 = false;
  let runScript6 = false;
  
  
  // Close panels by default
  
	showModuledash = !showModuledash;
    dash.style.display = showModuledash ? "block" : "none";

    showModulemgmt = !showModulemgmt;
    mgmt.style.display = showModulemgmt ? "block" : "none";

    showModuleScripts = !showModuleScripts;
    scripts.style.display = showModuleScripts ? "block" : "none";

    showModuleWork1 = !showModuleWork1;
    work1.style.display = showModuleWork1 ? "block" : "none";
	
	showModuleWork2 = !showModuleWork2;
    work2.style.display = showModuleWork2 ? "block" : "none";
	
	showModuleWork3 = !showModuleWork3;
    work3.style.display = showModuleWork3 ? "block" : "none";
	
	showModuleWork4 = !showModuleWork4;
    work4.style.display = showModuleWork4 ? "block" : "none";
	
	showModuleBatch1 = !showModuleBatch1;
    batch1.style.display = showModuleBatch1 ? "block" : "none";
	
	showModuleBatch2 = !showModuleBatch2;
    batch2.style.display = showModuleBatch2 ? "block" : "none";
	
	showModuleBatch3 = !showModuleBatch3;
    batch3.style.display = showModuleBatch3 ? "block" : "none";







    showModule5 = !showModule5;
    col5.style.display = showModule5 ? "block" : "none";
	

	// dash module 1 panel

  doc.getElementById("btn-dash").onclick = () => {
	showModuledash = !showModuledash;
    dash.style.display = showModuledash ? "block" : "none";
    doc.getElementById("icon-dash").textContent = showModuledash ? "🟢" : "🔴";
  };
  
  
	// Mgmt module 1 panel

  doc.getElementById("btn-mgmt").onclick = () => {
    showModulemgmt = !showModulemgmt;
    mgmt.style.display = showModulemgmt ? "block" : "none";
    doc.getElementById("icon-mgmt").textContent = showModulemgmt ? "🟢" : "🔴";
  };
  
 

	// Script module 1 panel

  doc.getElementById("btn-scripts").onclick = () => {
    showModuleScripts = !showModuleScripts;
    scripts.style.display = showModuleScripts ? "block" : "none";
    doc.getElementById("icon-scripts").textContent = showModuleScripts ? "🟢" : "🔴";
  };
  
  
  // Work module 4 panels
  
    doc.getElementById("btn-work").onclick = () => {
	showModuleWork1 = !showModuleWork1;
    work1.style.display = showModuleWork1 ? "block" : "none";
	showModuleWork2 = !showModuleWork2;
    work2.style.display = showModuleWork2 ? "block" : "none";
	showModuleWork3 = !showModuleWork3;
    work3.style.display = showModuleWork3 ? "block" : "none";
	showModuleWork4 = !showModuleWork4;
    work4.style.display = showModuleWork4 ? "block" : "none";
	doc.getElementById("icon-work").textContent = showModuleWork1 ? "🟢" : "🔴";
  };
  
  // Batch module 3 panels
  
    doc.getElementById("btn-batch").onclick = () => {
	showModuleBatch1 = !showModuleBatch1;
    batch1.style.display = showModuleBatch1 ? "block" : "none";
	showModuleBatch2 = !showModuleBatch2;
    batch2.style.display = showModuleBatch2 ? "block" : "none";
	showModuleBatch3 = !showModuleBatch3;
    batch3.style.display = showModuleBatch3 ? "block" : "none";
	doc.getElementById("icon-batch").textContent = showModuleBatch1 ? "🟢" : "🔴";
  };
  
 
  
  
  // Mgmt panel button
  
  
   	doc.getElementById("btn-init").onclick = () => {
    runScriptsSart = !runScriptsSart;
    actionQueue.push({ type: "Init", enable: runScriptsSart });
   };

   	doc.getElementById("btn-dwall").onclick = () => {
    runScriptsSart = !runScriptsSart;
    actionQueue.push({ type: "DWAll", enable: runScriptsSart });
   };
  
  
  
  
  
   

  /** Collapse */
  let collapsed = false;

  toggleBtn.onclick = () => {
    collapsed = !collapsed;
    content.style.display = collapsed ? "none" : "flex";
    toggleBtn.textContent = collapsed ? "🔼" : "🔽";
  };

	    closeBtn.onclick = (() => {
        ns.exit();
        panelControl.remove();
});
  
 

  /** Draggable */
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.onmousedown = (e) => {
    isDragging = true;
    offsetX = e.clientX - panelControl.offsetLeft;
    offsetY = e.clientY - panelControl.offsetTop;
  };

  doc.onmouseup = () => isDragging = false;

  doc.onmousemove = (e) => {
    if (!isDragging) return;
    panelControl.style.left = (e.clientX - offsetX) + "px";
    panelControl.style.top = (e.clientY - offsetY) + "px";
    panelControl.style.right = "auto";
  };

  
  /** Main loop */
  while (true) {
    if (!collapsed) {
      //if (showModuleWork1) work.innerHTML = `${buildTree()}`;
      //if (showModulemgmt) renderServerTable();
      //if (showModuleScripts) renderPrivServerTable();
    }

    /** Process queued action */
    while (actionQueue.length > 0) {
      const action = actionQueue.shift();

      switch (action.type) {
		  
		  
        case ("Init"): ns.exec("initBN.js", "home", 1); break;
		case ("DWAll"): ns.exec("utils/darkweb.auto.js", "home", 1); break;
		case ("batch1"): toggleSimple(ns, action, 10); break;
        case ("Dashboard"): toggleSimple(ns, action, 10); break;
        case ("hacknet"): toggleSimple(ns, action, 10); break;
        default: toggleSimple(ns, action); break;
      }
    }

    await ns.sleep(1500);
  }
}

const SCRIPT_MAP = {
  "batch1": "testtoggle.js",
  "Start": "testdb.js",
  "Dashboard": "BearOS/ui/dashboard.js", //NOTE: canoot have preceding /for BearOS
  "contract": "ScorpionOS/functions/contract.js",
  "hacknet": "ScorpionOS/functions/hacknet.js"
}


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


