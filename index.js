// Load up the discord.js library
const Discord = require("discord.js");
const fs = require("fs");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Rice > Pasta `);
});


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});




        client.on('message', message => {
            if (message.content === 'fdp') {
                message.reply('toi même !')
            }
        })


        client.on('message', message => {
            if (message.content === 'jtm') {
                message.reply('bah nan')
            }
        })

        client.on('message', message => {
            if (message.content === 'Apple') {
                message.reply('sah quel plaisir')
            }
        })

        client.on('message', message => {
            if (message.content === ':eye:') {
                message.reply('sah quel plaisir')
            }
        })

        client.on('message', message => {
            if (message.content === 'Bonjour') {
                message.reply('yahallo')
            }
        })

        client.on('message', message => {
            if (message.content === 'bonjour') {
                message.reply('yahallo')
            }
        })

        client.on("message", (message) => {
            if (message.content === "ayy") {
                message.channel.send("Ayy, lmao!");
            }
            if (message.content === "wat") {
                message.channel.send("Say what?");
            }
            if (message.content === "lol") {
                message.channel.send("roflmaotntpmp");
            }
            if (message.content === "Lol") {
                message.channel.send("roflmaotntpmp");
            }
            if (message.content === "xd") {
                message.channel.send("xdlolptdr");
            }
            if (message.content === "formulejefr") {
                message.channel.send(";-;");
            }
            if (message.content === "XD") {
                message.channel.send("xdlolptdr");
            }
            if (message.content === "xD") {
                message.channel.send("xdlolptdr");
            }
            if (message.content === "Xd") {
                message.channel.send("xdlolptdr");
            }
            if (message.content === ":/") {
                message.channel.send(";-;");
            }
            if (message.content === "ui") {
                message.channel.send("On ne dis pas 'ui' mais 'oui'");
            }
        });

        client.on("message", (message) => {
            if (message.content.startsWith("ping")) {
                message.channel.send("pong!");
            } else

                if (message.content.includes("merde")) {
                    message.channel.send("Wow pas de gros mots ");
                }
            if (message.content.includes("ptn")) {
                message.channel.send("Wow pas de gros mots ");
            }
            if (message.content.startsWith("wow")) {
                message.channel.send(">x<");
            }
            if (message.content.includes("flemme")) {
                message.channel.send("Bouge ton cul connard");
            }
            if (message.content.includes("jpp")) {
                message.channel.send("Moi nn plus ");
            }
            if (message.content.includes("marche pas")) {
                message.channel.send("CHEH !");
            }
        });

client.on('message', message => {
    if (message.content === `/user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

client.on('message', message => {
    if (message.content.includes(`tg`)) {
        message.channel.send(`Wow calme toi ${message.author.username}`);
    }
});

client.on('message', message => {
    if (message.content === `/avatar`) {
        message.channel.send(`${message.author.username} avatar is ${message.author.avatarURL}`);
    };
});

        client.on('message', message => {
            if (message.content === '/animeplaylist') {
                message.channel.send('https://open.spotify.com/playlist/4veFqAoV8mOxgKGb1eXnrQ');
            }
        });

        client.on('message', message => {
            if (message.content === '/server') {
                message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
            }
        });

client.on('message', message => {
    if (message.content === '/rep') {
        let destinataire = message.guild.member(message.mentions.users.first());
        if (!destinataire) {
            return message.channel.send("L'utilisateur n'existe pas");
        }
        destinataire.sendMessage(args.join(" "));
    }
});

client.on('message', message => {
    if (message.content === '/dm') {
        message.author.createDM().then(channel => {
            channel.send('OwO');
        })
    }});

        client.on('message', message => {
            if (message.content.includes("/react")) {
                message.react('😀');
            }
        });



        const responseObject = {
            "ayy": "Ayy, lmao!",
            "wat": "Say what?",
            "lol": "roflmaotntpmp"
};

