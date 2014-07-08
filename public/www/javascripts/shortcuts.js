
// Test if deploy e-mails arrive
var shortcuts = Array();

shortcuts = {
    "c":{
        "img" : "che.png",
        "channel": "paint",
    },
    "mybody":{
        "img" : "mybody.gif",
        "channel": "paint",
    },
    "mybody2":{
        "img" : "mybody2.gif",
        "channel": "paint",
    },
    "lol":{
        "img" : "lol.gif",
        "channel": "paint",
    },
    "dance":{
        "img" : "dance.gif",
        "channel": "paint",
    },
    "selffive":{
        "img" : "selffive.gif",
        "channel": "paint",
    },
    "think":{
        "img" : "think.jpg",
        "channel": "paint",
    },
    "tense":{
        "img" : "tense.gif",
        "channel": "paint",
    },
    ".merka":{
        "img" : "merka.gif",
        "channel": "paint",
    },
    ".martin":{
        "img" : "martin.jpg",
        "channel": "paint",
    },
    ".murphy":{
        "img" : "murphy.jpg",
        "channel": "paint",
    },
    "spread":{
        "img" : "spread.jpg",
        "channel": "paint",
    },
    "bullshit":{
        "img" : "bullshit.gif",
        "channel": "paint",
    },
    "itson":{
        "img" : "itson.gif",
        "channel": "paint",
    },
    "bond":{
        "img" : "bond.gif",
        "channel": "paint",
    },
    "nofuck":{
        "img" : "nofuck.gif",
        "channel": "paint",
    },
    "again":{
        "img" : "again.gif",
        "channel": "paint",
    },
    "üttekoma":{
        "img" : "yttekoma.jpg",
        "channel": "paint",
    },
    "enough":{
        "img" : "enough.gif",
        "channel": "paint",
    },
    "roma1":{
        "img" : "roma1.jpg",
        "channel": "paint",
    },
    "roma2":{
        "img" : "roma2.jpg",
        "channel": "paint",
    },
    "roma3":{
        "img" : "roma3.jpg",
        "channel": "paint",
    },
    "notfunny":{
        "img" : "notfunny.png",
        "channel": "paint",
    },
    "shit":{
        "img" : "shit.gif",
        "channel": "paint",
    },
    "facepalm":{
        "img" : "facepalm.gif",
        "channel": "paint",
    },
    "facepalm2":{
        "img" : "facepalm2.gif",
        "channel": "paint",
    },
    "cry":{
        "img" : "cry.gif",
        "channel": "paint",
    },
    "noo":{
        "img" : "no.gif",
        "channel": "paint",
    },
    "slowclap":{
        "img" : "slowclap.gif",
        "channel": "paint",
    },
    "slowclap2":{
        "img" : "slowclap2.gif",
        "channel": "paint",
    },
    "itson2":{
        "img" : "itson2.gif",
        "channel": "paint",
    },
    "okeiko1":{
        "img" : "okeiko1.gif",
        "channel": "paint",
    },
    "chuck":{
        "img" : "chuck.gif",
        "channel": "paint",
    },
    "amazing":{
        "img" : "amazing.gif",
        "channel": "paint",
    },
    ":P":{
        "img" : "tongue.gif",
        "channel": "paint",
    },
    "awesome":{
        "img" : "awesome.jpg",
        "channel": "paint",
    },
    "surprise":{
        "img" : "surprise.gif",
        "channel": "paint",
    },
    "ups":{
        "img" : "ups.gif",
        "channel": "paint",
    },
    "thanks":{
        "img" : "thanks.gif",
        "channel": "paint",
    },
    "(y)":{
        "img" : "y.jpg",
        "channel": "paint",
    },
    ":PP":{
        "img" : "tongue2.gif",
        "channel": "paint",
    },
    ";)":{
        "img" : "wink.gif",
        "channel": "paint",
    },
    "kitt":{
        "img" : "kitt.gif",
        "channel": "paint",
    },
    "clockworkorange":{
        "img" : "clockworkorange.gif",
        "channel": "paint",
    },
    "creepy":{
        "img" : "creepy.gif",
        "channel": "paint",
    },
    "really?":{
        "img" : "really.gif",
        "channel": "paint",
    },
    "stupid":{
        "img" : "stupid.gif",
        "channel": "paint",
    },
    "wow":{
        "img" : "wow.gif",
        "channel": "paint",
    },
    "monty":{
        "img" : "monty.gif",
        "channel": "paint",
    },
    "fuckyou":{
        "img" : "fuckyou.gif",
        "channel": "paint",
    },
    "fuckyou2":{
        "img" : "fuckyou2.gif",
        "channel": "paint",
    },
    "busy":{
        "img" : "busy.gif",
        "channel": "paint",
    },
    "gotcha":{
        "img" : "gotcha.gif",
        "channel": "paint",
    },
    "joker":{
        "img" : "joker.gif",
        "channel": "paint",
    },
    "allgood":{
        "img" : "allgood.gif",
        "channel": "paint",
    },
    "disco":{
        "img" : "disco.gif",
        "channel": "paint",
    },
    "getlucky":{
        "img" : "getlucky.gif",
        "channel": "paint",
    },
    "wow2":{
        "img" : "wow2.gif",
        "channel": "paint",
    },
    "itoldyouso":{
        "img" : "itoldyouso.gif",
        "channel": "paint",
    },
    "facepalm3":{
        "img" : "facepalm3.gif",
        "channel": "paint",
    },
    "m":{
        "channel":"meme"
    },
    "M":{
        "channel":"meme"
    },
    "logout":{
        "channel":"logout"
    },
    "w":{
        "channel":"who"
    },
    "W":{
        "channel":"who"
    },
    "h":{
        "channel":"help"
    },
    "l":{
        "channel":"last"
    },
    "t":{
        "channel":"tell"
    },
    "r":{
        "channel":"room"
    },
    "sc": {
      "channel":"shortcuthelp"
    },
    "soundon":{
        "channel":"room"
    },
    "soundoff":{
        "channel":"room"
    },
}


