import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    minWidth: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MenuCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const { dataMenu } = props
  console.log("dataMenu", dataMenu);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {dataMenu.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            history.push(`${dataMenu.link}`);
          }}
          style={{ width: "100%" }}
          variant="contained"
          color="primary"
        >
          Lihat
        </Button>
      </CardActions>
    </Card>
  );
}
