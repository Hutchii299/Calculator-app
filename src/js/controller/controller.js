"use strict"

import screenView from "../views/screenView.js";
import buttonView from "../views/buttonView.js";
import checkBoxView from "../views/checkBoxView.js";
import headerView from "../views/headerView.js";
import bodyView from "../views/bodyView.js";
import * as model from "../model/model.js";

const controllerUpdateLastBtnAndOperation = function (trigger) {
    model.updateLastButtonPressed(trigger);
    model.state.currentOp = trigger;
}

const controllerOperationCalculate = function (newNum) {
    const lastOp = model.state.currentOp;
    if (!lastOp) model.state.answer = newNum;
    if (lastOp === model.triggers.add) { return model.performAdd(newNum) };
    if (lastOp === model.triggers.subtract) { return model.performSub(newNum) };
    if (lastOp === model.triggers.multiply) { return model.performMultiply(newNum) };
    if (lastOp === model.triggers.divide) { return model.performDivide(newNum) };
}

const controllerAddition = function () {
    if (model.state.lastButtonPressed === model.triggers.subtract || model.state.lastButtonPressed === model.triggers.divide || model.state.lastButtonPressed === model.triggers.multiply) { return controllerUpdateLastBtnAndOperation(model.triggers.add) };

    model.updateLastButtonPressed(model.triggers.add);
    //get new number to use in calc
    const num = screenView.getCurrentDisplayedNumber();

    //perform last operation
    controllerOperationCalculate(num)

    //set the last operation 
    model.state.currentOp = model.triggers.add;

    //set the screen to 0 on next key
    model.state.renderedNumber = 0;
    screenView.renderAnswer(model.state.answer);

}

const controllerSubtraction = function () {
    if (model.state.lastButtonPressed === model.triggers.add || model.state.lastButtonPressed === model.triggers.divide || model.state.lastButtonPressed === model.triggers.multiply) { return controllerUpdateLastBtnAndOperation(model.triggers.subtract); }

    model.updateLastButtonPressed(model.triggers.subtract);
    //get new number to use in calc
    const num = screenView.getCurrentDisplayedNumber();

    //perform last operation
    controllerOperationCalculate(num)

    //set the last operation 
    model.state.currentOp = model.triggers.subtract;

    //set the screen to 0 on next key
    model.state.renderedNumber = 0;
    screenView.renderAnswer(model.state.answer);


}

const controllerMultiply = function () {
    if (model.state.lastButtonPressed === model.triggers.add || model.state.lastButtonPressed === model.triggers.divide || model.state.lastButtonPressed === model.triggers.subtract) { return controllerUpdateLastBtnAndOperation(model.triggers.multiply); }

    model.updateLastButtonPressed(model.triggers.multiply);
    //get new number to use in calc
    const num = screenView.getCurrentDisplayedNumber();

    //perform last operation
    controllerOperationCalculate(num)

    //set the last operation 
    model.state.currentOp = model.triggers.multiply;

    //set the screen to 0 on next key
    model.state.renderedNumber = 0;
    screenView.renderAnswer(model.state.answer);
}

const controllerDivide = function () {
    if (model.state.lastButtonPressed === model.triggers.subtract || model.state.lastButtonPressed === model.triggers.add || model.state.lastButtonPressed === model.triggers.multiply) { return controllerUpdateLastBtnAndOperation(model.triggers.divide); }

    model.updateLastButtonPressed(model.triggers.divide);
    //get new number to use in calc
    const num = screenView.getCurrentDisplayedNumber();

    //perform last operation
    controllerOperationCalculate(num)

    //set the last operation 
    model.state.currentOp = model.triggers.divide;
    //set the screen to 0 on next key
    model.state.renderedNumber = 0;
    screenView.renderAnswer(model.state.answer);
}

const controllerReset = function () {
    model.updateLastButtonPressed('other');

    //reset state
    model.reset();

    //reset screen to 0
    screenView.renderAnswer(model.state.answer);
}

const controllerNumberPressed = function (num) {
    if (!screenView.isNumberLargerThanScreen()) return;
    model.updateLastButtonPressed('other');
    screenView.renderAnswer(model.state.keyPressed(num));
}

const controllerEquals = function () {
    if (model.state.lastButtonPressed === model.triggers.equal) return
    model.updateLastButtonPressed(model.triggers.equal);
    const num = screenView.getCurrentDisplayedNumber();
    screenView.renderAnswer(model.calculate(num));

}

const controllerDelPressed = function () {
    model.updateLastButtonPressed('other');
    screenView.delPressed();
    model.state.renderedNumber = screenView.getCurrentDisplayedNumber();
}

const controllerChecked = function (num) {
    bodyView.changeColors(num);
    headerView.changeColors(num);
    screenView.changeColors(num);
    buttonView.changeColors(num);
}

const init = function () {
    buttonView.addHandlerOperators(controllerAddition, controllerSubtraction, controllerMultiply, controllerDivide);
    buttonView.addHandlerResetCalc(controllerReset);
    buttonView.addHandlerNumberPressed(controllerNumberPressed);
    buttonView.addHandlerEqualsPressed(controllerEquals);
    buttonView.addHandlerDelPressed(controllerDelPressed);
    checkBoxView.addHandlerChecked(controllerChecked);
}

init();