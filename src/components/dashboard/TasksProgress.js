import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import { ArrowUpward, ShoppingBag } from '@material-ui/icons';

const Index = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            TOTAL PRODUCTS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            36
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <ShoppingBag />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 2, alignItems: 'center', display: 'flex' }}>
        <ArrowUpward sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Index;
