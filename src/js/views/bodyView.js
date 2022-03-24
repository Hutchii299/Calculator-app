class BodyCompoenent {
    _parentElement = document.querySelector('body');
    _currentNum = 1;

    changeColors(num) {
        this._parentElement.classList.replace(`body-${this._currentNum}`, `body-${num}`);
        this._currentNum = num;
    }
}

export default new BodyCompoenent();