client.on('message', message => {

    var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));
    var sender = message.author;
    var msg = message.content.toUpperCase();


    if (message.content === '/stats') {
        message.channel.send('Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !')
    }


    if (!userData[sender.id]) userData[sender.id] = {
        messageSent: 0
    }

    userData[sender.id].messagesSent++;

    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    });
});


        client.on("message", async message => {
            
            if (message.author.bot) return;

            
            if (message.content.indexOf(config.prefix) !== 0) return;

           
            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

           

            if (command === "ping") {
               
                const m = await message.channel.send("Ping?");
                m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
            }

            if (command === "say") {
                const sayMessage = args.join(" ");
                message.delete().catch(O_o => { });
                message.channel.send(sayMessage);
            }

            if (command === "kick") {
                // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
                if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name)))
                    return message.reply("Sorry, you don't have permissions to use this!");

                let member = message.mentions.members.first() || message.guild.members.get(args[0]);
                if (!member)
                    return message.reply("Please mention a valid member of this server");
                if (!member.kickable)
                    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

                let reason = args.slice(1).join(' ');
                if (!reason) reason = "No reason provided";

                await member.kick(reason)
                    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
                message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

            }

            if (command === "ban") {
                if (!message.member.roles.some(r => ["Administrator"].includes(r.name)))
                    return message.reply("Sorry, you don't have permissions to use this!");

                let member = message.mentions.members.first();
                if (!member)
                    return message.reply("Please mention a valid member of this server");
                if (!member.bannable)
                    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

                let reason = args.slice(1).join(' ');
                if (!reason) reason = "No reason provided";

                await member.ban(reason)
                    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
                message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
            }

            if (command === "purge") {

                const deleteCount = parseInt(args[0], 10);

                if (!deleteCount || deleteCount < 2 || deleteCount > 100)
                    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

                const fetched = await message.channel.fetchMessages({ limit: deleteCount });
                message.channel.bulkDelete(fetched)
                    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
            }
            if (command === "help") {
                var help_embed = new Discord.RichEmbed()
                    .setColor("#770000")
                    .setTitle("Voici mes commandes !")
                    .setDescription("```[Optionelle]```/```{Obligatoire}```")
                    .setThumbnail(message.author.avatarURL)
                    .addField("/rules " , "Affiche les règles dur serveur")
                    .addField("/say {message} " , "Le bot cite votre texte")
                    .addField("/ping " , "Le bot vous dit votre ping")
                    .addField("/kick {joueur} [cause]" , "kick un joueur |||Admin Only|||")
                    .addField("/ban {joueur} [cause]" , "ban un joueur |||Admin Only|||")
                    .addField("/purge {Nombre 2<nombre<100} " , "suprime le nombre de messages choisis")
                    .addField("/user-info " , "Vous donne des infos sur vous comme votre ID")
                    .addField("/avatar" , "Permet aux autres membres de voir et télécharger votre photo de profile")
                    .addField("/stats" , "Indique le nombres de messages que vous avez envoyé dans les serveurs dans lequel est présent le bot")
                    .addField("/purge {Nombre 2<nombre<100} ", "suprime le nombre de messages choisis")
                    .addField("/ip " , "Donne des informations sur le serveur minecraft partenaire")
                    .addField("/react " , "Ajoute une réaction à votre message, vous pouvez placez cette commande n'importe ou dans votre message et même la masquer avec un spoiler")
                    .addField("/dm " , "Commande extrèmement utile car le bot vous envoie un message en DM")
                    .addField("/server " , "Donne des informations sur le serveur où vous etes actuellement connecté")
                    .addField("Le bot se permettera de répondre a certain de vos message", "||Par exemple: 'Bonjour'||")
                        .setTimestamp()
                message.channel.send(help_embed);
            };

            if (command === "ip") {
                var help_embed = new Discord.RichEmbed()
                    .setColor("#440000")
                    .setTitle("Voici les informations disponible sur le serveur 'Pôle 4 survival'")
                    .setDescription("_______________")
                    .setThumbnail('https://media1.giphy.com/media/XSnGbvJ0ZROlW/giphy.gif')
                    .addField("Version:", "```1.8.8```")
                    .addField("IP:", "```94.130.19.71:56217```")
                    .addField("Moddé:", "```Non```")
                    .addField("Plugin:", "```Oui```")
                    .addField("White-Liste:", "```Oui```")
                    .addField("Serveur Discord", "```https://discord.gg/q2fT9xZWEu```")
                message.channel.send(help_embed);
            };

            if (command === "rule") {
                var help_embed = new Discord.RichEmbed()
                    .setColor("#RR0000")
                    .setTitle("__:arrow_right_hook: Règles du Discord :__")
                    .setDescription(":mega: | __Les interdictions existantes au sein de notre Discord Communautaire doivent êtres connues.__")
                    .setThumbnail(message.author.avatarURL)
                    .addField("- En général : :arrow_forward: Votre attitude sur le Discord doit demeurer respectueuse de tous.")
                    .addField("Article 1:", "Toute personne ne respectant pas autrui sera sanctionnée.")
                    .addField("Article 2:", "Les propos discriminatoires sont lourdement sanctionnables.")
                    .addField("Article 3:", "Les contenus pédophiles, pornographiques ou religieux sont interdits.")
                    .addField("Article 4:", "Les pseudonymes ou noms de jeux inappropriés ou illisibles sont strictement interdits.")
                    .addField("Article 5:", "Seuls les membres du staff sont en mesure de faire respecter le règlement.")
                    .addField("- Salons textuels :", "__:arrow_forward: Nous resterons particulièrement vigilants quant au contenu partagé.__")
                    .addField(":clipboard:", "Vous êtes tenus pour seul responsable des messages que vous postez.")
                    .addField("Article 6:", "Tout spam abusif, flood ou spoil est interdit.")
                    .addField("Article 7:", "La diffusion d'informations privées est strictement interdite.")
                    .addField("Article 8:", "La publicité est strictement interdite sous peines de mute")
                    .addField("Article 9:", "Merci de bien rèspecter l'utilisation des salon sous peines d'avertissement")
                    .addField(":arrow_forward:", "La publicité partagée par MP conduit à un ban définitif.")
                    .addField("- Salons vocaux :", "__")
                    .addField("Article 10:", "Le spam auditif et les screamers audio sont strictement interdits.")
                    .addField("Article 11:", "Le changement répétitif de channel est passible de sanctions.")
                    .addField("Article 13:", "La musique est interdite dans tout channel inapproprié.")
                    .setTimestamp()
                message.channel.send(help_embed);
            };

            if (command === "shop") {
                var help_embed = new Discord.RichEmbed()
                    .setColor("#RR0000")
                    .setTitle("Voici le shop du serveur")
                    .setDescription("```La money est obtenable lors d'event ou offert part le staff```")
                    .setThumbnail(message.author.avatarURL)
                    .addField("Grade discord 'Membre+' ", "5 :moneybag:")
                    .addField("Grade discord 'V.I.P' ", "10 :moneybag:")
                    .addField("Grade discord 'V.I.P+'", "20 :moneybag:")
                    .addField("Grade discord 'Légende'", "50 :moneybag:")
                    .addField("Grade discord 'Dieux'", "75 :moneybag:")
                    .addField("Grade discord 'Dieux Légendaire'", "100 :moneybag:")
                    .addField("Grade discord 'Turfu'", "500 :moneybag:")
                    .setTimestamp()
                message.channel.send(help_embed);

            } });



        client.login(process.env.TOKEN);
