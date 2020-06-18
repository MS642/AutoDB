import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Customers from '../components/customer';
import Companies from '../components/company';
import Accidents from '../components/accident';
import CustomerCompany from '../components/customer_company';
import Employees from '../components/employee';
import Vehicles from '../components/vehicle';

import Insert from '../components/db/insert';
import Delete from '../components/db/delete';
import Update from '../components/db/update';
import Selection from '../components/db/selection-projection';
import Join from '../components/db/join';
import Aggregate from '../components/db/aggregation';
import GroupBy from '../components/db/groupby';
import CustomerPlans from '../components/db/customers-plans';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95  %",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}  >
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Customer
          </Typography>
          <div className={classes.demo}>
            <Customers/>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Vehicle
          </Typography>
          <div className={classes.demo}>
                <Vehicles/>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Customer_Company
          </Typography>
          <div className={classes.demo}>
            <CustomerCompany/>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Accidents
          </Typography>
          <div className={classes.demo}>
                <Accidents/>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Company
          </Typography>
          <div className={classes.demo}>
            <Companies/>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Employee
          </Typography>
          <div className={classes.demo}>
                <Employees/>
          </div>
        </Grid>
      </Grid>
        <Insert />
        <Delete />
        <Update />
        <Selection />
        <Join />
        <Aggregate />
        <GroupBy />
        <CustomerPlans/>
    </div>
  );
}
