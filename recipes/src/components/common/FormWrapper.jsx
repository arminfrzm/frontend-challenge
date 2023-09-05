import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";

const FormWrapper = ({ children, loadingSubmit, onSubmit,onBack }) => {

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
        <Button variant="outlined" color="secondary" onClick={onBack} sx={{ mr: 1 }}>
          {"Back"}
        </Button>
        <LoadingButton variant="contained" color="primary" loading={loadingSubmit} type="submit" loadingPosition="start" startIcon={<SaveIcon />}>
          {"Save"}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default React.memo(FormWrapper);
