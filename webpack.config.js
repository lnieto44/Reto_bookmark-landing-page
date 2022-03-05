const path = require("path");
const basePath = __dirname
const dispatch = "dist"
module.exports = {
   //mode - modo de funcionamiento
   mode:"production",
   //desde donde empieza la app
   entry:{
       app:"./src/index.js",
   },
   module:{
    rules:[
        {
            text:/\.js/,
            exclude:/node_modules/,
            use:["babel-loader"],
        },
    ],
   },
   //output point
   output:{
       path: path.join(basePath, dispatch),
       filename: "bundle.js"
   },
};