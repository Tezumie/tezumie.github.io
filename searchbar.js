let searchInput;
let searchButton;
let searchResultsDiv;
let resultDivs = [];

function setupsearchbar() {
  // Create the search input and button
  searchInput = createInput();
  searchInput.class("search-bar");
  searchInput.attribute("placeholder", " Type to search");
  texts.push(searchInput);
  searchInput.size(width - border * 2 - 55, 25);
  searchInput.style("position", "fixed");
  searchInput.style("left", border + "px");
  searchInput.style("top", 10 + "px");
  searchInput.style("z-index", "1");
  searchInput.style("background", p.scrollbartrack);
  searchInput.style("border", "2px solid " + p.textBoxBorder.toString());
  searchInput.style("outline", "none");
  searchInput.style("font-family", p.fontFamily);
  searchInput.style("color", p.textColor);
  searchInput.style("border-radius", "0.4vw");
  searchInput.input(searchText);
  searchInput.mouseOver(function () {
    if (Brightness == 0) {
      searchInput.style("filter", "brightness(120%)");
    } else {
      searchInput.style("filter", "brightness(97%)");
    }
    searchInput.style("transform", "scale(1.002)");
  });
  searchInput.mouseOut(function () {
    searchInput.style("filter", "brightness(100%)");
    searchInput.style("transform", "scale(1.0)");
  });

  searchButton = createButton("Search");
  searchButton.size(60, 30);
  searchButton.style("position", "fixed");
  searchButton.style("left", width - border - 40 + "px");
  searchButton.style("top", 10 + "px");
  searchButton.style("z-index", "1");
  searchButton.style("background-color", p.searchbuttonbg);
  searchButton.style("color", p.buttonTxt);
  searchButton.style("font-family", p.fontFamily);
  searchButton.style("border-radius", "0.4vw");
  searchButton.style("border", "none");
  searchButton.mouseOver(function () {
    searchButton.style("background-color", p.searchbuttonbgh);
    searchButton.style("color", p.buttonTxth);
    searchButton.style("cursor", "pointer");
  });

  searchButton.mouseOut(function () {
    searchButton.style("background-color", p.searchbuttonbg);
    searchButton.style("color", p.buttonTxt);
    searchButton.style("cursor", "default");
  });
  searchButton.mousePressed(searchText);

  // Create a div to hold the search results
  searchResultsDiv = createDiv();
  searchResultsDiv.position(border, 36);
  searchResultsDiv.style("overflow-y", "scroll");
  searchResultsDiv.style("max-height", "150px");
  searchResultsDiv.style("max-width", width - border * 2 + "px");
  searchResultsDiv.elt.setAttribute("readOnly", true);
  searchResultsDiv.style("background", p.searchResultBox);
  searchResultsDiv.style("font-family", p.fontFamily);
  searchResultsDiv.style("color", p.textColor);
  searchResultsDiv.style("resize", "none");
  searchResultsDiv.style("position", "fixed");
  searchResultsDiv.style("z-index", "1");
  searchResultsDiv.style("border-radius", "0.4vw");
  searchResultsDiv.style("border", "1px solid black");
  searchResultsDiv.style("border-color", p.textBoxBorder);
  searchResultsDiv.style("outline", "none");
  searchResultsDiv.style("padding", "10px");
  searchResultsDiv.style("overflow", "auto");
  searchResultsDiv.style(
    "scrollbar-color",
    str(p.scrollbarslider) + " " + str(p.scrollbartrack)
  );
  searchResultsDiv.style("scrollbar-width", "thin");
  searchResultsDiv.style("display", "none");
  mousePressed = function (event) {
    if (event.target != searchResultsDiv.elt) {
      searchResultsDiv.style("display", "none");
      resultDivs.forEach((resultDiv) => resultDiv.remove());
      resultDivs = [];
    }
  };
}

function searchText() {
  let matchedPage;
  const query = searchInput.value().toLowerCase().trim();
  const regex = new RegExp(query.replace(/\[/g, "\\["), "i");
  const fileUrl = "myTextFile.txt";
  resultDivs.forEach((resultDiv) => resultDiv.remove());
  resultDivs = [];
  loadStrings(fileUrl, function (data) {
    let results = [];

    for (let i = 0; i < data.length; i++) {
      const line = data[i];
      const match = /\[(\d+\.\d+)\]/.exec(line);
      if (match) {
        matchedPage = parseFloat(match[1]);
        continue; // skip this line if it matches the [digit.digit] format
      }
      if (line.toLowerCase().includes(query)) {
        results.push({ text: line, page: matchedPage });
      }
    }
    searchResultsDiv.html("");
    if (results.length === 0) {
      searchResultsDiv.html("No results found.");
    } else {
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const resultText = result.text;
        const page = result.page;
        const resultDiv = createDiv(resultText);
        resultDiv.class("search-result");
        resultDiv.style("max-width", width - border * 2 + "px");
        resultDiv.style("overflow", "hidden");
        resultDiv.style("text-overflow", "ellipsis");
        resultDiv.style("white-space", "nowrap");
        searchResultsDiv.style("display", "block");
        resultDiv.mouseOver(function () {
          resultDiv.style("cursor", "pointer");
          resultDiv.style("filter", "brightness(110%)");
          resultDiv.style("transform", "scale(1.01)");
        });
        resultDiv.mouseOut(function () {
          resultDiv.style("cursor", "default");
          resultDiv.style("filter", "brightness(100%)");
          resultDiv.style("transform", "scale(1.0)");
        });
        resultDiv.mousePressed(function () {
          if (page !== null) {
            searchResultsDiv.style("display", "none");
            currentPage = int(page);
            console.log("Current page:", currentPage);
            resultDivs.forEach((resultDiv) => resultDiv.remove());
            resultDivs = [];
            ResizeCanvas();
          }
        });
        searchResultsDiv.child(resultDiv);
        resultDivs.push(resultDiv);
      }
    }
  });
}
