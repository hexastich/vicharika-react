import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import complaintRoutes from './routes/complaintRoutes.js';
import cors from 'cors'; // Import CORS middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.use('/v1', userRoutes);
app.use('/v1', complaintRoutes);

app.get('/', (req, res) => {
  res.send('Vicharika Server is running on port ' + port + '...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
