import { formatEventDuration, formatEventStart } from 'utils';

export const EventItem = ({ name, start, end, location, speaker }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <li>
      <h3>{name}</h3>
      <ul>
        <li>
          <p>{location}</p>
        </li>
        <li>
          <p>{speaker}</p>
        </li>
        <li>
          <p>{formatedStart}</p>
        </li>
        <li>
          <p>{duration}</p>
        </li>
      </ul>
    </li>
  );
};
