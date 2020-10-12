import React from "react";
import "./DiaryCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import useStyles from "../ComponentStyles";
import { withStyles } from "@material-ui/core/styles";

class DiaryCard extends React.Component {
  state = {
    shown: true,
  };
  short = this.props.discription.substring(0, 100) + " ...";
  long = this.props.discription;
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.DiaryCardStyle}>
        <CardHeader
          className="left"
          title={this.props.title}
          subheader="Mr User"
        />
        <CardActionArea>
          <CardContent className="left">
            <h6>{this.state.shown ? this.short : this.long}</h6>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Fab
            variant="outlined"
            size="small"
            aria-label="Add"
            onClick={() => this.setState({ shown: !this.state.shown })}
            className={classes.btn}
          >
            {this.state.shown ? "Show more" : "show less"}
          </Fab>
          <Fab
            className={classes.btn}
            variant="outlined"
            size="small"
            aria-label="Add"
            onClick={() => {
              this.props.deleteDiary(this.props.id);
            }}
          >
            Delete
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(DiaryCard);
