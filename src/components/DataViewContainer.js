import React from "react";
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import { Radio, Row, Col, Switch, Icon } from "antd";
import _ from 'lodash';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
  state = {
    minCount: 2,
    chartType: "hexbin",
    displayToolTips: true,
  };
  onCountSliderChange = count => {
    this.setState({ minCount: count });
  };

  onChartTypeChange = e => {
    this.setState({
      chartType: e.target.value
    });
  };

  onTooltipChange = (displayToolTips) => {
      this.setState({ displayToolTips });
  }
  
  render() {
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={this.state.minCount}
          chartType={this.state.chartType}
          displayToolTips={this.state.displayToolTips}
        />
        <div className="filters">
          {this.state.chartType === "hexbin" ? (
            <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)} />
          ) : null}
          <Row>
            <Col span={12} offset={2}>
              <RadioGroup
                onChange={this.onChartTypeChange}
                value={this.state.chartType}
              >
                <Radio value="hexbin">Hexbin</Radio>
                <Radio value="scatter">Scatter</Radio>
              </RadioGroup>
            </Col>
            <Col span={6} />
            <Switch
              checkedChildren="on"
              unCheckedChildren="off"
              defaultChecked
              onChange={this.onTooltipChange}
            />
          </Row>
        </div>
      </div>
    );
  }
}
