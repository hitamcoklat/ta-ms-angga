import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

export default function BoxTop() {
  const [age, setAge] = React.useState("");
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "27.3%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" p={1} bgcolor="background.paper">
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Unit Kerja</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>2010</MenuItem>
            <MenuItem value={20}>2011</MenuItem>
            <MenuItem value={30}>2012</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Penugasan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>Penugasan 1</MenuItem>
            <MenuItem value={20}>Penugasan 2</MenuItem>
            <MenuItem value={30}>Penugasan 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Nama / NIK</InputLabel>
          <OutlinedInput
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
}
