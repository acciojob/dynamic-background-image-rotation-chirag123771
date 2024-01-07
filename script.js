//your JS code here. If required.
// Function to set background image based on screen orientation
function setBackgroundImage() {
    const body = document.body;
    const landscapeImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
    const portraitImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';

    // Detect screen width and height
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Set background image based on screen orientation
    if (screenWidth > screenHeight) {
        // Landscape mode
        body.style.backgroundImage = `url('${landscapeImage}')`;
    } else {
        // Portrait mode
        body.style.backgroundImage = `url('${portraitImage}')`;
    }
}

// Set initial background image
setBackgroundImage();

// Update background image on window resize
window.addEventListener('resize', setBackgroundImage);

