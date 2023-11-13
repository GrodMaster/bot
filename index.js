

const token = '5623717286:AAFgkQf9FLPNR3HJpDE4T-xfTZGcmbTDUYU'

const { Telegraf } = require('telegraf')
s
let p1 = ''
let p2 = ''
let p3 = ''
let p4 = ''
let p5 = ''
const bot = new Telegraf(token)
bot.help((ctx) => ctx.reply(`Чтоб добавить котика в рассылку P1, напишите \'/add_p1\' и через пробел его ник без \'@\', для Р2 \'/add_p2\' и через пробел его ник и т.д. . Чтоб вызвать группу котиков, напишите \'/p1\' , \'/p2\' и т.д.
`))
bot.command('add_p1', (ctx) => {
    let users = ctx.message.text
    console.log(users);
    let i = ' @'+users.substr(8)
    p1 = p1 + i
    console.log(p1);
    ctx.reply('Котик ' +users.substr(8)+" добавлен в группу Р1" )
})

bot.command('add_p2', (ctx) => {
    let users = ctx.message.text
    console.log(users);
    let i = ' @'+users.substr(8)
    p2 = p2 + i
    console.log(p2);
    ctx.reply('Котик ' +users.substr(8)+" добавлен в группу Р2" )
})

bot.command('add_p3', (ctx) => {
    let users = ctx.message.text
    console.log(users);
    let i = ' @'+users.substr(8)
    p3 = p3 + i
    console.log(p3);
    ctx.reply('Котик ' +users.substr(8)+" добавлен в группу Р3" )
})

bot.command('add_p4', (ctx) => {
    let users = ctx.message.text
    console.log(users);
    let i = ' @'+users.substr(8)
    p4 = p4 + i
    console.log(p4);
    ctx.reply('Котик ' +users.substr(8)+" добавлен в группу Р4" )
})

bot.command('add_p5', (ctx) => {
    let users = ctx.message.text
    console.log(users);
    let i = ' @'+users.substr(8)
    p5 = p5 + i
    console.log(p5);
    ctx.reply('Котик ' +users.substr(8)+" добавлен в группу Р2" )
})

bot.command('p1',(ctx)=>{
     ctx.reply(p1)
})

bot.command('p2',(ctx)=>{
    ctx.reply(p2)
})

bot.command('p3',(ctx)=>{
    ctx.reply(p3)
})

bot.command('p4',(ctx)=>{
    ctx.reply(p4)
})

bot.command('p5',(ctx)=>{
    ctx.reply(p5)
})



bot.command('all',(ctx)=>{
    for(let user of all_users){
        ctx.reply('@'+user)
    }
})

let all_users = []
bot.on('message', (ctx) => {
    let user = ctx.from.username
    all_users.push(user)
    all_users = all_users.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })

})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))