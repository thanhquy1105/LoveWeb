import React from "react";
import Wave from "react-wavify";

class ShowDays extends React.Component {
  render() {
    return (
      <>
        <div
          style={{ width: "250px", position: "relative", marginBottom: "25px" }}
        >
          <svg viewBox="0 0 125 125">
            <mask id="myMask">
              <rect x="0" y="0" width="125" height="125" fill="white" />
              <path
                d="M3,62.5 A20,20,0,0,1,122,62.5 A20,20,0,0,1,3,62.5 Z"
                fill="black"
              />
            </mask>
            <circle
              fill="#e69915"
              cx="62.5"
              cy="62.5"
              r="62.5"
              mask="url(#myMask)"
            />
          </svg>
          <Wave
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              opacity: 0.2,
            }}
            fill="#e69915"
            mask="url(#mask)"
            options={{ height: 150, points: 4, speed: 1, amplitude: 12 }}
          >
            <mask id="mask">
              <path
                d="M0,125 A20,20,0,0,1,250,125
                                    M0,125 A20,20,0,0,0,250,125 z"
                fill="white"
              />
            </mask>
          </Wave>
          <Wave
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              opacity: 0.3,
            }}
            fill="#e69915"
            mask="url(#mask)"
            options={{ height: 150, points: 4, speed: 1, amplitude: 7 }}
          >
            <mask id="mask">
              <path
                d="M0,125 A20,20,0,0,1,250,125
                                    M0,125 A20,20,0,0,0,250,125 z"
                fill="white"
              />
            </mask>
          </Wave>
          {/* <div style={{position:'absolute',top:'65px',width:'100%',fontFamily:'Pinyon'}}>Aa aaaa</div>
                    <div style={{position:'absolute',top:'105px',width:'100%',fontFamily:'Pinyon'}}>{this.props.days}</div>
                    <div style={{position:'absolute',top:'145px',width:'100%',fontFamily:'Pinyon'}}>Days</div> */}
        </div>
      </>
    );
  }
}

export default ShowDays;
