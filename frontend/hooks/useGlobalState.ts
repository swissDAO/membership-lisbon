import { createGlobalState } from 'react-hooks-global-state';

type EventsConfig = {
  eventId: string | undefined;
  secrets: string[] | undefined;
};

const initialEventConfig: EventsConfig = {
  eventId: undefined,
  secrets: undefined,
};

export const eventState = createGlobalState(initialEventConfig);

export const useModalState = eventState.useGlobalState;
