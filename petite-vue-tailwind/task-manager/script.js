function one(color, fontSize, background, txt) {
  var message = "%c" + txt;
  var style = color;
  style += fontSize;
  style += background;

  console.log(message, style);
}

one("blue", "35px", "yellow", "Hollow there!!!");
