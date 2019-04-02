const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files = [
        './dist/AngularComponent/runtime.js',
        './dist/AngularComponent/polyfills.js',
        './dist/AngularComponent/scripts.js',
        './dist/AngularComponent/main.js'
      ];
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/address-element.js');
    console.info('Angular Elements created successfully!')

})()