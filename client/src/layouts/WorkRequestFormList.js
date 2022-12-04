import * as React from 'react';

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


const theme = createTheme();

export default function WorkRequestFormList() {

  const dataGridColumns = [
    { field: "requestId", headerName: "요청ID", flex: 1 },
    { field: "title", headerName: "제목", flex: 1 },
    { field: "writer", headerName: "작성자", flex: 1 },
    { field: "insertDt", headerName: "작성일시", flex: 1 },
  ];

  const dataGridRows = [
    {
      id: 1,
      requestId:
        "AWS EBS volumes are not encrypted deleted on Aug 05, 2021 at 21:35 by template@redlock.io",
      title: 8766,
      image: "https://i.ibb.co/J71dLrX/jongsun-lee-F-p-SZO-je-E8-unsplash.jpg",
      writer: "Config",
      insertDt: "Low",
    },
    {
      id: 2,
      requestId: "AWS EC2 Instance IAM Role not enabled",
      title: 8205,
      image: "https://i.ibb.co/HBq1MxW/daniel-olah-d-FA5-Xycbho-Q-unsplash.jpg",
      writer: "Config",
      insertDt: "Medium",
    },
    {
      id: 3,
      requestId:
        "GCP VM disks not encrypted with Customer-Supplied Encryption Keys (CSEK)",
      title: 8079,
      image: "https://i.ibb.co/qJ9JJ0K/aldebaran-s-u-Xch-DIKs4q-I-unsplash.jpg",
      writer: "Config",
      insertDt: "Low",
    },
    {
      id: 4,
      requestId:
        "List of EC2 Running Instances deleted on Dec 14, 2019 at 8:53 by akristensen@paloaltonetworks.com",
      title: 5004,
      image:
        "https://i.ibb.co/zbW7hVv/neven-krcmarek-9d-Tg44-Qhx1-Q-unsplash.jpg",
      writer: "Config",
      insertDt: "Low",
    },
    {
      id: 5,
      requestId:
        "Sensitive network configuration updates in AWS deleted on Aug 05, 2021 at 21:35 by template@redlock.io",
      title: 3515,
      image: "https://i.ibb.co/h9LpfBP/daniel-olah-Urd-Blloc3o-Y-unsplash.jpg",
      writer: "Audit Event",
      insertDt: "Low",
    },
    {
      id: 6,
      requestId:
        "Sensitive configuration updates deleted on Aug 05, 2021 at 21:35 by template@redlock.io",
      title: 2978,
      image: "https://i.ibb.co/3BpVRNM/aldebaran-s-d-Jlk-MGUn9n4-unsplash.jpg",
      writer: "Audit Event",
      insertDt: "Low",
    },
    {
      id: 7,
      requestId:
        "GCP VM instances have block project-wide SSH keys feature disabled",
      title: 2325,
      image: "https://i.ibb.co/PwZXnfJ/joel-filipe-Qwo-NAhbm-LLo-unsplash.jpg",
      writer: "Config",
      insertDt: "Medium",
    },
    {
      id: 8,
      requestId:
        "AWS EC2 instances with Public IP and associated with Security Groups have Internet Access",
      title: 1385,
      image:
        "https://i.ibb.co/D1mY0hY/alexander-andrews-y-OIT88x-Wkbg-unsplash.jpg",
      policyType: "Config",
      insertDt: "Medium",
    }
  ];
  

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
                rows={dataGridRows}
                columns={dataGridColumns}
              />
            </div>
          </Paper>
        </Grid>
        </Container>
    </ThemeProvider>
  );
}
