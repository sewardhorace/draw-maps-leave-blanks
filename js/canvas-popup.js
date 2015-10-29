function Popup(){
  // this.popupElement = document.createElement('div'); //WTF

  var self = this;

  this.hide = function(){
    self.popupElement.className = "hidden";
  }
  this.show = function(){
    self.popupElement.className = "";
  }

  this.addButtonClicked = function(e) {
    console.log("add button clicked");
    var shape = {
      name: self.nameInput.value,
      height: self.heightInput.value,
      width: self.widthInput.value
    }
    self.nameInput.value = "";
    self.heightInput.value = "";
    self.widthInput.value = "";
    console.log(shape);
    self.hide();
  }
  this.cancelButtonClicked = function(e) {
    console.log("cancelled");
    self.hide();
  }
  function init() {
    //construct and style the popup element
    var popup = document.createElement("div");
    popup.setAttribute('id', 'popup');
    // popup.setAttribute('class', 'hidden');

    var nav = document.createElement("div");
    nav.setAttribute('class', 'popup-nav');

    var navItem1 = document.createElement("div");
    navItem1.setAttribute('id', 'back-btn');
    navItem1.appendChild(document.createTextNode("<"));

    var navItem2 = document.createElement("div");
    navItem2.setAttribute('id', 'fwd-btn');
    navItem2.appendChild(document.createTextNode(">"));

    var navItem3 = document.createElement("div");
    navItem3.setAttribute('id', 'cancel-btn');
    navItem3.onclick = self.cancelButtonClicked;
    navItem3.appendChild(document.createTextNode("x"));

    var navItem4 = document.createElement("div");
    navItem4.setAttribute('id', 'add-btn');
    navItem4.onclick = self.addButtonClicked;
    navItem4.appendChild(document.createTextNode("+"));

    var navItems = [
      navItem1,
      navItem2,
      navItem3,
      navItem4,
    ];

    for (i in navItems){
      var css = i < 2 ? ' nav-left' : ' nav-right';
      navItems[i].setAttribute('class', 'nav-item'+css);
      nav.appendChild(navItems[i]);
    }
    popup.appendChild(nav);

    var body = document.createElement("div");
    body.setAttribute('class', 'popup-window');

    var list = document.createElement("ul");
    list.setAttribute('class', 'popup-options');

    var option1 = document.createElement("li");
    var input1 = document.createElement("input");
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'height');
    input1.setAttribute('placeholder', 'default 10');
    self.heightInput = input1;
    option1.appendChild(document.createTextNode("Height:"));
    option1.appendChild(input1);

    var option2 = document.createElement("li");
    var input2 = document.createElement("input");
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'width');
    input2.setAttribute('placeholder', 'default 10');
    self.widthInput = input2;
    option2.appendChild(document.createTextNode("Width:"));
    option2.appendChild(input2);

    var option3 = document.createElement("li");
    var input3 = document.createElement("input");
    input3.setAttribute('type', 'text');
    input3.setAttribute('name', 'name');
    input3.setAttribute('placeholder', '(optional)');
    self.nameInput = input3;
    option3.appendChild(document.createTextNode("Name:"));
    option3.appendChild(input3);

    var options = [
      option1,
      option2,
      option3
    ];

    for (i in options) {
      options[i].setAttribute('class', 'popup-item');
      list.appendChild(options[i]);
    }
    body.appendChild(list);
    popup.appendChild(body);

    self.popupElement = popup;

    if (!document.getElementById("popup")) {
      document.body.appendChild(self.popupElement);
    }
  }
  init();
}


//prototype for each option?
// function PopupOption () {
//
// }