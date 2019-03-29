Blockly.Blocks.text_speek = {
    init() {
      this.jsonInit({
        "message0": '%1',
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": '入力された文字を発話させます'
      });
    },
  };
  
  Blockly.JavaScript.text_speek = function(text) {
    return "return　" + text + ";\n"
  }
  