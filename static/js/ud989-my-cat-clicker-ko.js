//ud989-my-cat-clicker-ko

var ViewModel = function () {
	this.currentCat = ko.observable( new Cat({
		clickCount : 0,
		name : 'Flabby-Cat',
		imgSrc : 'https://i.imgur.com/4Zb0ah1.png',
		imgAttr : 'imgATTR',
		tags : ['cat','kitty','kitten','angry']

	}) );

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};
}


function Cat (kitty) {	
	this.clickCount = ko.observable(kitty.clickCount);
	this.name = ko.observable(kitty.name);
	this.imgSrc = ko.observable(kitty.imgSrc);
	this.imgAttr = ko.observable(kitty.imgAttr);
	this.tags = ko.observableArray(kitty.tags);

}

ko.applyBindings( new ViewModel() );