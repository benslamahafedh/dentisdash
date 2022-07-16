import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Translate } from '@material-ui/icons';
import './header.css'
export default function Header() {
  return (
    <Grid container direction="column"
      style={{
        backgroundColor: '#FFF',
        margin: '20px',
        marginBottom:'0',
        boxShadow: '0px 0px 60px rgba(0,0,0,0.04)',
        borderRadius: '8px',
        padding: '40px',
        width: '98%'
      }}>
      {/* for user info */}
      <Grid container spacing={2}
        style={{
          background: '#F4F8FA',
          border: '1px solid #E3EBF0',
          borderRadius: '12px',
          padding: '5px'
        }}
      >
        <Grid item>
          <img width='120px' height='120px'
            style={{
              boxSizing: 'border-box',
              border: '2px solid #00A988',
              borderRadius: '50%',
              margin: '20px'
            }}
            src={require('../images/patient.jpg').default} />
        </Grid>
        <Grid item>
          <p style={{ color: '#0A2E47', font: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '36px', lineHeight: '50px' }}>Jhon Boe</p>
          <p style={{ transform: 'TranslateY(-40px)', color: '#F05423', font: 'Open Sans', fontStyle: 'normal', fontSize: '14px', lineHeight: '26px', textTransform: 'uppercase' }}>patient</p>
        </Grid>
        <Grid item xs={8}>
        </Grid>
        <Grid item>
          <div class="dropdown">
            <button class="dropbtn">Exporter en Tant que ⌄</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* for tabs */}
    </Grid>
  );
}
