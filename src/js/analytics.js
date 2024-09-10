function loadGoogleAnalytics() {
    return new Promise((resolve, reject) => {
        // Create the script element for Google Analytics
        const script = document.createElement('script'); // change the variable to 'var' if Elementor
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QBSDKHB0E5';
        //script.onload = resolve;
        script.onload = () => {  // Remove this function after testing and un-comment the line above this
            console.log("GA script loaded");
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function initGoogleAnalytics() {
    try {
        await loadGoogleAnalytics(); // Wait for GA script to load
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QBSDKHB0E5');
        // gtag('config', 'GA_TRACKING_ID_HERE', { 'debug_mode': true }); // Optional to start debug mode
        console.log("Google Analytics initialized successfully."); // Remove after testing
    } catch (error) {
        console.error("Failed to load Google Analytics: ", error);
    }
}

// Execute the function to load and initialize GA
initGoogleAnalytics();