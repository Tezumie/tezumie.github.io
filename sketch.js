let garbageCan = [];
let headerHeight,
  borderWidth,
  footerHeight,
  bodyWidth,
  bodyHeight,
  bodyContentWidth,
  bodyContentHeight;
let p, palette;
let theme = 0;
let PageTitles = ["Home", "Series", "About", "Resources"];
let currentPage = 0;
let currentSection = 0;
let pageBodyDiv;
let allItemsDiv;
function setup() {
  Palette();
  createCanvas(window.innerWidth, window.innerHeight * 1.1);
  document.body.style.overflowX = "hidden";
  headerHeight = 60;
  footerHeight = window.innerHeight * 0.1;
  borderWidth = width / 7;
  bodyWidth = width - borderWidth * 2;
  bodyContentWidth = width - borderWidth * 2 - p.bodypadding * 2;
  bodyHeight = height - headerHeight - footerHeight;
  bodyContentHeight = height - headerHeight - footerHeight - p.bodypadding * 2;
  drawElements();
  windowResized();
}
function drawElements() {
  background(p.backGround);
  if (currentPage == 0) {
    AllItemsContainer();
    allItemsDiv.child(header());
    addBannerImage(allItemsDiv, 500);
    PageBodyContainer();

    pageBodyDiv.child(
      createTextBox(
        assemblyTxt,
        0,
        0,
        bodyContentWidth,
        bodyContentHeight * 1.5,
        "center"
      )
    );
    allItemsDiv.child(pageBodyDiv);
    allItemsDiv.child(footer());
    allItemsDiv.style("height", "auto");
    let pageBodyHeight = pageBodyDiv.elt.offsetHeight;
  }
  if (currentPage == 1 && currentSection != 1) {
    AllItemsContainer();
    allItemsDiv.child(header());
    PageBodyContainer();
    allItemsDiv.child(pageBodyDiv);

    let buttonDiv = createDiv("");
    buttonDiv.id("AllItems");
    buttonDiv.id("buttonContainer");
    pageBodyDiv.child(buttonDiv);
    gridImages(buttonDiv, myImages, myProjects, imgTxt, 2);

    allItemsDiv.child(footer());
    pageBodyDiv.style("height", "auto");
    allItemsDiv.style("height", "auto");
    let pageBodyHeight = pageBodyDiv.elt.offsetHeight;
  }
  if (currentPage == 1 && currentSection == 1) {
    AllItemsContainer();
    allItemsDiv.child(header());
    addBannerImage(allItemsDiv, 500);
    PageBodyContainer();
    pageBodyDiv.child(
      createTextBox(
        assemblyTxt,
        0,
        0,
        bodyContentWidth,
        bodyContentHeight * 1.5,
        "center"
      )
    );
    allItemsDiv.child(pageBodyDiv);
    allItemsDiv.child(footer());
    allItemsDiv.style("height", "auto");
    let pageBodyHeight = pageBodyDiv.elt.offsetHeight;
  }
  if (currentPage == 2) {
    AllItemsContainer();
    allItemsDiv.child(header());
    PageBodyContainer();
    allItemsDiv.child(pageBodyDiv);
    pageBodyDiv.child(
      createTextBox(
        myAbout,
        0,
        0,
        bodyContentWidth,
        bodyContentHeight * 1.5,
        "left"
      )
    );
    let buttonDiv = createDiv("");
    buttonDiv.id("AllItems");
    buttonDiv.id("buttonContainer");
    pageBodyDiv.child(buttonDiv);
    gridImages(buttonDiv, myImagesTezumie, myProjectsTezumie, imgTxtTezumie, 3);

    allItemsDiv.child(footer());
    pageBodyDiv.style("height", "auto");
    allItemsDiv.style("height", "auto");
    let pageBodyHeight = pageBodyDiv.elt.offsetHeight;
  }
  if (currentPage == 3) {
    AllItemsContainer();
    allItemsDiv.child(header());
    PageBodyContainer();
    allItemsDiv.child(pageBodyDiv);
    pageBodyDiv.child(
      createTextBox(
        myResources,
        0,
        0,
        bodyContentWidth,
        bodyContentHeight * 1.5,
        "left"
      )
    );
    allItemsDiv.child(footer());
    pageBodyDiv.style("height", "auto");
    allItemsDiv.style("height", "auto");
    let pageBodyHeight = pageBodyDiv.elt.offsetHeight;
  }
}
function addBannerImage(allItemsDiv, bannerHeight) {
  let bannerDiv = createDiv();
  bannerDiv.id("AllItems");
  bannerDiv.style("position", "relative");
  bannerDiv.style("width", "100%");
  bannerDiv.style("height", `${bannerHeight}px`);
  let bannerImg = createImg("imgs/homepg.png", "");
  bannerImg.id("AllItems");
  bannerImg.style("position", "absolute");
  bannerImg.style("width", "100%");
  bannerImg.style("height", `${bannerHeight}px`);
  bannerImg.style("object-fit", "cover");
  let logoImg = createImg("imgs/assemblylogo.png", "");
  logoImg.id("AllItems");
  logoImg.style("position", "absolute");
  logoImg.style("left", "50%");
  logoImg.style("transform", "translateX(-50%)");
  logoImg.style("top", `${(bannerHeight - 150) / 2}px`);
  logoImg.style("height", "160px");
  bannerDiv.child(bannerImg);
  bannerDiv.child(logoImg);
  allItemsDiv.child(bannerDiv);
}

