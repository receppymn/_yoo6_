const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `t_s!banned = Dene ve Gör! \nt_s!Müzik = müzik açar. \nt_s!avatarım = Avatarınınızı Gösterir. \nt_s!herkesebendençay = Herkese Çay Alırsınız. \nt_s!koş = Koşarsınız.\nt_s!çayiç = Çay İçersiniz. \nt_s!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nt_s!çayaşekerat = Çaya Şeker Atarsınız. \nt_s!yumruh-at = Yumruk Atarsınız. \nt_s!sunucuresmi = BOT Sunucunun Resmini Atar. \nt_s!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nt_s!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `t_s!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nt_s!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nt_s!unban = İstediğiniz Kişinin Yasağını Açar. \nt_s!sustur = İstediğiniz Kişiyi Susturur. \nt_s!banned = Dene ve Gör! \nt_s!oylama = Oylama Açar. \nt_s!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \nt_s!yaz = Bota İstediğiniz Şeyi Yazdırırsınız.  `)
  .addField("**Ana Komutlar**", "t_s!yardım = BOT Komutlarını Atar. \nt_s!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nt_s!ping = BOT Gecikme Süresini Söyler. \nt_s!davet = BOT Davet Linkini Atar. \nt_s!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Recep#3723** ")
  .setFooter('**Baray#8239**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
