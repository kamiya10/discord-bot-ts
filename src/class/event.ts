import type { ClientEvents } from 'discord.js';
import type { ExtendedClient } from '@/class/client';

type Events = keyof ClientEvents;

export interface EventHandlerOptions<Event extends Events = Events> {
  event: Event;
  on?: (this: ExtendedClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  once?: (this: ExtendedClient, ...args: ClientEvents[Event]) => void | Promise<void>;
}

export class EventHandler<Event extends Events = Events> {
  event: Event;
  on?: (this: ExtendedClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  once?: (this: ExtendedClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  constructor(options: EventHandlerOptions<Event>) {
    this.event = options.event;
    this.on = options.on;
    this.once = options.once;
  };
}
