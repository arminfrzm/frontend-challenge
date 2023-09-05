import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <>
      <Helmet>
        <title>Recipes | {"PageNotFound"}</title>
      </Helmet>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <img alt="NotFound" src={require("../../assets/images/404.png")} width="400px" />
        <Typography color="secondary.main" variant="h3">
          {"PageNotFound"}
        </Typography>
        <Button sx={{ mt: 3 }} component={Link} variant="outlined" color="secondary" to="/">
          {"BackHome"}
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
