# Bandrer - Simple JavaScript Bundler with Express Server

Bandrer is a minimalistic JavaScript bundler that bundles all JavaScript files into a single file and serves the bundled content using an Express server. Additionally, it automatically creates a `dist` directory to host the bundled files and supports serving other static folders.

## Project Structure

- **bandrer.config.js**: Configuration file for Bandrer.
- **index.js**: Entry point for the Express server and Bandrer initialization.
- **lib/bandrer.js**: Bandrer class responsible for bundling JavaScript files.
- **lib/module-map.js**: ModuleMap class to handle mapping and bundling modules.
- **lib/module.js**: Module class to read and transform JavaScript files using Babel.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andreburg/bandrer.git
   cd bandrer

2. Install Dependencies
    ```bash
    npm install
    
## Configuration

Modify the bandrer.config.js file to customize the bundling and serving settings:
  ```js
  const config = {
  entry: "client/public/js/index.js", // Entry point for bundling
  output: "main.js", // Output bundled file name
  bundleDir: "./dist", // Output directory for bundled files
  html: "client/index.html", // Optional HTML file to host
  port: 8888, // Express server port
  serves: \[
      {
        dir: "/client/public/css", // Directory to serve
        at: "/css", // URL path to access the served directory
      },
      // Add more serving configurations as needed
    ],
  };
  module.exports = {
    config,
  };
