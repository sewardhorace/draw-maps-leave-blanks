function Popup(){

  var self = this;
  this.onAddCallback;

  this.hide = function(){
    self.popupElement.className = "hidden";
    self.popupElement.setAttribute('style', 'top:0;left:0;');
  }
  this.show = function(x, y){
    self.popupElement.className = "";
    self.popupElement.setAttribute('style', 'top:'+y+'px;left:'+x+'px;');
    self.objectTitleInput.focus();
  }

  this.selectObjectOptions = function(x, y, callback){
    self.onAddCallback = callback;
    self.show(x, y);
  }

  this.keyPressed = function(e){
    if(e.keyCode=='13'){
      self.addButtonClicked();
    }
  }

  this.addButtonClicked = function(e) {
    var shape = {
      color: self.nameInput.value,
      height: parseInt(self.heightInput.value) || 20,
      width: parseInt(self.widthInput.value) || 20,
    }
    self.nameInput.value = "";
    self.heightInput.value = "";
    self.widthInput.value = "";

    self.hide();
    self.onAddCallback(shape);
  }
  this.cancelButtonClicked = function(e) {
    self.hide();
    self.objectTitleInput.value = "";
  }
  this.optionItemClicked = function(e) {
    var allItems = document.getElementsByClassName("popup-item");
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].className = "popup-item";
    }
    var option = this;
    option.className = option.className + " selected";
  }

  function init() {
    //construct and style the popup element
    var popup = document.createElement("div");
    popup.setAttribute('id', 'popup');
    popup.setAttribute('class', 'hidden');

    var nav = document.createElement("div");
    nav.setAttribute('class', 'popup-nav');

    var navItem1 = document.createElement("input");
    navItem1.setAttribute('class', 'nav-title nav-left');
    navItem1.setAttribute('placeholder', 'Title (optional)');
    self.objectTitleInput = navItem1;

    var navItem2 = document.createElement("div");
    navItem2.onclick = self.cancelButtonClicked;
    navItem2.setAttribute('class', 'nav-item nav-right');
    navItem2.appendChild(document.createTextNode("x"));

    var navItem3 = document.createElement("div");
    navItem3.onclick = self.addButtonClicked;
    navItem3.setAttribute('class', 'nav-item nav-right');
    navItem3.appendChild(document.createTextNode("+"));

    var navItems = [
      navItem1,
      navItem2,
      navItem3,
    ];

    for (i in navItems){
      nav.appendChild(navItems[i]);
    }
    popup.appendChild(nav);

    var body = document.createElement("div");
    body.setAttribute('class', 'popup-window');

    var list = document.createElement("ul");
    list.setAttribute('class', 'popup-options');

    var options = [];

    var optionItem;
    var imgDiv;
    var imgWidth = 64;
    for (var i = 0; i < 10; i ++){

      imgDiv = document.createElement("div");
      imgDiv.className = "popup-icon";
      imgDiv.style.backgroundPosition = i*imgWidth+"px 0px";

      optionItem = document.createElement("li");
      optionItem.appendChild(imgDiv);
      optionItem.className = "popup-item";
      optionItem.onclick = self.optionItemClicked;
      options.push(optionItem);
    }

    // var option1 = document.createElement("li");
    // var input1 = document.createElement("input");
    // input1.type = 'text';
    // input1.name = 'height';
    // input1.placeholder = 'default toober';
    // // input1.setAttribute('type', 'text');
    // // input1.setAttribute('name', 'height');
    // // input1.setAttribute('placeholder', 'default 20');
    // self.heightInput = input1;
    // option1.appendChild(document.createTextNode("Height:"));
    // option1.appendChild(input1);
    //
    // var option2 = document.createElement("li");
    // var input2 = document.createElement("input");
    // input2.setAttribute('type', 'text');
    // input2.setAttribute('name', 'width');
    // input2.setAttribute('placeholder', 'default 20');
    // self.widthInput = input2;
    // option2.appendChild(document.createTextNode("Width:"));
    // option2.appendChild(input2);
    //
    // var option3 = document.createElement("li");
    // var input3 = document.createElement("input");
    // input3.setAttribute('type', 'text');
    // input3.setAttribute('name', 'name');
    // input3.setAttribute('placeholder', 'default gray');
    // self.nameInput = input3;
    // option3.appendChild(document.createTextNode("Color:"));
    // option3.appendChild(input3);

    // var options = [
    //   option1,
    //   option2,
    //   option3
    // ];

    for (i in options) {
      list.appendChild(options[i]);
    }
    body.appendChild(list);
    popup.appendChild(body);

    //support for submitting with the enter key
    popup.onkeydown = self.keyPressed;

    self.popupElement = popup;

    if (!document.getElementById("popup")) {
      document.getElementById("canvas-container").appendChild(self.popupElement);
    }
  }
  init();
}


//prototype for each option?
// function PopupOption () {
//
// }
