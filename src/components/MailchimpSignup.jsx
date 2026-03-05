import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

export default function MailchimpSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // TODO: Replace PLACEHOLDER values with real Mailchimp account credentials before deployment.
  // Get these from your Mailchimp account: Audience > Signup forms > Embedded forms.
  const MAILCHIMP_URL =
    'https://politechs.us1.list-manage.com/subscribe/post?u=PLACEHOLDER&amp;id=PLACEHOLDER';

  const handleSubmit = (e) => {
    // Allow the native form submit to Mailchimp in production.
    // For now, show confirmation feedback.
    if (!email) {
      e.preventDefault();
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="mailchimp-signup">
      <h4>Stay informed</h4>
      <p>Join our mailing list for event updates, policy briefs, and opportunities to get involved.</p>
      {submitted ? (
        <Alert color="success">
          Thanks for signing up! Check your inbox to confirm your subscription.
        </Alert>
      ) : (
        <Form
          action={MAILCHIMP_URL}
          method="post"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
        >
          <FormGroup className="d-flex gap-2 flex-wrap">
            <Label for="mce-EMAIL" className="visually-hidden">Email address</Label>
            <Input
              type="email"
              id="mce-EMAIL"
              name="EMAIL"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow-1"
            />
            {/* Mailchimp honeypot field — replace with actual value from your embed code */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_PLACEHOLDER_PLACEHOLDER" tabIndex="-1" defaultValue="" />
            </div>
            <Button type="submit" color="primary">Subscribe</Button>
          </FormGroup>
        </Form>
      )}
    </div>
  );
}
