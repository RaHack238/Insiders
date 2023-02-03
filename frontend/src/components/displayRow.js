import React from 'react';
import { Grid } from '@material-ui/core';

const DisplayRow = ({ text1, text2, text3, text4, text5, text6 }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        marginTop: '0.25rem',
        marginBottom: '0.25rem',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#C8C8C8',
        backgroundColor: '#e5e5e5',
        borderRadius: '10px 10px 10px 10px',
        width: '70vw',
      }}
    >
      <Grid item xs={2}>
        <p>{text1}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{text2}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{text3}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{text4}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{text5}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{text6}</p>
      </Grid>
    </Grid>
  );
};

export default DisplayRow;
