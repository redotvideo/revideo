import {PostHog} from 'posthog-node';

const Client = new PostHog('phc_YpKoFD7smPe4SXRtVyMW766uP9AjUwnuRJ8hh2EJcVv', {
  host: 'https://eu.posthog.com',
});

export enum EventName {
  RenderStarted = 'render-started',
}

export function sendEvent(eventName: EventName, eventProperties: object = {}) {
  if (process.env.DISABLE_TELEMETRY === 'true') {
    return;
  }

  try {
    Client.capture({
      distinctId: 'anonymous-user',
      event: eventName,
      properties: eventProperties,
    });
  } catch (e) {
    console.error(e);
  }
}
