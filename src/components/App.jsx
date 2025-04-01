import upcomingEvents from '../../src/upcoming-events.json';
import { EventList } from './EventList/EventList';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div>
      <Title title="24th Core Worlds Coalition Conference" />
      <EventList events={upcomingEvents} />;
    </div>
  );
};
