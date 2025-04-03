import { EventItem } from 'components/EventItem/EventItem';
import { List } from './EventList.styled';

export const EventList = ({ events }) => {
  return (
    <List>
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
    </List>
  );
};
