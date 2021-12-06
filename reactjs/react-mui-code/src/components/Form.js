    import { TextField, Stack, Grid, Box, Button, InputLabel, Select, MenuItem, FormControl, FormGroup, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, Input, FormHelperText } from '@mui/material'

    import React from 'react'

    export default function Form() {
        return (
            <>
                <h1>Form in Material UI </h1>
                <Grid container alignItems="center" justifyContent="center" >
                    <Grid item xs={12} sm={10} md={8} lg={6} xl={6}    >

                        <Stack spacing={2}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" error={false} />

                            <FormControl>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" error={true} />
                                <FormHelperText id="my-helper-text" error={true}>We'll never share your email.</FormHelperText>
                            </FormControl>
                            <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                            <FormControl>
                                <FormLabel>Select a File</FormLabel>
                                <Box display="inline-block">
                                    <Button variant="outlined"
                                        component="label"
                                        size="large">
                                        Select File
                                        <input
                                            type="file"
                                            accept=".exe"
                                            hidden
                                        />
                                    </Button>
                                </Box>
                            </FormControl>
                            <FormGroup>
                                <FormControl>
                                    <TextField id="standard2" label="Standard" variant="standard" />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me ?" />
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </FormGroup>
                            <Button variant="contained" size="large">Login</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        )
    }
