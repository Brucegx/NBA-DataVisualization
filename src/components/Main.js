import React from "react";
import nba from "nba";
import { Profile } from "./Profile";
import { DataViewContainer } from "./DataViewContainer";
export class Main extends React.Component {
  state = {
    playerId: nba.findPlayer('Stephen Curry').playerId,
    playerInfo: {}
  };

  componentDidMount() {
   nba.stats.playerInfo({ PlayerID: this.state.playerId }).then((info) => {
     const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
     console.log(playerInfo);
     this.setState({
       playerInfo: playerInfo,
     });
   });
 }


  render() {
    return (
      <div className="main">
        <Profile  playerInfo={this.state.playerInfo}/>
        <DataViewContainer playerId={this.state.playerId}/>
      </div>
    );
  }
}
