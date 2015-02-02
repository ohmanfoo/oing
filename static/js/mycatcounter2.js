// mycatcounter2.js
var start3 = function () {
    'use strict';
    var allcats = [],
        config = {
            catlist : document.getElementById('catlist'),
            catdivs : 'catden',
            catpics : 'cat_pic'
        };

    function Cat(cat) {
        this.name = "Cat0" + allcats.length + 1;
        this.clicks = 0;
        this.elem = cat;
        this.visible = 'true';
        this.listheader = '';
    }
    Cat.prototype.createNameDiv = function () {
        var p = document.createElement('h3'),
            img = this.getElDivo().firstElementChild;
        p.innerHTML = this.name;
        this.getElDivo().insertBefore(p, img);
    };
    Cat.prototype.createCounterDiv = function () {
        var p = document.createElement("p");
        p.setAttribute('class', this.name);
        this.elem.appendChild(p);
    };
    Cat.prototype.getClicks = function () {
        return this.clicks;
    };
    Cat.prototype.incrementClicks = function () {
        this.clicks = this.clicks + 1;
    };
    Cat.prototype.handleClick = function () {
        this.incrementClicks();
        return this.updateClicksDiv();
    };
    Cat.prototype.updateClicksDiv = function () {
        var img = this.getElDivo().firstElementChild.nextSibling;
        img.nextElementSibling.innerHTML = this.getClicks();
    };
    Cat.prototype.getElDivo = function () {
        return this.elem;
    };
    Cat.prototype.createListElem = function () {
        var li = document.createElement('li');
        li.innerHTML = this.name;
        config.catlist.appendChild(li);
        this.listheader = li;
    };
    Cat.prototype.toggleVisibility = function () {
        if (this.visible === 'true') {
            this.elem.className = 'cat_pic post hide';
            this.visible = 'false';
        } else {
            this.elem.className = 'cat_pic post show';
            this.visible = 'true';
        }
    };
    function initCat(cat) {
        var kitty = new Cat(cat);
        kitty.createNameDiv();
        kitty.createCounterDiv();
        kitty.createListElem();
        kitty.toggleVisibility();
        kitty.elem.onclick = function () {
            return kitty.handleClick();
        };
        kitty.listheader.onclick = function () {
            return kitty.toggleVisibility();
        };
        allcats.push(kitty);
    }
    function initCats(cats) {
        var i = 0;
        for (i = 0; i < cats.length; i += 1) {
            initCat(cats[i]);
        }
    }
    function findCats() {
        var cats = document.getElementsByClassName('cat_pic');
        return cats;
    }
    initCats(findCats());
};
document.onreadystatechange = function () {
    'use strict';
    if (document.readyState === 'complete') {
        start3();
    }
};
