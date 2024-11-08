/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Label, Input, Select, Textarea, Button } from 'theme-ui';
import BgShape from 'assets/shape-1.svg';

export default function ContactForm() {

  return (
    <section sx={styles.wrapper} id="call">
      <Container>
        <Heading
          as="h2"
          sx={{ variant: 'sectionHeader.title', }}
        >
          Shoot Us an Email
        </Heading>
        <Box as="form" onSubmit={(e) => e.preventDefault()} sx={styles.contentBox}>
          <Label htmlFor="username" sx={styles.label}>Name</Label>
          <Input name="username" id="username" mb={3} sx={styles.text} />
          <Label htmlFor="phone" sx={styles.label}>Phone Number</Label>
          <Input name="phone" id="phone" mb={3} sx={styles.text} />
          <Label htmlFor="email" sx={styles.label}>Email</Label>
          <Input name="email" id="email" mb={3} sx={styles.text} />
          <Label htmlFor="sound" sx={styles.label}>Are you a</Label>
          <Select name="sound" id="sound" mb={3} sx={styles.select}>
            <option>INFLUENCER</option>
            <option>COMPANY</option>
            <option>AGENCY</option>
            <option>BRAND</option>
            <option>OTHER</option>
          </Select>
          <Label htmlFor="message" sx={styles.label}>Message</Label>
          <Textarea name="message" id="message" rows={6} mb={3} sx={styles.text} />
          <Button sx={styles.submit}>Submit</Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  wrapper: {
    marginTop: [0, null, null, -8],
  },
  container: {
    px: [0, '0 !important', '30px !important'],
  },
  label: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: [2, 2, 3, null, 3],
  },
  text: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: [2, 2, 3, null, 3],
  },
  select: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: [2, 2, 3, null, 3],
    minWidth: '250px',
  },
  submit: {
    borderRadius: '15px',
    backgroundColor: '#FF6A3B',
    fontSize: [2, 2, 3, null, 3],
  },
  contentBox: {
    padding: ['55px 30px 60px', null, null, '55px 30px 60px', '55px 25% 60px'],
    // backgroundColor: '#3f3d56',
    backgroundImage: ['none', null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    backgroundSize: ['120px', null, null, null, 'auto'],
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'column'],
    justifyContent: ['center', null, null, 'space-between'],
  },
  heading: {
    fontSize: [6, 7, 8, null, 9],
    fontFamily: 'heading',
    color: 'white',
    letterSpacing: 'heading',
    fontWeight: 'body',
    lineHeight: [1.4, 1.45],
    width: ['100%', '80%', null, 400, '50%', '45%'],
    mb: [5, null, null, 0],
    mt: -1,
  },
};
