import express from "express";
import path from "path";
import cors from "cors";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist"));
});

// app.use('/public', express.static(path.join(__dirname,'./static')));


// app.get('/',(req,res)=>{

//    res.sendFile(path.join(__dirname,'/index.html'));

// });

app.listen(3000, () => {
  console.log("Server on port 3000");
});
