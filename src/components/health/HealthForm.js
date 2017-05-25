import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

/*
* The form querying the user location
*/
export class HealthForm extends Component {

  render() {
    return (
      <Form className="price-form" horizontal>
        <FormGroup controlId="formHorizontalPlace">
          <Col componentClass={ControlLabel} sm={2} smOffset={2}>Ninaishi</Col>
          <Col sm={4}>
            <Typeahead
              className={this.props.bodyFont}
              labelKey="name" options={['Dar es Salaam','Pwani']} placeholder="Jina la sehemu"
            /></Col>
        </FormGroup>
        <FormGroup>
          <Button className={"show-result-btn col-sm-offset-5 col-xs-offset-3 "}  type="submit">TAFUTA</Button>
        </FormGroup>
      </Form>
    )
  }
}