/*
function shortCuts(data) {
    //console.log(data.channel);

    switch(data.channel){

        case("paint"):
            //socket.emit('news', { text: message, name: sessionStorage.username, time: getTime() });
        break;









    }


    //return data;
}*/




//console.log(shortcuts.dance.img);

/*
function findPatterns(message) {
    // get the first word
    if (message === '') return false;
    message = message.trim();
    if(message.indexOf(" ") != -1) var firstWord = message.slice(0, message.indexOf(" "));
    else var firstWord = message;

    // is it a shortcut?
    if(firstWord in shortcuts) {
        console.log(shortcuts[firstWord].img);
    }

    // if no shortcut, send it to the wire
    else {
        socket.emit('news', { text: message, name: sessionStorage.username, time: getTime() });
    }
}

*/


/*
function findShortcut(data) {
    //console.log(data.message);
    return data;
}
*/

/*
function findShortcut(data) {
    input = data.message;
    cuts = new Array();
    var i = 0;
    $.each(shortcuts, function(key, value) {
        cuts[i][name] = value.name;
        cuts[i][name] = value.name;
        i++;
    });
    var shortCutIndex = $.inArray(input, cuts);
    cl(cuts);

    $("#jetzt").before('<div class="message"><div id="time">'+data.time+'</div><p id="name"><strong>'+data.name+'</strong></p> <img src="/shortcuts/'+cuts[shortCutIndex]+'" class="full" /></p></div>');

    return shortCutIndex;
}


function printShortcut(data, scIndex) {
    cuts = new Array();
    var i = 0;
    $.each(shortcuts, function(key, value) {
        cuts[i] = value.name;
        i++;
    });
    cl(cuts[scIndex]['img']);
    $("#jetzt").before('<div class="message"><div id="time">'+data.time+'</div><p id="name"><strong>'+data.name+'</strong></p> <img src="/shortcuts/'+cuts[scIndex]+'" class="full" /></p></div>');
}

*/




/*
cuts = [
    {
        "name": "c",
        "img" : "che.png",
        "channel": "painter",
    },{
        "name": "mybody",
        "img" : "mybody.gif",
        "channel": "painter",
    },{
        "name": "mybody2",
        "img" : "mybody2.gif",
        "channel": "painter",
    },{
        "name": "lol",
        "img" : "lol.gif",
        "channel": "painter",
    },{
        "name": "dance",
        "img" : "dance.gif",
        "channel": "painter",
    },{
        "name": "selffive",
        "img" : "selffive.gif",
        "channel": "painter",
    },{
        "name": "i",
        "img" : "idea.jpeg",
        "channel": "painter",
    },{
        "name": "8",
        "img" : "note.gif",
        "channel": "painter",
    },{
        "name": "y",
        "img" : "yes.jpg",
        "channel": "painter",
    },{
        "name": "m",
        //"img" : "che.png",
        "channel": "meme",
    },{
        "name": "h",
        //"img" : "che.png",
        "channel": "help",
    },{
        "name": "w",
        //"img" : "che.png",
        "channel": "who",
    },{
        "name": "l",
        //"img" : "che.png",
        "channel": "last",
    }
]
*/
