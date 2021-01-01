import React from "react";
import ShowDays from "./ShowDays";
import Moment from "moment";
import ShowFull from "./ShowFull";
import Avatar from "./Avatar";

const meet = Moment("02/06/2019", "MM/DD/YYYY");
var now = Moment();
Date.getFormattedDateDiff = function (date1, date2) {
  var b = Moment(date1),
    a = Moment(date2),
    intervals = [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
    ],
    out = [];

  for (var i = 0; i < intervals.length; i++) {
    var diff = a.diff(b, intervals[i]);
    b.add(diff, intervals[i]);
    out.push(diff);
  }
  return out;
};

var init = Date.getFormattedDateDiff(meet, now);

class Love extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: now,
      total_days: now.diff(meet, "days") + 1,
      years: init[0],
      months: init[1],
      weeks: init[2],
      days: init[3],
      hours: init[4],
      minutes: init[5],
      seconds: init[6],
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    var now1 = Moment();
    var diff = Date.getFormattedDateDiff(meet, now1);
    this.setState({
      now: now1,
      total_days: now1.diff(meet, "days") + 1,
      years: diff[0],
      months: diff[1],
      weeks: diff[2],
      days: diff[3],
      hours: diff[4],
      minutes: diff[5],
      seconds: diff[6],
    });
  }
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Dancing",
        }}
      >
        <div style={{ textAlign: "-webkit-center" }}>
          <ShowDays days={this.state.total_days}></ShowDays>
          <ShowFull
            info={{
              years: this.state.years,
              months: this.state.months,
              weeks: this.state.weeks,
              days: this.state.days,
              hours: this.state.hours,
              minutes: this.state.minutes,
              seconds: this.state.seconds,
            }}
          ></ShowFull>
          <Avatar></Avatar>
        </div>
      </div>
    );
  }
}

export default Love;
