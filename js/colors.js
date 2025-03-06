class Colors {
  constructor() {
    this.ColorSection = document.getElementById("generateColors");
    this.colorsContainer = document.querySelectorAll("#generateColors > div .colors");
    this.refreshColorsBtn = document.getElementById("refreshColors");
    this.#eventListeners();
  }
  #eventListeners() {
    this.ColorSection.onclick = (e) => {
      // refresh colors
      if (e.target.id == "refreshColors") {
        this.render();
      }

      if (e.target.classList.contains("color-code")) {
        window.navigator.clipboard.writeText(e.target.innerText);
      }
    };
  }
  generateHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  generateFiveColors() {
    let fiveColors = [];
    let i = 0;
    while (i < 5) {
      let colorcode = this.generateHexColor();
      if (colorcode.length == 7) {
        fiveColors.push(colorcode);
        i++;
      }
    }
    return fiveColors;
  }
  render() {
    let fiveColors = this.generateFiveColors();
    Array.from(this.colorsContainer).forEach((colorContainer, index) => {
      colorContainer.style.backgroundColor = fiveColors[index];
      colorContainer.innerHTML = `
        <span class="color-code">${fiveColors[index]}</span>
        `;
    });
  }
}

export default Colors;
