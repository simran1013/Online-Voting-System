import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './Detail.css';

const languageOptions = [
  { key: 'AITCP', text: 'All India Trinamool Congress Party', value: 'All India Trinamool Congress Party' },
  { key: 'BSP', text: 'Bahujan Samaj Party', value: 'Bahujan Samaj Party' },
  { key: 'BJP', text: 'Bhartiya Janta Party', value: 'DBhartiya Janta Party' },
  { key: 'CPI', text: 'Communist Party Of India', value: 'Communist Party Of India' },
  { key: 'INC', text: '	Indian National Congress', value: 'Indian National Congress' },
  { key: 'NCP', text: '	National Congress Party', value: 'National Congress Party' },

  
]

const DropdownExampleSearchDropdown = () => (
  <Dropdown
 
  fluid
  selection
    options={languageOptions}
    search
    className="drop"
    placeholder='Select Party'
  ></Dropdown>
)

export default DropdownExampleSearchDropdown