import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import AccountProfileDetails from "../../components/Pegawai/AccountProfileDetails";

const AddPegawai = (props) => {
  const location = useLocation()
  const [dataDetail, setDataDetail] = useState([])

  useEffect(() => {
    console.log('ini location', location)
    setDataDetail(location.state)
  }, [])
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails detail={dataDetail} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default AddPegawai;
