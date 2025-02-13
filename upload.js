const express = require('express');
const multer = require('multer');
const fs = require('fs');
const request = require('request');

const router = express().router;

// // Middleware to parse multipart/form-data
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Use the original filename
//     }
// });

const upload = multer({ dest: 'uploads/' }).single('file');

// Route for file upload
router.post('/uploads', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.error('Multer Error :', err);
            return res.status(500).send('File upload failed.');
        } else if (err) {
            // An unknown error occurred when uploading.
            console.error('Unknown Error :', err);
            return res.status(500).send('File upload failed.');
        }

        // File has been uploaded successfully
        const file = req.file;
        console.log('File uploaded:', file);

        // Check if a file was uploaded
        if (!file) {
            console.log('No files uploaded');
            return res.status(400).send('No file uploaded.');
        }

        // Set up options for the OCR API request
        const options = {
            url: "https://app.nanonets.com/api/v2/OCR/Model/1a4e27f4-8127-4ae0-aa77-1e2313b70008/LabelFile/?async=false",
            formData: {
                file: fs.createReadStream(file.path)
            },
            headers: {
                'Authorization': 'Basic ' + Buffer.from('22a7c2be-0096-11ef-bd7c-6a968cb53fff' + ':').toString('base64')
            },
            timeout: 30000,
        };

        // Make POST request to OCR API
        request.post(options, function (err, httpResponse, body) {
            if (err) {
                console.error('Error:', err);
                return res.status(500).send('OCR processing failed.');
            }
            console.log('OCR response:', body);
            app.get('/upload', (req, res) => {
                res.send(body);
            });
            // Send the extracted text data back to the frontend
            res.send(body);
        });
    });
});
