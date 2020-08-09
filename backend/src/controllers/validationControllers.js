
export const instructions = (req, res) => {
    res.send('ERROR: Please attach a number to the path');
}

export const numberValidation = (req, res) => {
    

    // Check the Card Type and length
    const cardType = num => {
        // Get rid off spaces
        num = num.split(' ').join("");
        const o = {
            // Regex to check the starting diget(s) and the number length
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            MasterCard: /^5[1-5][0-9]{14}$/,
            AMEX: /^3[47][0-9]{13}$/,
            Discover: /^6011[0-9]{12}$/,
        }
        for (const k in o) {
            if (o[k].test(num)) {
                return k;
            }
        }
        return 'Other';
    }

    // Perform Luhn Check
    const luhnCheck = num => {
        let carray = new Array();
        for (let i = 0; i < num.length; i++) {
            carray[carray.length] = num.charCodeAt(i) - 48;
        }
        carray.reverse();
        let sum = 0;
        for (let i = 0; i < carray.length; i++) {
            let tmp = carray[i];
            if ((i % 2) != 0) {
                tmp *= 2;
                if (tmp > 9) {
                    tmp -= 9;
                }
            }
            sum += tmp;
        }
        return ((sum % 10) == 0);
    }
    
    let number = req.params.number;
    res.send({
        number :
        {
            'Card Type': cardType(number),
            'Passed Luhn Check': luhnCheck(number)
        }
    });

}