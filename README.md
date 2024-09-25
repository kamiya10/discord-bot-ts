# TypeScript Discord Bot

## Setup

Install dependencies with package manager

```
npm install
yarn install
npnm install
bun install
```

## Building a Slash Command

You can build a Slash Command with `Command` utility class:

```ts
export default new Command({
  builder: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll dice"),
  defer: false,
  ephemeral: true,
  async execute(interaction) {
    await interaction.reply({
      content: `🎲 ${Math.round(Math.random() * 6)}`,
    });
  },
});
```

