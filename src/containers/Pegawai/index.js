import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import BoxTop from "../../components/Pegawai/BoxTop";
import PopUpAddPegawai from "../../components/Pegawai/PopUpAddPegawai"

import pegawaiApi from '../../api/pegawai'

const columns = [
  { field: "id", headerName: "NO", width: 70 },
  { field: "NAMA_PEGAWAI_KONTRAK", headerName: "Nama Lengkap", width: 250 },
  { field: "TANGGAL_DITERIMA", headerName: "Tanggal Diterima", width: 250 },
  { field: "TANGGAL_USUL", headerName: "Tanggal Usul", width: 250 },
  { field: "NOMOR_USUL", headerName: "Nomor Usul", width: 250 },
  { field: "YANG_MENGUSULKAN", headerName: "Yang Mengusulkan", width: 250 },
  { field: "UNIT_KERJA_1", headerName: "Unit Kerja 1", width: 250 },
];

export default function Pegawai() {
  const [open, setOpen] = useState(false);
  const [dataPegawai, setDataPegawai] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      pegawaiApi.getPegawai().then((res) => {
          setDataPegawai(res.data);
          console.log('resPegawai', res.data)
      })
  }, [])

  return (
    <Container maxWidth="md">
      <BoxTop />
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography
          style={{ marginBottom: 20, marginTop: 20 }}
          variant="h5"
          component="h2"
        >
          Daftar Pegawai
        </Typography>
        <PopUpAddPegawai />
      </Box>
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={dataPegawai}
          columns={columns}
          pageSize={10}
          pagination
          checkboxSelection
        />
      </div>
    </Container>
  );
}
