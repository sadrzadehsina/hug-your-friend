import Grid from "@material-ui/core/Grid";

const DashboardLayout = ({ children }) => {

  return (
    <Grid container direction="row">
      {children}
    </Grid>
  );
};

export { DashboardLayout };
