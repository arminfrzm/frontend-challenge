import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UnAuthorize = () => {
  const { t } = useTranslation();

  return (
    <>
    <Helmet>
        <title>FikaCrm | {t('accessDenied')}</title>
      </Helmet>
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <img alt="NotFound" src={require("../../assets/images/401.png")} width="400px" />
      <Typography color="secondary.main" variant="h3">
        {t("accessFailed")}
      </Typography>
      <Box>
        <Button sx={{ mt: 3 }} component={Link} variant="outlined" color="secondary" to="/">
          {t("backHome")}
        </Button>
        <Button sx={{ mt: 3,ml:1 }} component={Link} variant="outlined" color="secondary" to="/login">
          {t("login")}
        </Button>
      </Box>
    </Box>
    </>
  );
};
export default UnAuthorize;
