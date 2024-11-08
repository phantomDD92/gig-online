import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';

import WorkFlow from 'sections/workflow';
import Support from 'sections/support';
import ContactForm from 'sections/call-to-action';
import Partnership from 'sections/partnership';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout> 
        <SEO
          description="Landing page for GigantOnline"
          title="Gigant.Online"
        />
        <Banner />
        <Feature />
        {/* <BusinessProfit /> */}
        {/* <Knowledge /> */}
        {/* <ClientFeedback /> */}
        <WorkFlow />
        <Support />
        <ContactForm />
        {/* <Partnerships /> */}
        <Partnership />
      </Layout>
    </ThemeProvider>
  );
}
