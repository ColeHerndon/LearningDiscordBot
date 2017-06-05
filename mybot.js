const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);

client.on('ready', () =>
{
    console.log('I am ready!');
    client.user.setGame('with Lamby-chan!');
});

//Regular Commands.
client.on('message', (message) =>
{
    //Prefix set
    let regPrefix = config.regularPrefix;

    //Check for non-regular prefix message
    if (!message.content.startsWith(regPrefix))
    {
        return;
    }

    //Check for regular prefix.
    if (message.content.startsWith(regPrefix))
    {
        //Ping command.
        if (message.content.startsWith(regPrefix + 'ping'))
        {
            if (message.author.id == config.lambychanID)
            {
                let rnLC = Math.floor((Math.random() * 3) + 1);
                if (rnLC == 1)
                {
                    message.channel.send('Ping pong Lamby-chan!');
                }
                if (rnLC == 2)
                {
                    message.channel.send('Lamby-chan go ping pong!');
                }
                if (rnLC == 3)
                {
                    message.channel.send('Nuuu- >.< no pong!');
                }
            }
            else
            {
                let rnElse = Math.floor((Math.random() * 5) + 1);
                if (rnElse == 1)
                {
                    message.channel.send('Pong!');
                }
                if (rnElse == 2)
                {
                    message.channel.send('Do I have to say pong?');
                }
                if (rnElse == 3)
                {
                    message.channel.send("I don't wanna... pong.");
                }
                if (rnElse == 4)
                {
                    message.channel.send('Ping! Oh wait... it was pong...');
                }
                if (rnElse == 5)
                {
                    message.channel.send('PONG OK? ARE YOU HAPPY NOW?');
                }
            }
        }
        //WhoMade command.
        else if (message.content.startsWith(regPrefix + 'whomade'))
        {
            if (message.author.id == config.lambychanID)
            {
              message.channel.send('I was made by you ya silly goose!');
            }
            else
            {
                message.channel.send('I was made by Lamby-chan!');
            }
        }
        //Hello command.
        else if (message.content.startsWith(regPrefix + 'hello'))
        {
            message.channel.send('Hello ' + message.author + '!');
        }
        //Zero command.
        else if (message.content.startsWith(regPrefix + 'zero'))
        {
          message.channel.send('http://i.imgur.com/ycn053n.png');
        }
        //Error in command input.
        else
        {
            return;
        }
    }
  });

