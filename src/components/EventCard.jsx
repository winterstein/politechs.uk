import { Card, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export default function EventCard({ event }) {
  const { title, date, time, location, description, rsvpUrl } = event;
  return (
    <Card className="event-card h-100">
      <CardBody className="d-flex flex-column">
        <div className="event-date-badge mb-2">
          <Badge color="primary" pill>{formatDate(date)} &middot; {time}</Badge>
        </div>
        <CardTitle tag="h5">{title}</CardTitle>
        <p className="event-location text-muted small mb-2">
          <i className="bi bi-geo-alt-fill me-1"></i>{location}
        </p>
        <CardText className="flex-grow-1">{description}</CardText>
        <Button
          href={rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          outline
          className="mt-auto align-self-start"
        >
          RSVP &rarr;
        </Button>
      </CardBody>
    </Card>
  );
}
