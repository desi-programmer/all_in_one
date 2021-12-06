import { TextField, Stack, Grid, Box } from '@mui/material'

import React from 'react'

export default function Form() {
    return (
        <>
            <h1>Form in Material Ui </h1>
            <Grid container alignItems="center" justifyContent="center" >
                <Grid item xs={12} sm={10} md={8} lg={6} xl={6}    >

                    <Stack spacing={2}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="outlined-basic" label="Outlined" size="medium" variant="outlined" />
                        <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>

                </Grid>
            </Grid>
        </>
    )
}