function gridImages(buttonDiv, imgs, mylinks, mytext, cols) {
  buttonDiv.style("display", "grid");
  buttonDiv.style("grid-template-columns", "repeat(" + cols + ", 1fr)");
  buttonDiv.style("grid-gap", "20px");
  buttonDiv.style("position", "relative");
  buttonDiv.style("margin-top", "20px");
  buttonDiv.style("padding", "20px 20px");
  buttonDiv.style("aspect-ratio", "1/1");

  for (let i = 0; i < imgs.length; i++) {
    let buttons = createButton("");
    buttons.id("imgButtons");
    buttons.style("height", "auto");
    buttons.style("border", "none");
    buttons.style("border-radius", "5px");
    buttons.style("padding", "15px");
    buttons.style("text-align", "center");
    buttons.style("aspect-ratio", "1/1.15");
    buttons.style("background-image", "url(" + imgs[i] + ")");
    buttons.style("background-size", "contain");
    buttons.style("background-size", "auto 80%");
    buttons.style("background-position", "center top 15%");
    buttons.style("background-padding", "15px");
    buttons.style("background-repeat", "no-repeat");
    buttons.style("border", "1px solid black");
    buttons.style("border-color", p.imgButtonOutline);

    buttonDiv.child(buttons);
    let textDiv = createDiv(mytext[i]);
    textDiv.id("imgText");
    textDiv.style("font-family", p.fontFamily);
    textDiv.style("text-align", "center");
    textDiv.style("top", buttons.elt.clientHeight / 2.5 + "px");
    textDiv.style("max-width", buttons.elt.clientWidth - 30 + "px");
    textDiv.style("padding", "0px");

    textDiv.style("margin-right", "-50px");
    textDiv.style("white-space", "nowrap");
    textDiv.style("text-overflow", "ellipsis");
    textDiv.style("overflow", "hidden");
    textDiv.style("position", "relative");
    buttons.child(textDiv);
    styleElement(buttons, textDiv);
    buttons.mouseClicked(() => {
      if (i + 1 == 1) {
        currentSection = i + 1;
        windowResized();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.open(mylinks[i], "_blank");
      }
    });
  }
}

function AllItemsContainer() {
  allItemsDiv = createDiv("");
  allItemsDiv.id("AllItems");
  allItemsDiv.style("position", "absolute");
  allItemsDiv.style("top", headerHeight - 1 + "px");
  allItemsDiv.style("height", "auto");
  allItemsDiv.style("width", "100%");
  allItemsDiv.style("display", "flex");
  allItemsDiv.style("flex-direction", "column");
  allItemsDiv.style("align-items", "center");
  allItemsDiv.style("background-color", p.backGround);
}
function PageBodyContainer() {
  pageBodyDiv = createDiv("");
  pageBodyDiv.id("pageBody");
  pageBodyDiv.style("box-sizing", "border-box");
  pageBodyDiv.style("position", "relative");
  pageBodyDiv.style("top", 0 + "px");
  pageBodyDiv.style("height", "auto");
  pageBodyDiv.style("width", bodyWidth + "px");
  pageBodyDiv.style("line-height", "1.5");
  pageBodyDiv.style("padding", p.bodypadding + "px");
  pageBodyDiv.style("overflow-x", "auto");
  styleElement(pageBodyDiv);
}

