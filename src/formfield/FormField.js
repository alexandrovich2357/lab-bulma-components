import React from 'react';
import 'bulma/css/bulma.css';

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'></label>
        <div class="field">
  <label class="label">{props.label}</label>
  <div class="control">
    <input class="input" type={props.type} placeholder={props.placeholder} />
  </div>
</div>
      </div>
    );
  };
export default FormField;


