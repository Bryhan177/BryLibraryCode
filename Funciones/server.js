const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const multer = require('multer');

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Configuración de la base de datos
const sequelize = new Sequelize('brylibrarycode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Definición del modelo de Usuario
const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM('Administrador', 'Estudiante'),
        allowNull: false,
    },
});

// Sincronización de la base de datos
sequelize.sync({ alter: true }).then(() => {
    console.log('Base de datos sincronizada');
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});

// Definición del modelo de Libro
const Libro = sequelize.define('Libro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Sincronización del modelo de libro
sequelize.sync({ alter: true }).then(() => {
    console.log('Modelo de libro sincronizado');
}).catch(err => {
    console.error('Error al sincronizar el modelo de libro:', err);
});

// Inicialización de Express
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads'))); // Servir archivos estáticos

// Ruta de login
app.post('/api/login', async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const user = await User.findOne({ where: { correo } });
        if (!user || !(await bcrypt.compare(contraseña, user.contraseña))) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign({ id: user.id, rol: user.rol }, 'SECRET_KEY'); // Cambia 'SECRET_KEY' por una clave segura

        res.json({ token, redirectTo: '../Maquetacion/inicio.html' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para registrar un nuevo libro
app.post('/api/libros', upload.single('imagen'), async (req, res) => {
    const { titulo, autor, genero, precio, cantidad } = req.body;
    const imagen = req.file ? req.file.filename : null;
    try {
        const nuevoLibro = await Libro.create({ titulo, autor, genero, precio, cantidad, imagen });
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los libros
app.get('/api/libros', async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
