function bold(){
  document.execCommand('bold', false, null);
}

function underline(){
  document.execCommand('underline', false, null);
}

function italic(){
  document.execCommand('italic', false, null);
}

function changeColor(){
  var fontcolor = document.getElementById('font-color').value;
  document.execCommand('foreColor', false, fontcolor)
}

function left(){
  document.execCommand('justifyLeft', false, null);
}

function justify(){
  document.execCommand('justifyFull', false, null);
}

function right(){
  document.execCommand('justifyRight', false, null);
}

function center(){
  document.execCommand('justifyCenter', false, null);
}

function undo(){
  document.execCommand('undo', false, null);
}

function redo(){
  document.execCommand('redo', false, null);
}