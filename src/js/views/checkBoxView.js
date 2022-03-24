class CheckboxComponent {
    _parentElement = document.querySelector('.theme__checkboxes');

    constructor() {
        this._checkFirstBox();
    }

    _checkFirstBox() {
        this._parentElement.querySelector('.theme__checkbox-1').checked = true;
    }

    addHandlerChecked(handler) {
        [...this._parentElement.querySelectorAll('.theme__checkbox')].forEach((box, i, array) => {
            box.addEventListener('change', e => {
                if (e.currentTarget.checked) {
                    handler(e.currentTarget.dataset.is)
                    array.forEach(box => {
                        if (box !== e.currentTarget) {
                            box.checked = false;
                        }
                    });
                }
            });
        });
    }
}

export default new CheckboxComponent();