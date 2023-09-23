const multer = require('multer');

const allowedExt = [
    'image/jpg', 
    'image/jpeg', 
    'image/png'
];

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },

    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = uniqueSuffix + '.png';

        if (req.body) req.body.image = fileName;
        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {
    if (allowedExt.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const MulterUpload = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5000000
    }
});

module.exports = MulterUpload;