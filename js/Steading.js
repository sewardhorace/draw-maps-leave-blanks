function Steading(steading) {
  //TODO pass an object to the constructor rather than all these params

  this.x = steading.x || 0;
  this.y = steading.y || 0;
  this.img = steading.img;
  this.offsetX = steading.offsetX || 0;
  this.offsetY = steading.offsetY || 0;

  this.name = steading.name || "";
}

// Draws this shape to a given context
Steading.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.offsetX, this.offsetY, 64, 64, this.x, this.y, 64, 64);
  //TODO draw this.name (above or below??)
}

// Determine if a point is inside the shape's bounds, for purposes of click events
Steading.prototype.contains = function(mx, my) {
  //TODO modify this to accomodate images

  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

var image = new Image();
image.src = 'images/rabbitredthumb.png';

var icons = new Image();
icons.src = "images/cowboyspritestrip.png";
