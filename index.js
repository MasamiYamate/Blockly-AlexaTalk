const fs = require('fs')
const childProcess = require('child_process')
const express = require('express')
const bodyParser = require('body-parser')

const SERVER_PORT_NO = 3000

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

//Server start-up
var server = app.listen(SERVER_PORT_NO , function() {
	let port = server.address().port;
	console.log('Example app listening at %s', port);
})

// GetRequest
app.get('/setscript' , function (req , res){
	res.json({
		status:-1
	})
})

// PostRequest
app.post('/setscript' , function (req , res){
    createResponseScprit(req.body.code , res)
})

//CreateSkillScript
function createResponseScprit(code , res) {
    var writeScript = 'exports.getResponse = function () {\n'
    writeScript = writeScript + code
    writeScript = writeScript + "}"
    let filePath = process.cwd() + "/skillscript/blocklyalexa/lambda/custom/blockly-response.js"

    fs.writeFile(filePath , writeScript , (err , data) => {
        if (err) {
            res.json({
                status:-1
            })
        }else{
            var exec = childProcess.exec
            exec('sh skill-deploy.sh' , function (err , stdout , stderr) {
                console.log(stdout)
                res.json({
                    status:0
                })
            })
        }
    })
}

