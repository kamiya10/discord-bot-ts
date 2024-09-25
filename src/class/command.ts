import type { AnySelectMenuInteraction, ApplicationCommandOptionChoiceData, AutocompleteInteraction, ButtonInteraction, ChatInputCommandInteraction, ModalSubmitInteraction } from 'discord.js';
import type { ModalBuilder, SharedSlashCommand } from '@discordjs/builders';
import type { ExtendedClient } from '@/class/client';

export interface CommandOptions {
  builder: SharedSlashCommand;
  defer: boolean;
  ephemeral: boolean;
  modals?: Record<string, ModalBuilder>;
  execute: (this: ExtendedClient, interaction: ChatInputCommandInteraction<'cached'>) => void | Promise<void>;
  onAutocomplete?: (this: ExtendedClient, interaction: AutocompleteInteraction<'cached'>) => readonly ApplicationCommandOptionChoiceData[] | Promise<readonly ApplicationCommandOptionChoiceData[]>;
  onButton?: (this: ExtendedClient, interaction: ButtonInteraction<'cached'>, buttonId: string) => void | Promise<void>;
  onModalSubmit?: (this: ExtendedClient, interaction: ModalSubmitInteraction<'cached'>, modalId: string) => void | Promise<void>;
  onSelectMenu?: (this: ExtendedClient, interaction: AnySelectMenuInteraction<'cached'>, menuId: string) => void | Promise<void>;
}

export class Command {
  builder: SharedSlashCommand;
  defer: boolean;
  ephemeral: boolean;
  modals?: Record<string, ModalBuilder>;
  execute: (this: ExtendedClient, interaction: ChatInputCommandInteraction<'cached'>) => void | Promise<void>;
  onAutocomplete?: (this: ExtendedClient, interaction: AutocompleteInteraction<'cached'>) => readonly ApplicationCommandOptionChoiceData[] | Promise<readonly ApplicationCommandOptionChoiceData[]>;
  onButton?: (this: ExtendedClient, interaction: ButtonInteraction<'cached'>, buttonId: string) => void | Promise<void>;
  onModalSubmit?: (this: ExtendedClient, interaction: ModalSubmitInteraction<'cached'>, modalId: string) => void | Promise<void>;
  onSelectMenu?: (this: ExtendedClient, interaction: AnySelectMenuInteraction<'cached'>, menuId: string) => void | Promise<void>;

  constructor(options: CommandOptions) {
    this.builder = options.builder;
    this.defer = options.defer;
    this.ephemeral = options.ephemeral;
    this.modals = options.modals;
    this.execute = options.execute;
    this.onAutocomplete = options.onAutocomplete;
    this.onButton = options.onButton;
    this.onModalSubmit = options.onModalSubmit;
    this.onSelectMenu = options.onSelectMenu;
  }
}
