import upcomingEvents from '../../../src/upcoming-events.json';
import { EventList } from '../EventList/EventList';
import { Title } from '../Title/Title';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title title="24th Core Worlds Coalition Conference" />
      <EventList events={upcomingEvents} />
    </Container>
  );
};
