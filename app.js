function printDiv(divName){
  var printContents = document.getElementById(divName).innerHTML;
  var popupWin = window.open('', '_blank');
  popupWin.document.open();
  popupWin.document.write('<html><head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><script src="https://kit.fontawesome.com/b99e675b6e.js"></script><link rel="stylesheet" type="text/css" href="style.css"/></head><body onload="window.print()"><div style="padding-top:0;">' + printContents + '</div></body></html>');
  popupWin.document.close();
}