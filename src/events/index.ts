import type { EventHandler } from '@/class/event';

import onButton from '#/core/onButton';
import onCommand from '#/core/onCommand';
import onModalSubmit from '#/core/onModalSubmit';

import ready from '#/custom/ready';

export default [onButton, onCommand, onModalSubmit, ready] as EventHandler[];
