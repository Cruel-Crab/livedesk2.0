if (document.getElementById) {
  document.write('<style type="text/css">.texter {display:none; border-left:white 10px solid; color:#000000; font: .9em verdana, arial, helvetica, sans-serif; margin-bottom: 12px;}</style>') }

  var divNum = new Array("a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13");  // at the left you should add a1, a2 etc. for each header you wish to include
                                          // so if you want 4 headers you should add a1, a2, a3, a4 in the format shown
                                          // enclosed in double quotes
function openClose(theID) {
  for(var i=0; i < divNum.length; i++) {
    if (divNum[i] == theID) {
      if (document.getElementById(divNum[i]).style.display == "block") { document.getElementById(divNum[i]).style.display = "none" }
      else {
        document.getElementById(divNum[i]).style.display = "block"
      }
  } else {
    document.getElementById(divNum[i]).style.display = "none"; }
  }
}