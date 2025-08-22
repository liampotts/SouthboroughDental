const sharp = require('sharp');
const path = require('path');

async function resizeImages() {
    try {
        // Resize both images to 400x400 pixels
        await sharp('src/assets/about/team/1.png')
            .resize(400, 400, { fit: 'cover' })
            .toFile('src/assets/about/team/1_resized.png');
        
        await sharp('src/assets/about/team/2.png')
            .resize(400, 400, { fit: 'cover' })
            .toFile('src/assets/about/team/2_resized.png');
        
        console.log('Images resized successfully!');
    } catch (error) {
        console.error('Error resizing images:', error);
    }
}

resizeImages();

