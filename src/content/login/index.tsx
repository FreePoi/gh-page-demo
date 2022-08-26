import { Box, Card, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

const LoginWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Login() {
  return (
    <LoginWrapper>
      <Helmet>
        <title>Flashly Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </LoginWrapper>
  );
}

export default Login;
