import app from './app';

const PORT = 4000;
app.listen(PORT, () =>
    console.log(`Your Credit Card API server is running on port ${PORT}`)
);