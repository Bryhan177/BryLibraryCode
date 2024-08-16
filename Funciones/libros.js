const express = require('express');
const multer = require('multer');
const path = require('path');
const Libro = require('./modelo'); // Asegúrate de tener el modelo correcto

const router = express.Router();

// Configuración de multer para almacenamiento de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Renombra la imagen con la fecha actual
    }
});

const upload = multer({ storage: storage });

// Ruta para crear un nuevo libro con imagen
router.post('/', upload.single('imagen'), async (req, res) => {
    try {
        const { titulo, autor, genero, precio, cantidad } = req.body;
        const imagen = req.file ? req.file.filename : null; // Guarda el nombre del archivo

        const nuevoLibro = await Libro.create({
            titulo,
            autor,
            genero,
            precio,
            cantidad,
            imagen // Guarda la imagen en la base de datos
        });

        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
