import { Row, Col, Card, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';
import { relatedGroups } from '../data/groups';

export default function RelatedGroups() {
  return (
    <main className="page-main">
      <div className="container">
        <h1 className="page-title">Related Groups</h1>
        <p className="page-intro">
          We're part of a wider ecosystem of organisations working at the intersection of politics, technology,
          and society. Here are some groups we admire and collaborate with.
        </p>
        <Row className="g-4">
          {relatedGroups.map(({ id, name, url, description, tags }) => (
            <Col key={id} md={6}>
              <Card className="group-card h-100">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5">{name}</CardTitle>
                  <CardText className="flex-grow-1">{description}</CardText>
                  <div className="group-tags mb-3">
                    {tags.map((tag) => (
                      <Badge key={tag} color="secondary" pill className="me-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    outline
                    className="align-self-start"
                  >
                    Visit website &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
}
