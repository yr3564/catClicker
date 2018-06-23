// var cat is the model now
var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://wwww.flickr.com/photos/big/');
	this.nicknames = ko.observable(['tabby', 'kitty', 'peeps', 'meow']);

	

	this.title = ko.computed(function(){
		//Always declare the variable to use it later
		var title;
		var clicks = this.clickCount();
		if(clicks < 10) {
			title = 'newborn';
		} else if (clicks < 50){
			title = 'infant';
		} else if (clicks <100){
			title = 'child';
		} else if (clicks < 200){
			title = 'Teen';
		} else if (clicks < 500){
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);
}




var ViewModel = function (){
	var self = this;
	//currentCat creates a new cat 
	this.currentCat = ko.observable( new Cat() );
	//
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};


}

ko.applyBindings(new ViewModel());