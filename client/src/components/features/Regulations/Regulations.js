import React from 'react';
import regulationContent from './RegulationsContent';
import { HtmlBox } from '../../index';
import './Regulations.scss';

const Regulations = () => (
  <div className="regulations">
    <h1 className="regulations__title">Regulamin Sklepu Internetowego Mimushka</h1>
    <p className="regulations__info">(obowiązuje od dnia 24.10.2019 roku)</p>
    <HtmlBox>{ regulationContent }</HtmlBox>
  </div>
);

export default Regulations;