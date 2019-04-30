const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' Jana','Welcome',' To',' Master Codes ','  رمضان كريم'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/iXMiDo`);
    }, ms);
  console.log('---------------');
  console.log('Jana Is Online')
  console.log('---------------')
});














client.login(process.env.Token);