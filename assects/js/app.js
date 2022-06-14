const currency_form = document.getElementById('currency_form');
const msg = document.querySelector('.msg');
const longmsg = document.querySelector('.longmsg');


currency_form.onsubmit = (e) => {
    e.preventDefault();

    let amount = currency_form.querySelector('input[name="amount"]');
    let currency = currency_form.querySelector('select[name="currency"]');

    if(amount.value == '' || currency.value == ''){
        msg.innerHTML = setAlert(`All feilds are required`);
    }else {
        let rate = 0;
        switch (currency.value) {
            case 'USD':
                rate = 86;
                break;
                
            case 'CAD':
                rate = 70;
                break;

            case 'Pound':
                rate = 116;
                break;

            case 'Euro':
                rate = 86;
                break;

            case 'Rupee':
                rate = 86;
                break;
        
            default:
                break;
        }
        let final_amount = amount.value * rate;
        longmsg.innerHTML = setAlert(`${amount.value} ${currency.value} = ${final_amount} Taka`, 'success');
    }
}