// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Avatar, Link, Divider } from '@material-ui/core';
// components
import Page from '../../../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Landing() {
  return (
    <RootStyle title="Home">
      <Container maxWidth="sm">
        <ContentStyle>
          <Avatar
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHyYQGZJu0Emg/profile-displayphoto-shrink_400_400/0/1626894766167?e=1635379200&v=beta&t=4svqnSfxyAuNOhAnuaTpczgqOxgPDX-8yG0Zd0ULHoc"
            style={{ width: 120, height: 120, border: '4px solid #eaeaea' }}
          />
          <Typography variant="h2" color="primary" component="h1" gutterBottom>
            React Starter Kit
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            This kit is based on ReactJS x ReduxJS x MaterialUI and was built with love to help the
            community of React developers everywhere. Start your React project within minutes. Happy
            Coding!.
          </Typography>
          <Typography variant="body1" color="primary">
            Made with Love by: <b>SAMAD ALI</b>
          </Typography>
          <Typography variant="body1" />
          <Divider style={{ margin: '10px 0px' }} />
          <Link color="secondary" to="https://www.linkedin.com/in/samad-ali-79387a198/">
            https://www.linkedin.com/in/samad-ali-79387a198/
          </Link>
          <Link color="secondary" to="https://github.com/samadali1">
            https://github.com/samadali1
          </Link>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
