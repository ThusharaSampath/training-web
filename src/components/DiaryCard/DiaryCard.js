import React from "react";
import "./DiaryCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

class DiaryCard extends React.Component {
  state = {
    shown: true,
  };
  short = this.props.discription.substring(0, 100) + " ...";
  long = this.props.discription;
  render() {
    return (
      <Card className="card" style={{ backgroundColor: "lightBlue" }}>
        <CardHeader title={this.props.title} subheader={this.props.subtitle} />
        <CardActionArea>
          <CardContent>
            <h6>{this.state.shown ? this.short : this.long}</h6>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a
            className="btn"
            onClick={() => this.setState({ shown: !this.state.shown })}
          >
            {this.state.shown ? "Show more" : "show less"}
          </a>
          <a
            className="btn"
            onClick={() => {
              this.props.deleteDiary(this.props.id);
            }}
          >
            Delete
          </a>
        </CardActions>
      </Card>
      // <div className="row">
      //   <div className="col s12 m6">
      //     <div className="card light-blue">
      //       <div className="card-content white-text">
      //         <span className="card-title">{this.props.title} </span>
      //         <h5>{this.props.subtitle} </h5>
      //         <p>{this.state.shown ? this.short : this.long}</p>
      //       </div>
      //       <div className="card-action">
      //         <a
      //           className="btn"
      //           onClick={() => this.setState({ shown: !this.state.shown })}
      //         >
      //           {this.state.shown ? "Show more" : "show less"}
      //         </a>
      //         <a
      //           className="btn"
      //           onClick={() => {
      //             this.props.deleteDiary(this.props.id);
      //           }}
      //         >
      //           Delete
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default DiaryCard;
