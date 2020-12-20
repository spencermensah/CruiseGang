import React, {Component} from 'react';
import { Select, MenuItem } from '@material-ui/core';

class VariantSelector extends Component {
  render() {
    console.log(Object.keys(this.props.option.values["0"]["value"]["0"]));
    console.log(this.props.option.values["0"]["value"]);
    return (
      <select
        className="Product__option"
        name={this.props.option.name}
        key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          if (this.props.option.values["0"]["value"]=="SOLD OUT") {
            return (
              <option disabled value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
            )
          } else {
            return (
              <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
            )
          }
        })}
      </select>
    );
  }
}

export default VariantSelector;
