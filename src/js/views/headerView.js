class HeaderComponent {
    _parentElement = document.querySelector('header');
    _currentNum = 1;

    changeColors(num) {
        this._parentElement.querySelector('h1').classList.replace(`text-color-${this._currentNum}`, `text-color-${num}`);
        this._parentElement.querySelector('p').classList.replace(`text-color-${this._currentNum}`, `text-color-${num}`);
        [...this._parentElement.querySelectorAll('span')].forEach(item => {
            item.classList.replace(`text-color-${this._currentNum}`, `text-color-${num}`);
        });
        this._parentElement.querySelector('.theme__checkboxes').classList.replace(`keypad-background-color-${this._currentNum}`, `keypad-background-color-${num}`);
        this._currentNum = num;
    }
}

export default new HeaderComponent();