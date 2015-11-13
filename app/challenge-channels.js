import pusher from './pusher';

let helpChannel;
let activityChannel;

const HELP_CHANNEL_NAME = 'private-help-pings';
const ACTIVITY_CHANNEL_NAME = 'private-activity-feed';

export function subscribeToHelp() {
  if (helpChannel) return helpChannel;
  helpChannel = pusher.subscribe(HELP_CHANNEL_NAME);
  return helpChannel;
}

export function subscribeToActivity() {
  if (activityChannel) return activityChannel;
  activityChannel = pusher.subscribe(ACTIVITY_CHANNEL_NAME);
  return activityChannel;
}
