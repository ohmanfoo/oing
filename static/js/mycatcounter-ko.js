// mycatcounter4.js
$(function () {
    'use strict';
    var config = {
            lastID: (localStorage.cats) ? JSON.parse(localStorage.cats).length : 0,
            cats: []
        };
    function Cat(obj) {
        obj = obj || {};
        var thisID = (obj.id) ? obj.id : ++config.lastID;        
        this.id = obj.id || thisID;
        this.name = obj.name || "Cat0" + thisID;
        this.clicks = obj.clicks || 0;
        this.visible = obj.visible || true;
        this.img = obj.img || 'http://i.imgur.com/4Zb0ah1.png';
    }
    var model = {
        init: function () {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([]);
            } else { 
                this.initCats(this.getAllCats());
            }
        },
        add: function (obj) {
            var data = this.getAllCats();
            data.push(obj);
            config.cats.push(obj);
            localStorage.setItem('cats', JSON.stringify(data));
        },
        getAllCats: function () {
            return JSON.parse(localStorage.getItem('cats'));
        },
        updateStorage: function () {
            localStorage.setItem('cats', JSON.stringify(config.cats));
        },
        initCat : function (cat) {
            var kitty = new Cat(cat);
            config.cats.push(kitty);
        },
        initCats : function (cats) {
            var i = 0;
                for (i = 0; i < cats.length; i += 1) {
                this.initCat(cats[i]);
            }
        }
    },
        omni = {
            addCat: function (cat) {
                var kitty = new Cat(cat);
                model.add(kitty);
                view.render();
            },
            getCats: function () {
                return model.getAllCats();
            },
            getVisibleCats: function () {
                var visibleCats = config.cats.filter(function (cat) {
                    return cat.visible;
                });
                return visibleCats;
            },
            toggleCat: function (cat) {
                var clickedCat = config.cats[cat -1];
                clickedCat.visible = clickedCat.toggleVisibility();
                view.render();
            },
            incrementCat: function (cat) {
                var clickedCat = config.cats[cat -1];
                clickedCat.incrementClicks();
                clickedCat.getClicks();
                model.updateStorage()
                view.render();
            },
            init: function () {
                model.init();
                view.init();
            }
        },
        view = {
            init: function () {
                var addCatButton = $('.add-cat');
                addCatButton.click(function () {
                    omni.addCat();
                });
                this.$catlist = $('#cat-list');
                this.$catden = $('.cat-den');
                this.catTemplate = $('script[data-template="cat"]').html();
                this.$catlist.on('click', '.toggle-cat', function (e) {
                    var cat = $(this).text().slice(3);
                    omni.toggleCat(cat);
                    return false;
                });
                this.$catden.on('click', '.cat-pic', function (e) {
                    var cat = $(this).attr('alt').slice(4);
                    omni.incrementCat(cat);
                    return false;
                });
                this.render();
            },
            render: function () {
                var htmlStr = '',
                    $catlist = this.$catlist,
                    $catden = this.$catden,
                    catTemplate = this.catTemplate;
                omni.getCats().forEach(function (cat) {
                    htmlStr += '<li class="cat flex-content post">' +
                                '<a href="#" class="toggle-cat">' +
                                cat.name + '</a></li>';
                });
                $catlist.html(htmlStr);
                $catden.html('');
                omni.getVisibleCats().forEach(function (cat) {
                    var thisTemplate = catTemplate.replace('Cat00', cat.id);
                    thisTemplate = thisTemplate.replace('cat.name', cat.name);                    
                    thisTemplate = thisTemplate.replace('cat.clicks', cat.clicks);
                    thisTemplate = thisTemplate.replace('cat.img', cat.img);
                    thisTemplate = thisTemplate.replace('cat.pic', 'cat-' + cat.id);

                    $catden.append(thisTemplate);
                });
            }
        };
    Cat.prototype.getClicks = function () {
        return this.clicks;
    };
    Cat.prototype.incrementClicks = function () {
        this.clicks = this.clicks + 1;
    };
    Cat.prototype.toggleVisibility = function () {
        if (this.visible === true) {
            this.visible = false;
            return this.visible;
        } else {
            this.visible = true;
            return this.visible;
        }
    };
    omni.init();
}());

var abs = function what (abs) {

};