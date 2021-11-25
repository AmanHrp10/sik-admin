import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import { ToolBarContent, CustomerList } from 'src/components';
import customers from '../../__mocks__/customers';

const Index = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ToolBarContent title="Search Customer" />
        <Box sx={{ pt: 3 }}>
          <CustomerList customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Index;
