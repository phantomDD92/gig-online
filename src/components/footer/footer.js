/** @jsx jsx */
import { jsx, Heading, Box, Text, Flex, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import menuItems from './footer.data';

import FooterLogo from 'assets/footer-logo.png';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.copyrightArea}>
            <Box className="footer__logo">
              <Logo src={FooterLogo} />
            </Box>
            {/* <nav className="footer__menu">
              <Link path="/" label="Terms of use" />
              <Link path="/" label="Privacy" />
            </nav> */}
            <div style={{ height: 30 }} />
            <Text as="p" sx={styles.copyrightArea.copyright}>
              Copyright ©2018-2024, All Rights Reserved
            </Text>
          </Box>
          <Flex sx={styles.footer.menuArea}>
            <Box sx={styles.footer.about} >
              <Text as="p" sx={styles.copyrightArea.copyright}>
                Unlock your brand's potential with GigantOnline.<br/>
                Our expertise in marketing automation, web development, custom software, SEO, and targeted advertising on major platforms ensures you get solutions that deliver real results.<br/>
                Partner with us to streamline your digital strategy and drive exceptional growth.
              </Text>
            </Box>
            {menuItems &&
              menuItems.map(({ header, items }, i) => (
                <Box sx={styles.footer.menus} key={i}>
                  <Heading sx={styles.footer.heading}>{header}</Heading>
                  <nav>
                    {items.map(({ path, label, name, icon }, i) => (
                      <Link
                        className={name}
                        path={path}
                        key={i}
                        sx={styles.footer.link}
                      >
                        {icon}
                        {label}
                      </Link>
                    ))}
                  </nav>
                </Box>
              ))}
          </Flex>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'background_secondary',
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      display: 'flex',
      flexWrap: 'wrap',
      pt: ['60px', null, null, null, 8],
      pb: [2, null, null, null, '30px'],
      pl: [0, null, 4, 6, null, 7],
      pr: [0, null, 4, 6],
    },
    menuArea: {
      width: [
        '100%',
        null,
        null,
        null,
        'calc(100% - 250px)',
        'calc(100% - 300px)',
      ],
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      pb: 3,
    },
    about: {
      mb: ['45px', null, null, '50px', '60px'],
      pr: 7,
      pl: 7,
      width: ['100%', null, '75%', '75%'],
    },
    menus: {
      display: 'flex',
      flexDirection: 'column',
      mb: ['45px', null, null, '50px', '60px'],
      pr: 7,
      pl: 7,
      width: ['100%', null, '25%', '25%'],
    },

    heading: {
      fontSize: [2, 3],
      color: 'heading',
      fontWeight: 'heading',
      litterSpacing: 'heading',
      mb: [4, null, null, null, 5, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', 1],
      color: 'text_secondary',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.9],
      svg: {
        width: '17px',
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
      '&.facebook > svg': {
        color: '#3B5998',
      },
      '&.twitter > svg': {
        color: '#55ACEE',
      },
      '&.github > svg': {
        color: '#161614',
      },
      '&.dribbble > svg': {
        color: '#E74D89',
      },
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
  },
  copyrightArea: {
    width: ['100%', null, null, null, '250px', '300px'],
    flexShrink: 0,
    order: [2, null, null, null, 0],
    textAlign: ['center', null, null, null, 'left'],
    '.footer__logo': {
      a: {
        mr: 0,
        img: {
          mx: ['auto', null, null, null, 0],
        },
      },
    },
    '.footer__menu': {
      display: 'flex',
      justifyContent: ['center', null, null, null, 'flex-start'],
      flexWrap: 'wrap',
      mt: [3, null, null, null, 4],
      a: {
        fontSize: ['14px', 1],
        color: 'text_secondary',
        fontWeight: 'body',
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.35s',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.9],
        ':before': {
          px: 2,
          content: '"|"',
          color: 'text_secondary',
        },
        ':first-of-type:before': {
          display: 'none',
        },
        ':hover': {
          color: 'primary',
        },
      },
    },
    copyright: {
      fontSize: ['14px', 1],
      color: '#6D7886',
      // textAlign: 'center',
      pt: 1,
    },
  },
};
