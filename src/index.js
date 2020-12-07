const Discord = require('discord.js')
const { prefix, token } = require('../config.json')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready')
})

client.on('message', message => {
  if (message.content === `${prefix}fala`) {
    message.channel.send('Bora tomar uma cerveja')
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal de Taverneiros: ${message.guild.memberCount}`)
  }
})

client.login(token)
