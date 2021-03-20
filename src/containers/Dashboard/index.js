import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MenuCard from "../../components/MenuCard";
import { MenuKiri, MenuKanan } from '../../utils/menuDashboard'

import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  widthBox: {
    width: "50%",
  },
  menuBox: {
    marginLeft: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();

  console.log("MenuKiri", MenuKiri);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: "#fff", height: "100vh" }}
        >
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>
              Berisi jenis menu untuk mengisi tabel master, dan beberapa
              pengaturan
            </strong>
          </Alert>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            p={1}
            m={2}
            bgcolor="background.paper"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p={1}
              m={2}
              bgcolor="background.paper"
            >
              <Typography variant="h5" component="h2">
                Informasi
              </Typography>
              {MenuKiri.map((item, index) => {
                return <MenuCard dataMenu={item} key={index} />;
              })}
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={1}
              m={2}
              bgcolor="background.paper"
            >
              <Typography variant="h5" component="h2">
                Laporan
              </Typography>
              {MenuKanan.map((item, index) => {
                return <MenuCard dataMenu={item} key={index} />;
              })}
            </Box>
          </Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
