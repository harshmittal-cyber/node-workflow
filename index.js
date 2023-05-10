const express = require('express');
const app = express();



app.listen(3000, (req, res) => {
    console.log('hi harsh we are running github action workflow in nodejs');
    return res.status(200).json({
        message: `Server is running on port 3000`,
        success: true
    })
})