import React, { Component } from 'react';
import { HealthForm } from './HealthForm';

/*
* The HealthScreen Component
*/
export default class HealthScreen extends Component {
  render() {
    return (
      <div className="container calculator-container">
        <div className="calculator">
          <div className="price-form-container">
            <p className={"sub text-center " + this.props.bodyFont}>Usiwe na shaka kupata huduma kwani vituo vya afya vipo karibu yako.</p>
            <h1 className={"pre-form-heading text-center " + this.props.headerFont}>Tafuta kituo cha afya cha karibu</h1>
            <p className={"pre-form-paragraph text-center " + this.props.bodyFont}>Anza kwa kuandika jina la sehemu yako</p>
            <HealthForm
              bodyFont={this.props.bodyFont}
            />
            
          </div>
        </div>
      </div>
    )
  }
}
