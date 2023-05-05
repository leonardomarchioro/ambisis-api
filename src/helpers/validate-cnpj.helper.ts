const validateCNPJHelper = ( value: string | undefined ) => {

    if(!value){
        return true
    }

    const validate =
      /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{3}[1-9]{1}\-?[0-9]{2}/.test(value);
  
    if (!validate) {
      return false;
    }
  
    value = value.replace(/[^\d]+/g, "");
    if (value.length !== 14) return false;
  
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(value.charAt(i)) * (i < 4 ? 5 - i : 13 - i);
    }
    let rest = sum % 11;
    const verifyCode1 = rest < 2 ? 0 : 11 - rest;
  
    sum = 0;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(value.charAt(i)) * (i < 5 ? 6 - i : 14 - i);
    }
    rest = sum % 11;
    const verifyCode2 = rest < 2 ? 0 : 11 - rest;
  
    return (
      parseInt(value.charAt(12)) === verifyCode1 &&
      parseInt(value.charAt(13)) === verifyCode2
    );
  };

export default validateCNPJHelper;