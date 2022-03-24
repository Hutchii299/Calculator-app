
class ButtonComponent {
    _parentElement = document.querySelector('.keys');
    _currentAns = 0;
    _currentNum = 1;


    addHandlerOperators(handlerAdditon, handlerSubtraction, handlerMultiply, handlerDivision) {
        this._parentElement.addEventListener('click', e => {
            if (e.target === e.currentTarget) return;
            if (e.target.innerText === '+') {
                handlerAdditon();
            }
            if (e.target.innerText === '-') {
                handlerSubtraction()
            }
            if (e.target.innerText === 'x') {
                handlerMultiply()
            }
            if (e.target.innerText === '/') {
                handlerDivision();
            }
        });
    };

    addHandlerResetCalc(handler) {
        this._parentElement.querySelector('.key-reset').addEventListener('click', handler);
    };

    addHandlerDelPressed(handler) {
        this._parentElement.querySelector('.key-shift').addEventListener('click', handler);
    }

    addHandlerNumberPressed(handler) {
        this._parentElement.addEventListener('click', e => {
            if (e.target === e.currentTarget) return;
            if (e.target.classList.contains('key-normal') && e.target.dataset.type === 'number') {
                handler(+e.target.innerText);
            }
        });
    }

    addHandlerEqualsPressed(handler) {
        this._parentElement.querySelector('.key-enter').addEventListener('click', handler);
    }

    changeColors(num) {
        this._parentElement.classList.replace(`keypad-background-color-${this._currentNum}`, `keypad-background-color-${num}`);
        [...this._parentElement.querySelectorAll('.key-normal')].forEach(key => {
            key.classList.replace(`key-normal-colors-${this._currentNum}`, `key-normal-colors-${num}`);
        });
        [...this._parentElement.querySelectorAll('.key-shift')].forEach(key => {
            key.classList.replace(`key-shift-colors-${this._currentNum}`, `key-shift-colors-${num}`);
        });
        this._parentElement.querySelector('.key-enter').classList.replace(`key-enter-colors-${this._currentNum}`, `key-enter-colors-${num}`);
        this._currentNum = num;
    }

}
export default new ButtonComponent();