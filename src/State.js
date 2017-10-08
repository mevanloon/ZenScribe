export function State() {
  let textContent = "";

  this.getUIState = function() {
    return {textContent: textContent}
  }

  this.addText = function(character) {
    textContent += character;
  }
}
