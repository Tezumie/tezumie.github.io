let Canvas;
let header, footer, border;
let buttonImg;
let pages = [" ☼ ", "Home", "Marketplace", "Series", "About", "Resources"];
let pageindex = [-1, 0, 1, 2, 3, 4];
let myTextFile;
let texts = [];
let pageText = "";
let currentPage = 0;
let currentSection = 0;
let txt;
let p, palette;
let Brightness = 0;
let pageHeight;
function preload() {
  myTextFile = loadStrings("myTextFile.txt");
}
function setup() {
  Canvas = createCanvas(
    floor(window.innerWidth),
    floor(window.innerWidth * 1.15)
  );
  Palette();
  drawPage();
  ResizeCanvas();
}
function draw() {
  //drawbg();
  if (window.innerWidth != Canvas.width) {
    ResizeCanvas();
  }
}
function drawPage() {
  header = 50;
  footer = 100;
  border = width / 6;
  pageGridHeight = 30;
  background(p.canvasbackground);
  drawPageElements();
  PagesGrid(border, header, pageGridHeight, width / 100);
}
function drawPageElements() {
  setText();
  if (currentPage == 0) {
    homeImage(0, header * 1.7, width - 19 , height / 11);
    setTxtArea(
      border,
      header * 2.05 + height / 11,
      width - border * 2,
      height - (header * 2.05 + height / 11) - footer,
      pageText
    );
  }
  if (currentPage == 1) {
    setTxtArea(
      border,
      header * 2,
      width - border * 2,
      height - header * 2 - footer,
      pageText
    );
    Grid(
      border,
      header * 3,
      width - border * 2,
      height - header * 3 - footer,
      3,
      10,
      myImages,
      myProjects,
      imgTxt
    );
  } else if (currentPage == 2) {
    let y = header * 2;
    let h = (height - header * 4) / 15;
    let myPages = [];
    currentSection = 0;
    for (let i = 0; i < 12; i++) {
      setText();
      myPages.push(pageText);
      setTxtArea(
        h + border + 20,
        y,
        width - border * 2 - h - 20,
        h,
        myPages[i]
      );
      imageButton(border, y, h, h, 0, 1, myImages[i], myProjects[i], imgTxt[i]);
      y += (height - header) / 13;
      currentSection += 1;
    }
  } else if (currentPage == 4) {
    setTxtArea(
      border,
      header * 2,
      width - border * 2,
      (height - header * 2 - footer) / 5,
      pageText
    );
  }
  if (currentPage == 3) {
    let tz = int(random(myImagesTezumie.length - 0.01));
    imageButton(
      border * 1.05,
      header * 2 * 1.05,
      (width - header * 2 - footer) / 5,
      (width - header * 2 - footer) / 5,
      0,
      1,
      myImagesTezumie[tz],
      myProjectsTezumie[tz],
      imgTxtTezumie[tz]
    );
    setTxtArea(
      border * 1.05 * 2.05,
      header * 2,
      width - border * 2.1 - border,
      (width - header * 2 - footer) / 5,
      pageText
    );
    Grid(
      border,
      header * 3 + (width - header * 2 - footer) / 5,
      width - border * 2,
      height - (header * 2 + (width - header * 2 - footer) / 5) - footer,
      3,
      10,
      myImagesTezumie,
      myProjectsTezumie,
      imgTxtTezumie
    );
  }
}
function ResizeCanvas(theme) {
  for (let i = 0; i < texts.length; i++) {
    texts[i].remove();
  }
  currentSection = 0;
  removeButtons();
  clear();
  if (currentPage == 0) {
    pageHeight = floor(window.innerWidth * 2.56);
  } else if (currentPage == 2) {
    pageHeight = floor(window.innerWidth * 4);
  } else {
    pageHeight = floor(window.innerHeight * 1.15);
  }
  resizeCanvas(floor(window.innerWidth), pageHeight);
  Palette();
  drawPage();
  setupsearchbar();
  if (theme != true) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
function Palette() {
  palette = [
    {
      name: "Dark",
      fontFamily: "Tahoma, Arial, sans-serif",
      canvasbackground: color(15),
      backgroundTop: color(20, 235),
      backgroundBottom: color(20, 235),
      backgroundCenter: color(0, 160),
      header: color(18),
      footer: color(15),
      buttonBg: color(0, 0),
      buttonBgh: color(40, 180),
      buttonTxt: color(225),
      buttonTxth: color(225),
      textBoxBorder: color(40, 200),
      textBox: color(15, 190),
      textColor: color(225),
      textLink: color(104, 118, 255),
      imagebordercolor: color(225, 180),
      scrollbartrack: color(20),
      scrollbarslider: color(30),
      searchResultBox: color(10),
      searchbuttonbg: color(25),
      searchbuttonbgh: color(12),
      backgroundPattern1: color(200),
      backgroundPattern2: color(225),
      backgroundPattern3: color(200),
      backgroundPattern4: color(235),
      backgroundPatternStroke: color(80, 0, 255),
    },
    {
      name: "Light",
      fontFamily: "Tahoma, Arial, sans-serif",
      canvasbackground: color(255),
      backgroundTop: color(255, 150),
      backgroundBottom: color(255, 225),
      backgroundCenter: color(255, 225),
      header: color(255),
      footer: color(255),
      buttonBg: color(0, 0),
      buttonBgh: color(0, 20),
      buttonTxt: color(0),
      buttonTxth: color(0),
      textBoxBorder: color(225, 180),
      textBox: color(255, 190),
      textColor: color(0),
      textLink: color(0, 0, 200),
      imagebordercolor: color(225, 220),
      scrollbartrack: color(250),
      scrollbarslider: color(235),
      searchResultBox: color(255),
      searchbuttonbg: color(225),
      searchbuttonbgh: color(205),
      backgroundPattern1: color(200),
      backgroundPattern2: color(225),
      backgroundPattern3: color(200),
      backgroundPattern4: color(235),
      backgroundPatternStroke: color(80, 0, 255),
    },
  ];
  p = palette[Brightness];
}
