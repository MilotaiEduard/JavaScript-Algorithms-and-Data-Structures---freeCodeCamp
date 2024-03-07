function palindromeChecker() {

    let value = document.getElementById('text-input').value;

    value = value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedValue = value.split('').reverse().join('');

    if (value === '')  {
        window.alert('Please input a value');
        return;
    }

    if (value === reversedValue) {
        document.getElementById('result').innerHTML = `<b>${document.getElementById('text-input').value}</b> is a palindrome!`;
    } else {
        document.getElementById('result').innerHTML = `<b>${document.getElementById('text-input').value}</b> is not a palindrome!`;
    }
}







