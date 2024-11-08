/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Calendy from './calendy';


export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="contact">
      <Container>
        <SectionHeader
          title="Ready to Boost Your Brand?"
          description="Got questions or excited to get started? Drop us a message using the form or book a call directly through our Calendly. We’re here to help you make great things happen!"
        />
        <Calendy />
      </Container>
    </section>
  );
}

