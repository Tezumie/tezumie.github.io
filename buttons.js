function PagesGrid(x, y, h, spacing) {
  let xstart = x;
  HeaderButton(x, y, h);
    footerButton(x, y, h);
  for (let i = 0; i < pages.length; i++) {
    let w = PageButton(x, y, h, pages[i], pageindex[i]);
    x += w + spacing;
  }
}
function PageButton(x, y, h, buttonText, pageIndex) {
  let buttonlength = map(buttonText.length,0,18,4,15);
  let w = buttonlength * (h / 3);
  let button = createButton(buttonText);
  button.size(w, h);
  button.style("position", "fixed");
  button.style("left", x + "px");
  button.style("top", h + 24 + "px");
  PageButtonStyle(button, h, pageIndex);
  button.mousePressed(function () {
    if (pageIndex >= 0) {
      currentPage = pageIndex;
      ResizeCanvas();
    } else {
      if (Brightness == 1) {
        Brightness = 0;
        ResizeCanvas(true);
      } else {
        Brightness = 1;
        ResizeCanvas(true);
      }
    }
  });
  return w;
}
function PageButtonStyle(button, h, pageIndex) {
  button.style("background-color", p.buttonBg);
  button.style("color", p.buttonTxt);
  button.style("font-family", p.fontFamily);
  button.style("font-size", str(floor(h / 2.1)) + "px");
  button.style("border-radius", "0.4vw");
  button.style("border", "none");
  button.mouseOver(function () {
    button.style("background-color", p.buttonBgh);
    button.style("color", p.buttonTxth);
    button.style("cursor", "pointer");
  });
  if (currentPage == pageIndex) {
    button.style("background-color", p.buttonBgh);
    button.style("color", p.buttonTxth);
  } else {
    button.mouseOut(function () {
      button.style("background-color", p.buttonBg);
      button.style("color", p.buttonTxt);
      button.style("cursor", "default");
    });
  }
}
function HeaderButton(x, y, h) {
  let button = createButton("");
  button.size(width, h * 3.2);
  button.style("position", "fixed");
  button.style("left", 0 + "px");
  button.style("top", 0 + "px");
  button.style("background-color", p.header);
  button.style("border-radius", "0.0vw");
  button.style("border", "none");
  button.mouseOver(function () {
    button.style("background-color", p.header);
  });
  button.mouseOut(function () {
    button.style("background-color", p.header);
  });
}

function footerButton(x, y, h) {
  let button = createButton("");
  button.size(width-17, footer);
  button.style("left", 0 + "px");
  button.style("top", height-footer + "px");
  button.style("background-color", p.footer);
  button.style("border-radius", "0.0vw");
  button.style("border-style", "solid");
  button.style("border-color",  p.footer);
  button.mouseOver(function () {
    button.style("background-color", p.footer);
  });
  button.mouseOut(function () {
    button.style("background-color", p.footer);
  });
}
function removeButtons() {
  const buttons = selectAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();
  }
}
