export function State() {
  let textContent = "";
  let cursorPosition = 0;

  let moveCursor = function(n) {
    cursorPosition += n;
  }

  this.getUIState = function() {
    return {textContent: textContent, cursorPosition: cursorPosition}
  }

  this.addText = function(characters) {
    textContent += characters;
    moveCursor(characters.length);
  }
}
