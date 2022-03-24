
export const state = {
    answer: 0,
    renderedNumber: 0,
    currentOp: '',
    lastButtonPressed: '',
    keyPressed: function (digit) {
        this.renderedNumber = this.renderedNumber === 0 ? digit : +`${this.renderedNumber}${digit}`;
        return this.renderedNumber;
    }
}

export const triggers = {
    add: 'add',
    subtract: 'sub',
    multiply: 'mul',
    divide: 'div',
    equal: 'equal'
}

export const updateLastButtonPressed = function (key) {
    state.lastButtonPressed = key;
}

export const performAdd = function (num) {
    if (!state.answer) return state.answer = num;
    return state.answer += num;
}

export const performSub = function (num) {
    if (!state.answer) return state.answer = num;
    return state.answer -= num;
}

export const performMultiply = function (num) {
    if (!state.answer) return state.answer = num;
    return state.answer *= num;
}

export const performDivide = function (num) {
    if (!state.answer) return state.answer = num;
    return state.answer /= num;
}
export const reset = function () {
    state.answer = 0;
    state.currentOp = '';
    state.renderedNumber = 0;
}

export const calculate = function (num) {


    let returnVal = 0
    if (!state.currentOp) {
        returnVal = state.answer;
    }
    if (state.currentOp === 'add') {
        returnVal = performAdd(num);
    }
    if (state.currentOp === 'sub') {
        returnVal = performSub(num);
    }
    if (state.currentOp === 'div') {
        returnVal = performDivide(num);
    }
    if (state.currentOp === 'mul') {
        returnVal = performMultiply(num);
    }
    reset();

    return returnVal;
}

