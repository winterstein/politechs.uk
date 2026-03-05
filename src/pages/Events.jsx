import { Row, Col } from 'reactstrap';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

export default function Events() {
  return (
    <main className="page-main">
      <div className="container">
        <h1 className="page-title">Events</h1>
        <p className="page-intro">
          Join us at our next events — from panel discussions and workshops to hackathons and networking sessions.
          All events welcome people from politics, technology, civil society, and beyond.
        </p>
        <Row className="g-4">
          {events.map((event) => (
            <Col key={event.id} md={6} lg={4}>
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
}
