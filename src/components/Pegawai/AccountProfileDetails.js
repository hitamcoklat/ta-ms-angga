import React, { useRef } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chip,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import PopUpUploadFile from "./PopUpUploadFile";

const useStyles = makeStyles((theme) => ({
  widthBtn: {
    // width: '100%',
    margin: 20,
  },
  gridPadding: {
    padding: 10,
  },
  formControl: {
    minWidth: "100%",
  },
}));

const AccountProfileDetails = (props) => {
  const popUpRef = useRef();
  const classes = useStyles();
  const [values, setValues] = useState({
    nik: "",
    namaLengkap: "",
    tempatLahir: "",
    tglLahir: "",
    alamat: "",
    agama: "",
    jenisKelamin: "",
    hp: "",
    telp: "",
    email: "",
    rek: "",
    npwp: "",
    bpjs: "",
    fileKK: "",
    fileKTP: "",
    fileFoto: "",
    tglUbah: "",
    pengubah: "",
  });
  const [listFile, setListFile] = useState([]);

  const setDetailFile = (dataFile) => {
    // setListFile(listFile.push(dataFile));
    if(listFile.length <= 0) {
      console.log('data kosonggg')
      setListFile(listFile.push(dataFile));
    } else {
    }
    console.log("listFile", listFile);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const showPopUpFile = () => {
    popUpRef.current.handleShow();
  };

  return (
    <React.Fragment>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Pegawai"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="N I K "
                  name="nik"
                  onChange={handleChange}
                  value={values.nik}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="NAMA LENGKAP"
                  name="namaLengkap"
                  onChange={handleChange}
                  value={values.namaLengkap}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="TEMPAT LAHIR"
                  name="tempatLahir"
                  onChange={handleChange}
                  value={values.tempatLahir}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="TANGGAL LAHIR"
                  name="tglLahir"
                  onChange={handleChange}
                  value={values.tglLahir}
                  type="date"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="ALAMAT"
                  name="alamat"
                  onChange={handleChange}
                  value={values.alamat}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="AGAMA"
                  name="agama"
                  onChange={handleChange}
                  value={values.agama}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Jenis Kelamin
                  </InputLabel>
                  <Select
                    value={values.jenisKelamin}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value={`pria`}>Pria</MenuItem>
                    <MenuItem value={`wanita`}>Wanita</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="HP"
                  name="hp"
                  value={values.hp}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="TELPON"
                  name="telp"
                  onChange={handleChange}
                  value={values.telp}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="EMAIL"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="REKENING"
                  name="rek"
                  onChange={handleChange}
                  value={values.rek}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="N P W P"
                  name="npwp"
                  value={values.npwp}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="BPJS"
                  name="bpjs"
                  onChange={handleChange}
                  value={values.bpjs}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Grid style={{ marginBottom: 10 }} item md={12} xs={12}>
                  <Button
                    style={{ marginBottom: 10 }}
                    variant="outlined"
                    color="primary"
                    disableElevation
                  >
                    File KK Berhasil di Upload
                  </Button>
                </Grid>
                <Button
                  onClick={showPopUpFile}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Tambahkan File
                </Button>
                <Chip
                  style={{ marginTop: 10 }}
                  size="small"
                  label="Tambahkan file pendukung seperti KK, KTP dan Foto"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Grid item container>
            <Grid spacing={1} item lg={6}>
              <Button
                className={classes.widthBtn}
                color="primary"
                variant="contained"
              >
                Reset
              </Button>
              <Button
                style={{
                  backgroundColor: "#009688",
                  color: "white",
                }}
                className={classes.widthBtn}
                variant="contained"
              >
                Save details
              </Button>
            </Grid>
          </Grid>
          <PopUpUploadFile ref={popUpRef} setDetailFile={setDetailFile} />
        </Card>
      </form>
    </React.Fragment>
  );
};

export default AccountProfileDetails;
