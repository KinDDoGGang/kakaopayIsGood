import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomDropdownList( {size, TemplateList, placeText, mSize, callbackTemplate} ) {
  const [template, setTemplate] = React.useState('');

  const handleChange = (event) => {
    setTemplate(event.target.value);
    callbackTemplate(event.target.value);
  };

  return (
    <Box 
        sx={{ minWidth: 120 }}
        width={size}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeText}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={template}
          label="select"
          onChange={handleChange}
          sx={{
            '& > :not(style)': { m: mSize },
          }}
        >
          {
            (TemplateList || [] ).map( (v, i) => {
              return <MenuItem value={i+1} name={v.id}>{v.label}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}