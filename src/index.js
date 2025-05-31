// Set focus to the content area
function contentAreaFocus(){
  document.getElementById("content-area").focus();
}

// Apply bold formatting
function bold(){
  document.execCommand('bold', false, null);
  contentAreaFocus();
}

// Apply underline formatting
function underline(){
  document.execCommand('underline', false, null);
  contentAreaFocus();
}

// Apply italic formatting
function italic(){
  document.execCommand('italic', false, null);
  contentAreaFocus();
}

// Trigger the color picker input field
function triggerColor(){
    document.getElementById('font-color').click()
}

// Change the font color
function changeColor(){
  var fontcolor = document.getElementById('font-color').value;
  document.execCommand('foreColor', false, fontcolor)
  contentAreaFocus();
}

// Align whole content based on the input alignment type
function alignText(alignment){
  document.getElementById('content-area').style.textAlign = alignment;
}

// Undo the last action
function undo(){
  document.execCommand('undo', false, null);
  contentAreaFocus();
}

// Redo the previously undone action
function redo(){
  document.execCommand('redo', false, null);
  contentAreaFocus();
}