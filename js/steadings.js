function MapObject(name, x, y, img) {

  this.name = name || "";
  this.x = x || 0;
  this.y = y || 0;
  this.img = img;
  
}

// Draws this shape to a given context
MapObject.prototype.draw = function(ctx) {
  ctx.drawImage(this.img,this.x, this.y);
  //TODO draw this.name (above or below??)
}

// Determine if a point is inside the shape's bounds, for purposes of click events
MapObject.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

var image = new Image();
image.src = 'images/rabbitredthumb.png';

var icons = new Image();
icons.src = "images/cowboyspritestrip.png";

// image.onload = function(){
//   context.drawImage(base_image, 100, 100);
// }
