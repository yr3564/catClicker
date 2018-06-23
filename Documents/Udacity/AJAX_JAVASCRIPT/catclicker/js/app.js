var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nicknames : 'TabbyCat'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames : 'Tigger'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames : 'scooby'

        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nicknames : 'Blackpanter'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames : 'zzzzzz'

        }


]




// var cat is the model now
var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observable(data.nicknames);

	

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
	// creates the a varaiable to hold the array of initialCats above
	this.catList = ko.observableArray([]);

	// creates a loop ogf the initialCats data and passed to catList
	initialCats.forEach( function(catItem){
		self.catList.push( new Cat (catItem));
	});
	//currentCat creates a new cat 
	this.currentCat = ko.observable( new Cat() );
	//
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};


}

ko.applyBindings(new ViewModel());