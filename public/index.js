const UPLOAD_URL = 'http://localhost:3000/setscript'

const workspace = Blockly.inject(
  'blocklyDiv',
  {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
  },
)

function uploadScript() {
  document.getElementById('uploadstatus').textContent = "Uploading...."
  let uploadCode = Blockly.JavaScript.workspaceToCode(workspace)
  let sendData = {'code':uploadCode}
  let sendJson = JSON.stringify(sendData)
  var xhr = new XMLHttpRequest()
  xhr.open("POST" , UPLOAD_URL)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById('uploadstatus').textContent = "Success!!!!"
      console.log('fix')
    }
  }
  xhr.send(sendJson)
  console.log(uploadCode)
}

document.getElementById('uploadScript').addEventListener('click', uploadScript, false)

