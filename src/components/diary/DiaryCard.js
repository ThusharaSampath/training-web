import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import useStyles from "../../theme/ComponentStyles";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";


class DiaryCard extends React.Component {
  state = {
    shown: true,
  };
  short = this.props.description.substring(0, 100) + " ...";
  long = this.props.description;

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.DiaryCardStyle} id={this.props.id}>
        <CardHeader
          className={classes.title}
          title={this.props.title}
          subheader={this.props.subtitle}
        />
        <CardActionArea>
          <CardContent className={classes.content}>
            <p>{this.state.shown ? this.short : this.long}</p>
          </CardContent>
          <p className={classes.date}>
            {" "}
            {moment(
              this.props.createdAt && this.props.createdAt.toDate()
            ).calendar()}
          </p>
        </CardActionArea>
        <CardActions>
          <Fab
            size="small"
            aria-label="Add"
            onClick={() => this.setState({ shown: !this.state.shown })}
            className={classes.btn}
            variant="outlined"
          >
            {this.state.shown ? "Show more" : "show less"}
          </Fab>
          {/* <Fab
            className={classes.btn}
            // variant="outlined"
            size="small"
            aria-label="Add"
            // onClick={() => {
            //   this.props.deleteDiary(this.props.id);
            // }}
          >
            Delete
          </Fab> */}
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(useStyles)(DiaryCard);
