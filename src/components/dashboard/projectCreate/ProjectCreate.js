import React from 'react';
import SelectField from '../selectFields/SelectField'
import SelectAutocomplete from '../selectFields/SelectAutocomplete';
import DatePicker from '../selectFields/DatePicker';
import '../Dashboard.css';

const ProjectCreate = () => {

  return (
        <div className='body-project-create'>
          <div className='col-center-full'>
              <form >
                <div className='field-wrapper'>
                  <label htmlFor="proj-create-name">Project Name </label>
                  <input id="proj-create-name" className='custom-input' type='text' placeholder='Assign a project name' />
                </div>
                <div className='field-wrapper'>
                  <label htmlFor="proj-create-base-lang">Select Language(s) * </label>
                  <SelectField id={'proj-create-base-lang'} />
                </div>
                <div htmlFor="proj-base-lang" className='field-wrapper'>
                  <label htmlFor="proj-create-trans-lang">Select Language(s) * </label>
                  <SelectAutocomplete id={'proj-create-trans-lang'} />
                </div>
                <div className='field-wrapper'>
                  <label htmlFor="proj-create-deadline">Deadline </label>
                  <DatePicker id={'proj-create-deadline'} />
                </div>
                <button className='action blue' type='submit'>Create</button>
              </form>
            </div>
        </div>
  );
}

export default ProjectCreate;