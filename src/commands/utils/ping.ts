import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import { Colors } from 'discord.js';
import { Command } from '@/class/command';

export default new Command({
  builder: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  defer: false,
  ephemeral: true,
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .addFields({
        name: '⏳ Latency',
        value: '`Waiting...`',
      }, {
        name: '📡 WebSocket Latency',
        value: `${this.ws.ping}ms`,
      });

    const sent = await interaction.reply({
      content: 'Pong! 🏓',
      embeds: [embed],
      fetchReply: true,
    });

    const roundTripLatency = Math.round((sent.createdTimestamp - interaction.createdTimestamp) / 2);

    embed.spliceFields(0, 1, {
      name: '⌛ Latency',
      value: `${roundTripLatency}ms`,
    });

    await interaction.editReply({
      content: 'Pong! 🏓',
      embeds: [embed],
    });
  },
});
