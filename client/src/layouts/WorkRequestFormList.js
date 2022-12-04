import React, {useEffect} from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import {useOutletContext } from 'react-router-dom';

const theme = createTheme();

export default function WorkRequestFormList() {
  const { workRequestList } = useOutletContext();

  useEffect(() => {
    console.log('workRequestList >> ',workRequestList);
  }, []);
  

  const [pageSize, setPageSize] = React.useState(25);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
    >
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap >
        홈 이미지 / 요청 목록
        </Typography>
        </Toolbar>
    </AppBar>
    <Container component="main" sx={{ mb: 15 }} style={{ float:'left' }}>
        <Grid container spacing={3}>
          <Paper variant="outlined" style={{width:'100%', height:'700px'}}sx={{ my: { xs: 15, md: 5 }, p: { xs: 2, md: 3 } }} >
            <div style={{  width: '100%', height:'100%' }}>
              <DataGrid
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                pagination
                rows={workRequestList['rows']}
                columns={workRequestList['columns']}
              />
            </div>
          </Paper>
        </Grid>
        </Container>
    </ThemeProvider>
  );
}
