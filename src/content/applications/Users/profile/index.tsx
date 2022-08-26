import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';
import { Auth0ContextInterface, useAuth0, User } from '@auth0/auth0-react';

function ManagementUserProfile() {
  const { user, isLoading }: Auth0ContextInterface<User> = useAuth0();
  console.log('Auth0 user: ', user);

  const userProfile = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: user?.picture,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465',
    ...user
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={userProfile} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
