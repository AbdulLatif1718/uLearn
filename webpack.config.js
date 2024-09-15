const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'Adults'),
        filename: 'bundle.js'
    },
    watch:true
      
}

  