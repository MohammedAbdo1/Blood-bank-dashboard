import { Box, Container, Grid } from '@mui/material';
import {
  YEEBUsage, YEEBTotalDonors, YEBBTaskProgress,
  YEBBTotalProcess, YEBBDonations, YEBBTrafficByDevices,
  YEBBLastDonors, YeBBLastDonations, YEEBTotalNeeders
} from '../components/Home';

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1
      }}>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}>
            <YEEBUsage />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <YEEBTotalDonors />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <YEEBTotalNeeders />
          </Grid>
          {/* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <YEBBTaskProgress />
          </Grid> */}
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <YEBBTotalProcess sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <YEBBDonations />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <YEBBTrafficByDevices sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <YEBBLastDonors sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Page