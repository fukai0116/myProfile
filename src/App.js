import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box, IconButton, Link, Paper } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: '20px', backgroundColor: '#424242' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            俺の自己紹介
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
          <Box textAlign="left" padding={5}>
            <Typography textAlign="center" variant="h4" component="h1" gutterBottom style={{ color: '#3f51b5' }}>
              名前：とっしー
            </Typography>
            <Typography variant="h6" style={{ color: '#757575', marginBottom: '15px' }}>
              大学：桃山学院大学 3年生
            </Typography>
            <Typography variant="h6" style={{ color: '#757575', marginBottom: '15px' }}>
              クラブ：テック部所属
            </Typography>
            <Typography variant="h6" paragraph style={{ color: '#757575', marginBottom: '15px' }}>
              趣味：筋トレ、プログラミング、ゲーム。新しい技術を学ぶことや、健康的な生活を送ることに情熱を持っています。
            </Typography>
            <Typography variant="h6" style={{ color: '#757575', marginBottom: '15px' }}>
              将来の夢：システムエンジニアになる
            </Typography>
            <Box textAlign="center">
              <Link href="https://x.com/fukai_sea?s=20" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Twitter" color="primary">
                  <TwitterIcon />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/t0116m/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Instagram" color="secondary">
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
