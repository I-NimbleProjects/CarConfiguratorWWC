import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
// Styles
import './Summary.css';
import { useState } from 'react/cjs/react.production.min';
import Form from '../Form/Form';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */ 
const Summary = ({
  config = null,
  models = null,
  totalPrice = 0
}) => {
  const selectedModel = models?.find(model => model?.key === config?.model);
  const selectedType = selectedModel?.types?.find(type => type.value === config?.car_type);
  const selectedColor = selectedModel?.colors?.find(color => color.value === config?.color);
  const selectedWheels = selectedModel?.wheels?.find(wheels => wheels.value === config?.wheels);
  // const selectedInteriorColor = selectedModel?.interiorColors?.find(interiorColor => interiorColor.value === config?.interior_color);
  // const selectedInteriorLayout = selectedModel?.interiorLayouts?.find(interiorLayout => interiorLayout.value === config?.interior_layout);
  const selectedInterior = selectedModel?.interior?.find(interior => interior.value === config?.interior);
  const selectedBody = selectedModel?.body?.find(body => body.value === config?.body);
  const selectedLighting = selectedModel?.lighting?.find(lighting => lighting.value === config?.lighting);
  const selectedAccessories = selectedModel?.accessories?.find(accessories => accessories.value === config?.accessories);
  const selectedJack = selectedModel?.jack?.find(jack => jack.value === config?.jack);
  const selectedWinch = selectedModel?.winch?.find(winch => winch.value === config?.winch);

  return (
    <div className="summary">
      <h1>Your {selectedModel?.name}</h1>
      {/* <p className="summary-edd">Estimated delivery: 5-9 weeks</p> */}
      <div className="summary-content">
        <p>Summary</p>
        <ul>
          <li>
            <span >{selectedModel?.name} {selectedType?.label}</span>
            {/* <span>{formatPrice(selectedType?.price)}</span> */}
          </li>
          <li>
            <span>{selectedColor?.label}</span>
            {/* <span>{formatPrice(selectedColor?.price)}</span> */}
          </li>
          {/* {selectedInterior != null && 
          <li>
            <span>{selectedInterior?.label}</span>
          </li>
          } */}
          {/* <li>
            <span>{selectedBody?.label}</span>
          </li> */}
          {/* <li>
            <span>{selectedLighting?.label}</span>
          </li> */}
          {/* {selectedAccessories != null && 
          <li>
            <span>{selectedAccessories?.label}</span>
          </li>
          } */}
          {selectedJack.label !== "None" && 
          <li>
            <span>{selectedJack?.label}</span>
          </li>
          }
          {selectedWinch.label !== "None" && 
          <li>
            <span>{selectedWinch?.label}</span>
          </li>
          }
          {/* <li>
            <span>{selectedWheels?.label}</span>
            <span>{formatPrice(selectedWheels?.price)}</span>
          </li> */}
          <li>
            {/* <span>{selectedInteriorColor?.label}</span> */}
            {/* <span>{formatPrice(selectedInteriorColor?.price)}</span> */}
          </li>
          <li>
            {/* <span>{selectedInteriorLayout?.label}</span> */}
            {/* <span>{formatPrice(selectedInteriorLayout?.price)}</span> */}
          </li>
          
        </ul>
        {/* <p>
          <span>Total price</span>
          <span>{formatPrice(totalPrice)}</span>
        </p> */}
      </div>
      <Form></Form>
    </div>
  );
};

Summary.propTypes = {
  config: PropTypes.object,
  models: PropTypes.array,
  totalPrice: PropTypes.number
};

export default Summary;