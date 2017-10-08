export function State() {
  let textContent = "";

  this.getUIState = function() {
    return {textContent: textContent, cursorPosition: textContent.length}
  }

  this.addText = function(characters) {
    textContent += characters;
  }
}
