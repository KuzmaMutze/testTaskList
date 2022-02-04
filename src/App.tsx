import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/400.css';

import { Table } from './components/Table/Table';

function App() {
    const theme = createTheme({ palette: { mode: 'light' } });

    return (
        <ThemeProvider theme={theme}>
            <Table />
        </ThemeProvider>
    );
}

export default App;
