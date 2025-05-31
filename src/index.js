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

function alignText(alignment){
  document.getElementById('content-area').style.textAlign = alignment;
}

function undo(){
  document.execCommand('undo', false, null);
  contentAreaFocus();
}

function redo(){
  document.execCommand('redo', false, null);
  contentAreaFocus();
}