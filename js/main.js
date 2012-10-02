requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
        parse: 'http://www.parsecdn.com/js/parse-1.1.3.min'
    }
});

requirejs(['parse'], function () {
	Parse.initialize("bwqTo8ZCBdNRLNiceuMZ0mNVeAiNgJMMMzqiu4cm", "VqmXiPMifnjAsAPKFsgjTTqgE1BFdWNJnxvqw9oe");
});

require(['Models/contact','router'], function(Contact, Router){
	Router.startRouting();
});