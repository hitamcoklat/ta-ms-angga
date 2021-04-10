import React, { useState, forwardRef, useImperativeHandle } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import uploadFile from "../../api/uploadFile";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const PopUploadFile = forwardRef((props, ref) => {
  const [value, setValue] = useState("fileKK");
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleUpload = () => {
    try {
      let currentFile = selectedFiles[0];

      setProgress(0);
      setCurrentFile(currentFile);

      uploadFile
        .upload(currentFile, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        })
        .then((response) => {
          setMessage(response.data.message);
          console.log(response.data)
          return props.tutupDialog({ data: response.data.data, jenisFile: value });
          // return uploadFile.getFiles();
        })
        .catch(() => {
          setProgress(0);
          setMessage("Could not upload the file!");
          setCurrentFile(undefined);
        });

      setSelectedFiles(undefined);
    } catch (error) {
        console.log(`Something went wrong! ${error}`)
    }
  };

  useImperativeHandle(ref, (e) => ({ handleUpload }));

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup
        defaultValue="fileKK"
        aria-label="gender"
        name="jenisFile"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="fileKK"
          control={<StyledRadio />}
          label="Dokumen KK (Kartu Keluarga)"
        />
        <FormControlLabel
          value="fileFoto"
          control={<StyledRadio />}
          label="Dokumen Foto"
        />
        <FormControlLabel
          value="fileKTP"
          control={<StyledRadio />}
          label="Dokumen KTP"
        />
      </RadioGroup>
      <input
        style={{ padding: 20, borderWidth: 1, borderColor: "grey" }}
        type="file"
        onChange={selectFile}
      />
    </FormControl>
  );
});

export default PopUploadFile;
