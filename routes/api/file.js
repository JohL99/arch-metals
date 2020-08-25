const express = require("express");

const router = express.Router();

//pour fichier
const multer = require("multer");

const File = require("../../models/File");

//pour fichier

const stockage = multer.diskStorage({
  destination: "./public/",
  filename: function (req, file, cb) {
    cb(null, "file-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  stockage: stockage,
  limits: { fileSize: 1000000 },
}).single("myfile");

const obj = (req, res) => {
  upload(req, res, () => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file); //Here you get file.
    const file = new File({ meta_data: req.file });
    //file.meta_data = req.file;
    file.save().then(() => {
      res.send({ message: "uploaded successfully" });
    });
    /*Now do where ever you want to do*/
  });
};

router.post("/upload", obj);

module.exports = router;
