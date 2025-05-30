function contentAreaFocus(){
  document.getElementById("content-area").focus();
}

function bold(){
  document.execCommand('bold', false, null);
  contentAreaFocus();
}

function underline(){
  document.execCommand('underline', false, null);
  contentAreaFocus();
}

function italic(){
  document.execCommand('italic', false, null);
  contentAreaFocus();
}

function triggerColor(){
    document.getElementById('font-color').click()
}

function changeColor(){
  var fontcolor = document.getElementById('font-color').value;
  document.execCommand('foreColor', false, fontcolor)
  contentAreaFocus();
}

function left(){
  document.execCommand('justifyLeft', false, null);
  contentAreaFocus();
}

function justify(){
  document.execCommand('justifyFull', false, null);
  contentAreaFocus();
}

function right(){
  document.execCommand('justifyRight', false, null);
  contentAreaFocus();
}

function center(){
  document.execCommand('justifyCenter', false, null);
  contentAreaFocus();
}

function undo(){
  document.execCommand('undo', false, null);
  contentAreaFocus();
}

function redo(){
  document.execCommand('redo', false, null);
  contentAreaFocus();
}