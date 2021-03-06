import React from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Home from "./containers/Home/Home";
import Dashboard from "./containers/Dashboard";
import Setting from "./containers/Setting/Setting";
import Pegawai from "./containers/Pegawai";
import AddPegawai from "./containers/Pegawai/AddPegawai";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import { getTheme } from "./containers/Setting/settingsReducer";

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

export default function App() {
  const theTheme = useSelector(getTheme);

  return (
    <MuiThemeProvider theme={createMuiTheme(theTheme)}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Router>
          <Switch>
            <DashboardRoute path="/dashboard" component={Dashboard} />
            <DashboardRoute path="/setting" component={Setting} />
            <DashboardRoute exact path="/pegawai" component={Pegawai} />
            <DashboardRoute exact path="/pegawai/add" component={AddPegawai} />
            <DashboardRoute exact path="/" component={Dashboard} />
            <EmptyRoute component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}
