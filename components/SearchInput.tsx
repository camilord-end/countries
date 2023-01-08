import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// @ts-ignore
export const SearchInput = ({ data }) => {
  return (
    <Autocomplete
      id='country-select-demo'
      sx={{ width: 300 }}
      options={data}
      autoHighlight
      getOptionLabel={(option) => option.name.common}
      renderOption={(props, option) => (
        <Box component='li' {...props}>
          {option.name.common}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search a country'
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
  )
}
