let loops = true;
let xoff = 0;
let yoff = 0;
let newy = 0;
let y2;
let colorNoise, myColor;
let maxrows;
function drawbg() {
  if (currentPage == 1||currentPage==0) {
    maxrows = 95;
  } else {
    maxrows = 28;
  }
  bg(
    -width * 0.2,
    0,
    width * 1.2,
    0,
    width / 15,
    width / 4,
    -width / 4,
    0,
    yoff,
    1
  );
  yoff += 0.0021;
  linearGradient(
    p.backgroundTop,
    p.backgroundBottom,
    width / 2,
    0,
    width / 2,
    height
  );
  rect(0, 0, width, height);
}
function bg(
  xstart,
  ystart,
  xend,
  yend,
  spacing,
  noiseMax,
  noiseMin,
  xoff,
  yoff,
  intensity
) {
  let yChange = 0;
  push();
  for (i = 0; i <= maxrows; i++) {
    let xoff = 0;
    beginShape();
    for (x = xstart; x <= xend; x += spacing) {
      y =
        map(x, xstart, xend, ystart, yend) +
        map(noise(xoff, yoff), intensity, -intensity, noiseMin, noiseMax);
      let mouser = dist(mouseX, mouseY + width / 8, x, y - yChange);
      if (mouser < width / 5) {
        newy = mouser / 5;
        newy = map(mouser, width / 5, 0, 0, width / 10);
      } else {
        newy = 0;
      }
      strokeWeight(width / 850);
      colorNoise = noise(xoff, yoff) * 255 + newy;
      if (mouser < width / 5) {
        y2 = -colorNoise / 2 - dist(mouseX, mouseY, x, y - yChange - newy) / 5;
      } else {
        y2 = -colorNoise / 2 - dist(mouseX, mouseY, x, y - yChange - newy) / 25;
      }
      myColor = colorMap(colorNoise);
      stroke(myColor);
      fill(p.backgroundTop);
      rect(x, y - yChange - newy, spacing, y2);
      strokeWeight(0.5);
      xoff += 0.03;
    }
    noiseMax += spacing;
    noiseMin += spacing;
    yoff += 0.04;
    yChange += spacing * 0.25;
  }
  pop();
}
function colorMap(value) {
  if (value < 85) {
    return color(p.backgroundTop);
  } else if (value >= 85 && value < 110) {
    colorMode(HSB);
    return color((2 * frameCount) % 360, 40, 100);
  } else if (value >= 110 && value < 150) {
    return color(p.backgroundTop);
  } else if (value >= 150 && value < 205) {
    colorMode(HSB);
    return color((2 * frameCount) % 360, 40, 100);
  } else {
    return color(p.backgroundTop);
  }
}
function linearGradient(color1, color2, startX, startY, endX, endY) {
  let gradient = drawingContext.createLinearGradient(
    startX,
    startY,
    endX,
    endY
  );
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  drawingContext.fillStyle = gradient;
}
