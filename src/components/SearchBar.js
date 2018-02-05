import React from "react";
import nba from "nba";
import { AutoComplete, Input, Icon, Avatar } from "antd";
import { PROFILE_PIC_URL_PREFIX } from "../constants";

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value
        ? []
        : nba.searchPlayers(value).map(player => ({
            fullName: player.fullName,
            playerId: player.playerId
          }))
    });
  };

  onSelect = name => {
    this.props.handleSelectPlayer(name);
  };

  render() {
    window.nba = nba;
    const { dataSource } = this.state;
    const options = dataSource.map(player => (
      <Option
        key={player.fullName}
        value={player.fullName}
        className="player-option"
      >
        <img
          className="player-option-image"
          src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
        />
        <span className="player-option-label">{player.fullName}</span>
      </Option>
    ));
    return (
      <AutoComplete
        className="search-bar"
        dataSource={options}
        size="large"
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Search NBA Player"
        optionLabelProp="value"
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
    );
  }
}
