
class ScreenComponent {
    _parentElement = document.querySelector('.screen');
    _currentNum = 1;
    _numberWidth = this._parentElement.querySelector('h2').clientWidth;

    renderAnswer(ans) {
        this._parentElement.querySelector('.text-result').textContent = Number(ans).toLocaleString();
    }

    renderReset() {
        this._parentElement.querySelector('.text-result').textContent = `0`;
    }

    getCurrentDisplayedNumber() {
        return Number(this._parentElement.querySelector('.text-result').textContent.replaceAll(',', ''));
    }

    delPressed() {
        const currentDisplay = this._parentElement.querySelector('.text-result').textContent;
        if (currentDisplay.length === 1) {
            this._parentElement.querySelector('.text-result').textContent = '0';
        } else {
            this._parentElement.querySelector('.text-result').textContent = currentDisplay.slice(0, -1);
        }
    }

    changeColors(num) {
        this._parentElement.classList.replace(`screen-background-color-${this._currentNum}`, `screen-background-color-${num}`);
        this._parentElement.querySelector('h2').classList.replace(`text-color-${this._currentNum}`, `text-color-${num}`);
        this._currentNum = num;
    }

    isNumberLargerThanScreen() {
        //checks whether the screen can hold another number
        const containerWidth = this._parentElement.clientWidth - Number.parseFloat(getComputedStyle(this._parentElement).padding) * 2;
        const numberWidth = this._parentElement.querySelector('h2').clientWidth;

        return containerWidth > numberWidth + this._numberWidth ? true : false;
    }
}
export default new ScreenComponent();