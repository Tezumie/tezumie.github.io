function setText() {
  pageText = "";
  let sectionStr =
    currentSection < 10 ? "0" + currentSection : currentSection.toString();
  let mySection = parseFloat(currentPage + "." + sectionStr);
  for (let i = 0; i < myTextFile.length; i++) {
    let line = myTextFile[i];
    if (line.startsWith("[")) {
      let section = parseFloat(line.substring(1));
      if (section === mySection) {
        i++;
        while (i < myTextFile.length) {
          line = myTextFile[i];
          let nextSection = parseFloat(line.substring(1));
          if (!isNaN(nextSection) && nextSection > mySection) {
            break;
          }
          pageText += line + "\n";
          i++;
        }
        break;
      } else if (section > mySection) {
        break;
      }
    }
  }
}

function setTxtArea(x, y, w, h, text) {
  txt = createElement("txt", "");
  texts.push(txt);
  txt.elt.setAttribute("readOnly", true);
  txt.style("background", p.textBox);
  txt.style("font-family", p.fontFamily);
  txt.style("color", p.textColor);
  txt.style("resize", "none");
  txt.style("left", x + "px");
  txt.style("top", y + "px");
  txt.style("position", "absolute");
  txt.style("z-index", "0");
  txt.size(w, h);
  txt.style("border-radius", "0.4vw");
  txt.style("border", "1px solid black");
  txt.style("border-color", p.textBoxBorder);
  txt.style("outline", "none");
  txt.style("padding", "10px");
  txt.style("overflow", "auto");
  txt.style(
    "scrollbar-color",
    str(p.scrollbarslider) + " " + str(p.scrollbartrack)
  );
  txt.style("scrollbar-width", "thin");
  let linkRegex = /{([^}]+)}/g;
  let imgRegex = /<img[^>]+src="([^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"[^>]*>/g;
  let lastIndex = 0;
  let matches;
  let tags = [];
  let d = "left";
  while ((matches = linkRegex.exec(text)) !== null) {
    tags.push({
      index: matches.index,
      end: linkRegex.lastIndex,
      type: "link",
      content: matches[1],
    });
  }
  while ((matches = imgRegex.exec(text)) !== null) {
    tags.push({
      index: matches.index,
      end: imgRegex.lastIndex,
      type: "image",
      content: matches[0],
    });
  }
  tags.sort((a, b) => a.index - b.index);
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    let beforeTag = text.substring(lastIndex, tag.index);
    if (beforeTag !== "") {
      let beforeTagNode = document.createTextNode(beforeTag);
      txt.elt.appendChild(beforeTagNode);
    }
    if (tag.type === "link") {
      let linkNode = createA(tag.content, tag.content);
      linkNode.style("color", p.textLink);
      linkNode.style("text-decoration", "underline");
      txt.elt.appendChild(linkNode.elt);
    } else if (tag.type === "image") {
      let imgDiv = createDiv("");
      imgDiv.style("padding", "10px");
      imgDiv.style("padding", "10px");
      let ww = (width * 1.3) / tag.content.match(/width="([^"]+)"/)[1];
      let hh = (width * 1.3) / tag.content.match(/height="([^"]+)"/)[1];
      let imgNode = createImg(tag.content.match(/src="([^"]+)"/)[1], "");
      imgNode.attribute("width", ww);
      imgNode.attribute("height", hh);
      //imgNode.style("border", "1px solid " + p.imagebordercolor);
      imgNode.style("transform", "translateX" + "(" + ww/2.05 + "px" + ")"); // center horizontally
      imgNode.style("border-radius", "0.2vw");
      imgNode.style("object-fit", "contain");
      imgDiv.elt.appendChild(imgNode.elt);
      txt.elt.appendChild(imgDiv.elt);
    }
    lastIndex = tag.end;
  }
  let remainingText = text.substring(lastIndex);
  if (remainingText !== "") {
    let remainingTextNode = document.createTextNode(remainingText);
    txt.elt.appendChild(remainingTextNode);
  }
  let contentLines = txt.elt.innerHTML.split("\n");
  let newContent = contentLines.join("<br>");
  txt.elt.innerHTML = newContent;
  txt.attribute("contentEditable", false);
  txt.elt.addEventListener("click", function (e) {
    if (e.target.tagName == "A") {
      window.open(e.target.href, "_blank");
      e.preventDefault();
    }
  });
  return txt;
}
