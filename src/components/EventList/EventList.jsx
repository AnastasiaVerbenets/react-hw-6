import { EventItem } from 'components/EventItem/EventItem';

export const EventList = ({ events }) => {
  return (
    <ul>
      {events.map(({ name, time, location, speaker }) => {
        return (
          <EventItem
            key={name}
            name={name}
            start={time.start}
            end={time.end}
            location={location}
            speaker={speaker}
          />
        );
      })}
    </ul>
  );
};
