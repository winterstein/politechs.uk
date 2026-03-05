import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { events } from '../data/events';
import EventCard from '../components/EventCard';
import MailchimpSignup from '../components/MailchimpSignup';

const upcomingEvents = events.slice(0, 2);

export default function Landing() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Politics meets Technology.</h1>
            <p className="hero-subtitle">
              Britain faces profound challenges — from the climate crisis to inequality, from broken public services
              to the rise of AI. The answers lie at the intersection of <strong>politics and technology</strong>.
            </p>
            <div className="hero-cta d-flex gap-3 flex-wrap">
              <Button tag={Link} to="/events" color="primary" size="lg">
                Upcoming Events
              </Button>
              <Button href="#petition" color="outline-light" size="lg">
                Sign the Petition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section-pad">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h2 className="section-title text-center">Our Mission</h2>
              <div className="mission-blocks">
                <div className="mission-block">
                  <h3 className="mission-label">The Problem</h3>
                  <p>
                    Politics and technology are shaping each other at speed — yet they operate in silos. Policymakers
                    lack technical literacy. Technologists lack civic engagement. The result? Legislation that lags
                    reality, tech that erodes democracy, and society left behind.
                  </p>
                </div>
                <div className="mission-block">
                  <h3 className="mission-label">Our Method</h3>
                  <p>
                    We connect people who work at the intersection of politics and technology — through events,
                    conversations, and collaborative projects. We raise the debate on the key issues: AI governance,
                    digital rights, open data, and civic tech.
                  </p>
                </div>
                <div className="mission-block">
                  <h3 className="mission-label">Our Goal</h3>
                  <p>
                    A society where technology serves the many, not the few — where democratic values shape the
                    digital world, and where Britain leads the way in responsible, human-centred innovation.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-preview-section section-pad bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Upcoming Events</h2>
          <Row className="g-4">
            {upcomingEvents.map((event) => (
              <Col key={event.id} md={6}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button tag={Link} to="/events" color="primary" outline>
              See all events
            </Button>
          </div>
        </div>
      </section>

      {/* Mailing list */}
      <section className="signup-section section-pad">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <MailchimpSignup />
            </Col>
          </Row>
        </div>
      </section>

      {/* Petition */}
      <section id="petition" className="petition-section section-pad bg-primary text-white">
        <div className="container">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="mb-3">Take Action: Sign the Petition</h2>
              <p className="petition-text mb-4">
                We're calling on Parliament to establish a cross-party <strong>Technology &amp; Democracy Commission</strong> —
                bringing together tech leaders, civic society, and elected representatives to shape a digital future
                that works for everyone.
              </p>
              <Button
                href="https://petition.parliament.uk"
                target="_blank"
                rel="noopener noreferrer"
                color="light"
                size="lg"
              >
                Sign the Petition
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
}