//Mod Commands.
client.on('message', (message) =>
{
    //Mod prefix set.
    let modPrefix = config.moderatorPrefix;

    //Check for non-regular prefix message
    if (!message.content.startsWith(modPrefix))
    {
        return;
    }

    //Check for mod prefix.
    if (message.content.startsWith(modPrefix))
    {
        let perms = message.member.permissions;

        //Ban command. Bans user, DOES NOT remove messages.
        if (message.content.startsWith (modPrefix + 'ban'))
        {
            let userHasBanPerms = message.channel.permissionsFor(message.member).has('BAN_MEMBERS');
            let botHasBanPerms = message.channel.permissionsFor(config.lambbotID).has('BAN_MEMBERS');
            var userToBan = message.toString();
            var bannedUsersIDArray = [];

            for (var x1 = 0; x1 < userToBan.length; x1++)
            {
                if (userToBan.charAt(x1) == '1' || userToBan.charAt(x1) == '2' || userToBan.charAt(x1) == '3' || userToBan.charAt(x1) == '4' || userToBan.charAt(x1) == '5'
                      || userToBan.charAt(x1) == '6' || userToBan.charAt(x1) == '7' || userToBan.charAt(x1) == '8' || userToBan.charAt(x1) == '9' || userToBan.charAt(x1) == '0')
                {
                    var idString = '';
                    var y = x1;
                    while (userToBan.charAt(y) == '1' || userToBan.charAt(y) == '2' || userToBan.charAt(y) == '3' || userToBan.charAt(y) == '4' || userToBan.charAt(y) == '5'
                          || userToBan.charAt(y) == '6' || userToBan.charAt(y) == '7' || userToBan.charAt(y) == '8' || userToBan.charAt(y) == '9' || userToBan.charAt(y) == '0')
                    {
                        idString = idString + userToBan.charAt(y);
                        y++;
                    }

                    if (idString.length == 18)
                    {
                        bannedUsersIDArray.push(idString);
                    }
                }
            }

            console.log('Ban IDs:')

            if (bannedUsersIDArray.length == 0)
            {
                console.log('no ids entered.');
                console.log('');
            }
            else
            {
                for (var x2 = 0; x2 < bannedUsersIDArray.length; x2++)
                {
                    console.log(bannedUsersIDArray[x2]);
                  }
            }

            if (userHasBanPerms == true && botHasBanPerms == true)
            {
                if (bannedUsersIDArray.length == 0)
                {
                    return;
                }
                if (bannedUsersIDArray.length == 1)
                {
                    try
                    {
                      message.channel.send('Only one onee-chan? Guess it\'s my job...');
                      message.guild.member(bannedUsersIDArray[0]).ban();
                      message.channel.send('`Banned <@' + bannedUsersIDArray[0] + '>`');
                    }
                    catch (e)
                    {
                        console.log(error);
                    }
                }
                if (bannedUsersIDArray.length >  1)
                {
                    k
                }
            }
            else if (userHasBanPerms == true && botHasBanPerms == false)
            {
                message.channel.send('ERROR: You have the `banMembers` permission, but I don\'t!');
            }
            else if (userHasBanPerms == false && botHasBanPerms == true)
            {
                message.channel.send('ERROR: I have the `banMembers` permission, but you don\'t!');
            }
            else if (userHasBanPerms == false && botHasBanPerms == false)
            {
                message.channel.send('ERROR: Neither of us have the `banMembers` permission!');
            }
        }

        //Kick command. Kicks user, simple.
        if (message.content.startsWith (modPrefix + 'kick'))
        {
            let userHasKickPerms = message.channel.permissionsFor(message.member).has('KICK_MEMBERS');
            let botHasKickPerms = message.channel.permissionsFor(config.lambbotID).has('KICK_MEMBERS');
            var userToKick = message.toString();
            var kickedUsersIDArray = [];

            for (var x1 = 0; x1 < userToKick.length; x1++)
            {
                if (userToKick.charAt(x1) == '1' || userToKick.charAt(x1) == '2' || userToKick.charAt(x1) == '3' || userToKick.charAt(x1) == '4' || userToKick.charAt(x1) == '5'
                      || userToKick.charAt(x1) == '6' || userToKick.charAt(x1) == '7' || userToKick.charAt(x1) == '8' || userToKick.charAt(x1) == '9' || userToKick.charAt(x1) == '0')
                {
                    var idString = '';
                    var y = x1;
                    while (userToKick.charAt(y) == '1' || userToKick.charAt(y) == '2' || userToKick.charAt(y) == '3' || userToKick.charAt(y) == '4' || userToKick.charAt(y) == '5'
                          || userToKick.charAt(y) == '6' || userToKick.charAt(y) == '7' || userToKick.charAt(y) == '8' || userToKick.charAt(y) == '9' || userToKick.charAt(y) == '0')
                    {
                        idString = idString + userToKick.charAt(y);
                        y++;
                    }

                    if (idString.length == 18)
                    {
                        kickedUsersIDArray.push(idString);
                    }
                }
            }

            console.log('Kick IDs:')

            if (kickedUsersIDArray.length == 0)
            {
                console.log('no ids entered.');
                console.log('');
            }
            else
            {
                for (var x2 = 0; x2 < kickedUsersIDArray.length; x2++)
                {
                    console.log(kickedUsersIDArray[x2]);
                  }
            }

            if (userHasKickPerms == true && botHasKickPerms == true)
            {
                if (kickedUsersIDArray.length == 0)
                {
                    return;
                }
                if (kickedUsersIDArray.length == 1)
                {
                    try
                    {
                      message.channel.send('Just a kick huh? Ok!');
                      message.guild.member(kickedUsersIDArray[0]).kick();
                      message.channel.send('`Kicked <@' + kickedUsersIDArray[0] + '>`');
                    }
                    catch (e)
                    {
                        console.log(error);
                    }
                }
                if (kickedUsersIDArray.length >  1)
                {
                    return;
                }
            }
            else if (userHasKickPerms == true && botHasKickPerms == false)
            {
                message.channel.send('ERROR: You have the `kickMembers` permission, but I don\'t!');
            }
            else if (userHasKickPerms == false && botHasKickPerms == true)
            {
                message.channel.send('ERROR: I have the `kickMembers` permission, but you don\'t!');
            }
            else if (userHasKickPerms == false && botHasKickPerms == false)
            {
                message.channel.send('ERROR: Neither of us have the `kickMembers` permission!');
            }
        }
    }
  });

//Bot mentioned.
client.on('message', (message) =>
{
    //Check for bot pinged.
    if (message.isMentioned(config.lambbotID))
    {
        console.log('bot mentioned');
        message.channel.send('Oi, why are you pinging me ' + message.author + '?');
      }
});
