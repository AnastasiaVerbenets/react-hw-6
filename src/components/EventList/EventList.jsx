import { EventItem } from 'components/EventItem/EventItem';
import { List } from './EventList.styled';
import PropTypes from 'prop-types';

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

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
    })
  ).isRequired,
};
