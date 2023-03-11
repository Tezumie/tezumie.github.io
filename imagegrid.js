let homeImages = ["imgs/homepg.png"];
let myImagesTezumie = [
  "tezumieimgs/ogTezumie.jpg",
  "tezumieimgs/Sprite.png",
  "tezumieimgs/TezumieSayan.png",
  "tezumieimgs/POTZ.png",
  "tezumieimgs/boredTezumie.png",
  "tezumieimgs/cryptoTezumie.png",
  "tezumieimgs/real.png",
  "tezumieimgs/softTezumie.png",
  "tezumieimgs/tezumiePOP.png",
];
let myProjectsTezumie = [
  "tezumieimgs/ogTezumie.jpg",
  "tezumieimgs/Sprite.png",
  "tezumieimgs/TezumieSayan.png",
  "tezumieimgs/POTZ.png",
  "tezumieimgs/boredTezumie.png",
  "tezumieimgs/cryptoTezumie.png",
  "tezumieimgs/real.png",
  "tezumieimgs/softTezumie.png",
  "tezumieimgs/tezumiePOP.png",
];
let imgTxtTezumie = [
  "Tezumie",
  "Tezumie 1-1",
  "Super Tezumie",
  "POTZ Tezumie",
  "Bored Tezumie",
  "Tezumie Punk",
  "Real Tezumie",
  "Soft Tezumie",
  "POP! Tezumie",
];
let myImages = [
  "imgs/asmbly.png",
  "https://256art.s3.eu-central-1.amazonaws.com/mainnet/0xf45a8211413e78f9200958dc10e0e99786ab11d4/small/0.png",
  "https://gateway.fxhash.xyz/ipfs/QmcYgHeuUumBZj1aW6vrDmqwp3vKh4xKgg22JvMUxMUXVZ",
  "https://gateway.fxhash.xyz/ipfs/QmYJa2R7C5aCmSnPQarvm4kV3j8RKeDMcHRcXc8e9Y99Bc",
  "https://gateway.fxhash.xyz/ipfs/QmPUrtigB1sLUovgYjeMrxWui7juDccsTydAHipUVb1TBq",
  "imgs/ej.png",
  "https://gateway.fxhash.xyz/ipfs/QmRRHo9hgSRzgN2F2ewfcrCd5bSi152ifxxhGvMzTy7XUG",
  "imgs/trn.png",
  "https://gateway.fxhash.xyz/ipfs/QmZBNTokbkRCdjaZqjswrCh5xiRPuMmzV8JLPVa3XxJCHQ",
  "https://gateway.fxhash.xyz/ipfs/QmUSA8dYszGmz9QuKUwYXaMTBfmELEkbTpdCNiQrph5UAQ",
  "https://gateway.fxhash.xyz/ipfs/QmetvQiweWBHsno6rJziweJtyP7QkTT7JPsFrnpSFuoLRV",
  "https://gateway.fxhash.xyz/ipfs/QmShywnVKq2VT5zXnfsNEZfFAnYqVgNfvX1g8LDE9VJ1AA",
];
let myProjects = [
  "https://twitter.com/Tezumies",
  "https://256art.com/project/15",
  "https://www.fxhash.xyz/generative/12227",
  "https://www.fxhash.xyz/generative/13189",
  "https://www.fxhash.xyz/generative/16160",
  "https://www.fxhash.xyz/generative/10965",
  "https://www.fxhash.xyz/generative/14681",
  "https://www.fxhash.xyz/generative/11594",
  "https://www.fxhash.xyz/generative/10736",
  "https://www.fxhash.xyz/generative/10616",
  "https://www.fxhash.xyz/generative/17166",
  "https://www.fxhash.xyz/generative/10287",
];
let imgTxt = [
  "Assembly (minting soon)",
  "Entangled",
  "(un)existing",
  "Riverscape",
  "Natural order.chaos",
  "Enlightened Journey",
  "Lucidity",
  "Torn",
  "Topographic Abstraction",
  "Hardware",
  "Tezumie 1-1",
  "Tezumie",
];
function Grid(x, y, sizeX, sizeY, rows, cols, myImages, myProjects, imgTxt) {
  let cellSize = floor(sizeX / rows);
  let div = createElement("div", "");
  texts.push(div);
  div.elt.setAttribute("readOnly", true);
  div.style("background", p.textBox);
  div.style("font-family", "Tahoma");
  div.style("color", p.textColor);
  div.style("resize", "none");
  div.style("left", x + "px");
  div.style("top", y + "px");
  div.style("position", "absolute");
  div.style("z-index", "0");
  div.size(sizeX, sizeY);
  div.style("border-radius", "0.4vw");
  div.style("border", "1px solid black");
  div.style("border-color", p.textBoxBorder);
  div.style("outline", "none");
  div.style("padding", "10px");
  div.style("overflow", "auto");
  div.style(
    "scrollbar-color",
    str(p.scrollbarslider) + " " + str(p.scrollbartrack)
  );
  div.style("scrollbar-width", "thin");
  let imageIndex = 0;
  for (let i = y; i < y + cellSize * cols; i += cellSize) {
    for (let j = x; j < x + sizeX; j += cellSize) {
      if (imageIndex < myImages.length) {
        let btn = createElement("button");
        btn.style("left", j + "px");
        btn.style("top", i + "px");
        btn.style("width", cellSize + "px");
        btn.style("height", cellSize + "px");
        btn.style("background-color", "transparent");
        btn.style("border", "none");
        btn.style("outline", "none");
        btn.style("margin-left", "5px");
        btn.style("margin-right", "-10px");
        btn.style("padding", "20px");
        let img = createImg(myImages[imageIndex], "");
        texts.push(img);
        img.style("width", "100%");
        img.style("height", "100%");
        img.style("object-fit", "contain");
        //img.style("border", "1px solid " + p.imagebordercolor);
        img.style("border-radius", "0.4vw");
        btn.child(img);
        let text = createElement("div", imgTxt[imageIndex]);
        texts.push(text);
        text.style("font-family", p.fontFamily);
        text.style("color", p.textColor);
        text.style("text-align", "center");
        text.style("margin-top", "2px");
        text.style("max-width", cellSize + "px");
        text.style("white-space", "nowrap");
        text.style("text-overflow", "ellipsis");
        text.style("overflow", "hidden");
        btn.child(text);
        div.child(btn);
        img.mouseClicked(
          (function (index) {
            return function () {
              window.open(myProjects[index], "_blank");
            };
          })(imageIndex)
        );
        img.mouseOver(
          (function (index) {
            return function () {
              img.style("cursor", "pointer");
              img.style("filter", "brightness(85%)");
              img.style("transform", "scale(1.025)");
            };
          })(imageIndex)
        );
        img.mouseOut(
          (function (index) {
            return function () {
              img.style("cursor", "default");
              img.style("filter", "brightness(100%)");
              img.style("transform", "scale(1.0)");
            };
          })(imageIndex)
        );
        imageIndex++;
      } else {
        break;
      }
    }
    if (imageIndex >= myImages.length) {
      break;
    }
  }
  return div;
}
function imageButton(
  x,
  y,
  sizeX,
  sizeY,
  rows,
  cols,
  myImages,
  myProjects,
  imgTxt
) {
  let cellSize = floor(sizeX);
  let div = createElement("div", "");
  texts.push(div);
  div.elt.setAttribute("readOnly", true);
  //div.style("background", p.textBox);
  div.style("font-family", "Tahoma");
  div.style("color", p.textColor);
  div.style("resize", "none");
  div.style("left", x + "px");
  div.style("top", y + "px");
  div.style("position", "absolute");
  div.style("z-index", "0");
  div.size(sizeX, sizeY);
  div.style("border-radius", "0.4vw");
  //div.style("border", "1px solid black");
  //div.style("border-color", p.textBoxBorder);
  div.style("outline", "none");
  div.style("padding", "0px");
  div.style("overflow", "none");
  div.style(
    "scrollbar-color",
    str(p.scrollbarslider) + " " + str(p.scrollbartrack)
  );
  div.style("scrollbar-width", "thin");
  let btn = createElement("button");
  btn.style("left", 0 + "px");
  btn.style("top", 0 + "px");
  btn.style("width", cellSize + "px");
  btn.style("height", cellSize + "px");
  btn.style("background-color", "transparent");
  btn.style("border", "none");
  btn.style("outline", "none");
  btn.style("margin-left", "0px");
  btn.style("margin-right", "0px");
  btn.style("padding", "0px");
  let img = createImg(myImages, "");
  texts.push(img);
  img.style("width", "100%");
  img.style("height", "100%");
  img.style("object-fit", "contain");
  // img.style("border", "1px solid " + p.imagebordercolor);
  img.style("border-radius", "0.4vw");
  btn.child(img);
  let text = createElement("div", imgTxt);
  texts.push(text);
  text.style("font-family", p.fontFamily);
  text.style("color", p.textColor);
  text.style("text-align", "center");
  text.style("margin-top", "2px");
  txt.style("resize", "none");
  text.style("max-width", cellSize + "px");
  text.style("white-space", "nowrap");
  text.style("text-overflow", "ellipsis");
  text.style("overflow", "hidden");
  btn.child(text);
  div.child(btn);
  img.mouseClicked(function () {
    window.open(myProjects, "_blank");
  });
  img.mouseOver(function () {
    img.style("cursor", "pointer");
    img.style("filter", "brightness(85%)");
    img.style("transform", "scale(1.01)");
  });
  img.mouseOut(function () {
    img.style("cursor", "default");
    img.style("filter", "brightness(100%)");
    img.style("transform", "scale(1.0)");
  });
  return div;
}
function homeImage(x, y, sizeX, sizeY) {
  let div = createElement("div", "");
  texts.push(div);
 div.elt.setAttribute("readOnly", true);
  div.style("background", p.textBox);
  div.style("font-family", p.fontFamily);
  div.style("color", p.textColor);
  div.style("resize", "none");
  div.style("left", x + "px");
  div.style("top", y + "px");
  div.style("position", "absolute");
  div.style("z-index", "0");
  div.size(sizeX, sizeY);
  div.style("border-radius", "0.4vw");
  div.style("border", "1px solid black");
  div.style("border-color", p.textBoxBorder);
  div.style("outline", "none");
  
  div.style("padding", "0px");
div.style("overflow", "hidden");
  div.style(
    "scrollbar-color",
    str(p.scrollbarslider) + " " + str(p.scrollbartrack)
  );
  div.style("scrollbar-width", "thin");
  let btn = createElement("button");

  btn.style("left", 0 + "px");
  btn.style("top", 0 + "px");
  btn.style("width", sizeX + "px");
  btn.style("height", sizeY + "px");
  btn.style("background-color", "transparent");
  btn.style("border", "none");
  btn.style("outline", "none");
  btn.style("margin-left", "0px");
  btn.style("margin-right", "0px");
  btn.style("padding", "0px");
  let img = createImg(homeImages[0], "");
  texts.push(img);
  img.style("width", "100%");
  img.style("height", "100%");
  img.style("object-fit", "cover");
  // img.style("border", "1px solid " + p.imagebordercolor);
  img.style("border-radius", "0.0vw");
  btn.child(img);
  let lettersimg = createImg("imgs/assemblylogo.png", "");
  lettersimg.style("position", "absolute");
  lettersimg.style("width", "50%");
  lettersimg.style("height", "50%");
  lettersimg.style("top", "25%");
  lettersimg.style("left", "50%"); // adjust as needed
  lettersimg.style("transform", "translateX(-50%)"); // center horizontally
  lettersimg.style("object-fit", "contain");
  lettersimg.style("border-radius", "0.0vw");
  lettersimg.style("z-index", "22222222222222222222222"); // make lettersimg appear on top of img
  btn.child(lettersimg);
  div.child(btn);
  img.mouseClicked(function () {
    //  window.open(myProjects, "_blank");
  });
  img.mouseOver(function () {
    // img.style("cursor", "pointer");
    //img.style("filter", "brightness(85%)");
    //img.style("transform", "scale(1.01)");
  });
  img.mouseOut(function () {
    // img.style("cursor", "default");
    // img.style("filter", "brightness(100%)");
    // img.style("transform", "scale(1.0)");
  });
  return div;
}