function createTextBox(text, x, y, w, h, allignment) {
  if (x + w > bodyContentWidth) {
    w = bodyContentWidth - x;
  }
  if (x < 0) {
    x = 0;
  }
  let textDiv = createDiv("");
  textDiv.id("text");
  textDiv.style("box-sizing", "border-box");
  textDiv.style("position", "relative");
  textDiv.style("top", y + "px");
  textDiv.style("height", "auto");
  textDiv.style("width", w + "px");
  textDiv.style("left", x + "px");
  textDiv.style("padding", "30px");
  textDiv.style("line-height", "1.5");
  styleElement(textDiv);
  let lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let lineDiv = createDiv("");
    lineDiv.id("text");
    lineDiv.parent(textDiv);
    lineDiv.style("display", "flex");
    lineDiv.style("flex-direction", "row");
    lineDiv.style("align-items", "center");
    lineDiv.style("justify-content", allignment);
    let match = /<img.*?>/g.exec(line);
    if (match) {
      let beforeText = line.slice(0, match.index);
      if (beforeText) {
        let beforeDiv = createDiv(beforeText);
        beforeDiv.id("text");
        beforeDiv.parent(lineDiv);
      }
      let imageDiv = createDiv(match[0]);
      imageDiv.id("imgText");
      imageDiv.style("margin-top", "30px");
      imageDiv.style("margin-bottom", "30px");
      imageDiv.parent(lineDiv);
      let afterText = line.slice(match.index + match[0].length);
      if (afterText) {
        let afterDiv = createDiv(afterText);
        afterDiv.id("text");
        afterDiv.parent(lineDiv);
      }
    } else {
      let titleMatch = /<h(\d)>(.*?)<\/h\1>/g.exec(line);
      if (titleMatch) {
        let titleDiv = createDiv(titleMatch[2]);
        titleDiv.id("text");
        titleDiv.parent(textDiv);
        styleElement(titleDiv);
      } else {
        let textDiv = createDiv(line);
        textDiv.id("text");
        textDiv.style("margin-bottom", "20px");
        textDiv.parent(lineDiv);
        styleElement(textDiv);
      }
      let h1Tags = document.getElementsByTagName("h1");
      for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.fontFamily = p.fontFamily;
        h1Tags[i].style.fontSize = "18px";
      }
    }
  }

  let links = textDiv.elt.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = p.linkColor;
    links[i].style.textDecoration = "underline";
  }

  let images = textDiv.elt.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.maxWidth = "100%";
  }
  return textDiv;
}
function header() {
  let headerDiv = createDiv("");
  headerDiv.id("header");
  headerDiv.style("height", headerHeight + "px");
  headerDiv.style("box-sizing", "border-box");
  headerDiv.style("position", "fixed");
  headerDiv.style("top", "0");
  headerDiv.style("width", "100%");
  headerDiv.style("z-index", "100");
  styleElement(headerDiv);
  let buttonDiv = createDiv("");
  buttonDiv.id("buttonContainer");
  headerDiv.child(buttonDiv);
  drawPageButtons(buttonDiv);
}
function footer() {
  let footerDiv = createDiv("");
  footerDiv.id("footer");
  footerDiv.style("position", "relative");
  footerDiv.style("bottom", 0);
  footerDiv.style("height", "100px");
  footerDiv.style("width", "100%");
  styleElement(footerDiv);
  return footerDiv;
}
function drawPageButtons(buttonDiv) {
  buttonDiv.style("display", "flex");
  buttonDiv.style("justify-content", "flex-start");
  buttonDiv.style("left", borderWidth + "px");
  buttonDiv.style("position", "absolute");
  buttonDiv.style("margin-top", "18px");
  for (let i = 0; i < PageTitles.length; i++) {
    let buttons = createButton(PageTitles[i]);
    buttons.id("pageButtons");
    buttons.style("height", "25px");
    buttons.style("margin", "0 5px");
    buttons.style("border", "none");
    buttons.style("border-radius", "5px");
    buttons.style("padding", "0px 8px");
    buttons.style("padding-bottom", "2px");
    buttons.style("text-align", "center");
    styleElement(buttons, i);
    buttons.mouseClicked(() => {
      currentPage = i;
      currentSection = 0;
      windowResized();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    buttonDiv.child(buttons);
  }
}
function styleElement(myElement, page) {
  if (myElement.elt.id === "text") {
    myElement.style("background-color", p.textBox);
    myElement.style("font-family", p.fontFamily);
    myElement.style("color", p.textColor);
    myElement.style("font-size", p.textSize + "px");
  }
  if (myElement.elt.id === "pageBody") {
    myElement.style("background-color", p.pageBody);
  }
  if (myElement.elt.id === "header") {
    myElement.style("background-color", p.headerColor);
  }
  if (myElement.elt.id === "footer") {
    myElement.style("background-color", p.footerColor);
  }
  if (myElement.elt.id === "pageButtons") {
    myElement.style("font-family", p.fontFamily);
    myElement.style("font-size", p.buttonTextSize + "px");
    if (page == currentPage) {
      myElement.elt.style.backgroundColor = p.pageButtonHover;
      myElement.elt.style.color = p.pageButtonHoverTxt;
    } else {
      myElement.elt.style.backgroundColor = p.pageButtons;
      myElement.elt.style.color = p.pageButtonTxt;
    }
    myElement.elt.addEventListener("mouseover", () => {
      myElement.style("cursor", "pointer");
      myElement.elt.style.backgroundColor = p.pageButtonHover;
      myElement.elt.style.color = p.pageButtonHoverTxt;
    });
    myElement.elt.addEventListener("mouseout", () => {
      myElement.style("cursor", "default");
      if (page == currentPage) {
        myElement.elt.style.backgroundColor = p.pageButtonHover;
        myElement.elt.style.color = p.pageButtonHoverTxt;
      } else {
        myElement.elt.style.backgroundColor = p.pageButtons;
        myElement.elt.style.color = p.pageButtonTxt;
      }
    });
  }
  if (myElement.elt.id === "imgButtons") {
    page.style("font-family", p.fontFamily);
    page.style("letter-spacing", "1px");
    page.style("font-size", "1.6vw");
    page.style("color", "white");
    myElement.style("transition", "transform 0.1s ease");
    // page.style(
    //   "text-shadow",
    //   "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000"
    // );
    myElement.elt.style.backgroundColor = p.pageButtons;
    myElement.elt.style.color = p.pageButtonTxt;
    myElement.elt.addEventListener("mouseover", () => {
      //page.style("font-size", "1.6vw");
      // myElement.elt.style.backgroundColor = "rgb(0,0,0,0.25)";
      myElement.elt.style.color = p.pageButtonHoverTxt;
      myElement.style("cursor", "pointer");
      myElement.style("transform", "scale(1.01)");
      myElement.style("filter", "brightness(105%)");
    });
    myElement.elt.addEventListener("mouseout", () => {
      // page.style("font-size", "1.6vw");
      myElement.elt.style.backgroundColor = p.pageButtons;
      myElement.elt.style.color = p.pageButtonTxt;
      myElement.style("cursor", "default");
      myElement.style("transform", "scale(1.0)");
      myElement.style("filter", "brightness(100%)");
    });
  }
}
function windowResized() {
  let currentScroll = window.pageYOffset;
  let element;

  element = select("#AllItems");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#header");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#footer");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#text");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#buttonContainer");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#imgText");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#pageBody");
  if (element) {
    garbageCan.push(element);
  }
  element = select("#pageButtons");
  if (element) {
    garbageCan.push(element);
  }
  for (let i = 0; i < garbageCan.length; i++) {
    garbageCan[i].remove();
  }
  let buttons = selectAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();
  }
  garbageCan = [];
  resizeCanvas(window.innerWidth, window.innerHeight * 1.1);
  headerHeight = 60;
  footerHeight = window.innerHeight * 0.1;
  borderWidth = width / 7;
  bodyWidth = width - borderWidth * 2;
  bodyContentWidth = width - borderWidth * 2 - p.bodypadding * 2;
  bodyHeight = height - headerHeight - footerHeight;
  bodyContentHeight = height - headerHeight - footerHeight - p.bodypadding * 2;
  drawElements();
  window.scrollTo(0, currentScroll);
}
function Palette() {
  palette = [
    {
      Theme: "Dark",
      fontFamily: "Tahoma, Arial, sans-serif",
      backGround: color(15),
      bodypadding: 1,
      pageBody: color(16),
      textBox: color(13),
      textColor: color(225),
      textSize: 16,
      linkColor: color(0, 150, 255),
      headerColor: color(18),
      footerColor: color(18),
      pageButtons: color(0, 0),
      pageButtonTxt: color(225),
      pageButtonHover: color(40, 180),
      pageButtonHoverTxt: color(225),
      buttonTextSize: 17,
      imgButtonOutline: color(200, 30),
    },
    {
      Theme: "Light",
      fontFamily: "Tahoma, Arial, sans-serif",
      backGround: color(15),
      bodypadding: 1,
      pageBody: color(16),
      textBox: color(13),
      textColor: color(225),
      textSize: 16,
      linkColor: color(0, 150, 255),
      headerColor: color(18),
      footerColor: color(18),
      pageButtons: color(0, 0),
      pageButtonTxt: color(225),
      pageButtonHover: color(40, 180),
      pageButtonHoverTxt: color(225),
      buttonTextSize: 17,
      imgButtonOutline: color(200, 30),
    },
  ];
  p = palette[theme];
}
