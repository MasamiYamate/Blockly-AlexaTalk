/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const BlocklyRes = require('./blockly-response')

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = BlocklyRes.getResponse()

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(true)
      .getResponse();
  },
};

//ErrorHandler
const ErrorHandler = {
	canHandle(handlerInput) {
		return true
	},
	handle(handlerInput) {
		return handlerInput.responseBuilder
			.speak("申し訳ありません、内部エラーが発生しました。")
			.withShouldEndSession(true)
			.getResponse();
	}
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
