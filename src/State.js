export function State() {
  let textContent = "";

  this.getTextContent = function() {
    return this.textContent;
  }

  this.addText = function(character) {
    this.textContent = character;
  }
}
