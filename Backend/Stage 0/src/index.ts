import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    email: "mohrimuakpo@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/SamMuaks2/HNG-internship/tree/main/Backend/Stage%200"
  });
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
