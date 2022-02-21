const {Storage} = require('@google-cloud/storage');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const sharp = require('sharp');

    exports.extractExif = async (file, context) => {
        const gcsFile = file;
        const storage = new Storage();
        const sourceBucket = storage.bucket(gcsFile.bucket);
        const finalBucket = storage.bucket('sp-22-41200-rsemla-class-pmap-final');

        console.log(`Version: 1.0`);

        console.log(`File name: ${gcsFile.name}`);
    };