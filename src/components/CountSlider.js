import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
 state = {
   inputValue: 2,
 }
 onChange = (value) => {
   value = Number(value) || 2;
   this.setState({
     inputValue: value,
   });
   this.props.onCountSliderChange(value);
 }
 render() {
   return (
     <Row>
       <Col span={12} offset={3}>
         <Slider
           min={1}
           max={10}
           onChange={this.onChange}
           value={this.state.inputValue} />
       </Col>
       <Col span={4}>
         <InputNumber
           min={1}
           max={10}
           style={{ marginLeft: 16 }}
           value={this.state.inputValue}
           onChange={this.onChange}
         />
       </Col>
     </Row>
   );
 }
}
