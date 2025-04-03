import { formatEventDuration, formatEventStart } from 'utils';
import { Item, Title, Text } from './EventItem.styled';
import PropTypes from 'prop-types';

import { FaLocationDot, FaRegClock } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { IoCalendarClear } from 'react-icons/io5';

export const EventItem = ({ name, start, end, location, speaker }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Item>
      <Title>{name}</Title>
      <ul>
        <li>
          <Text>
            <FaLocationDot />
            {location}
          </Text>
        </li>
        <li>
          <Text>
            <IoMdPerson />
            {speaker}
          </Text>
        </li>
        <li>
          <Text>
            <IoCalendarClear />
            {formatedStart}
          </Text>
        </li>
        <li>
          <Text>
            <FaRegClock />
            {duration}
          </Text>
        </li>
      </ul>
    </Item>
  );
};

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
};
