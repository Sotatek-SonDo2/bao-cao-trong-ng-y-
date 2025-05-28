function Validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.closest('.form-group').querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.closest('.form-group').classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.closest('.form-group').classList.remove('invalid');
        }

        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElements = formElement.querySelectorAll(rule.selector);
            inputElements.forEach(function (inputElement) {
                if (inputElement) {
                    inputElement.onblur = function () {
                        validate(inputElement, rule);
                    };
                    inputElement.oninput = function () {
                        var errorElement = inputElement.closest('.form-group').querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        inputElement.closest('.form-group').classList.remove('invalid');
                    };
                }
            });
        });

        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isValid = true;
            options.rules.forEach(function (rule) {
                var input = formElement.querySelector(rule.selector);
                if (input) {
                    if (!validate(input, rule)) {
                        isValid = false;
                    }
                }
            });
            if (isValid) {
                alert("Đăng ký thành công!");
                formElement.reset();
            }
        };
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    };
};

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email không hợp lệ';
        }
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    };
};

Validator.isRadioChecked = function (name) {
    return {
        selector: `input[name="${name}"]`,
        test: function () {
            var isChecked = document.querySelector(`input[name="${name}"]:checked`);
            return isChecked ? undefined : 'Vui lòng chọn giới tính';
        }
    };
};

// Gọi validator
Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6),
        Validator.isConfirmed('#password_confirmation', function () {
            return document.querySelector('#password').value;
        }, 'Mật khẩu nhập lại không khớp'),
        Validator.isRequired('#province'),
        Validator.isRadioChecked('gender')
    ]
});
