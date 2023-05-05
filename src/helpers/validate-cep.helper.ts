const valideteCEPHelper = (value: string | undefined) => {
    
    if(!value) return true;

    const regex = /^[0-9]{5}[-]?[0-9]{3}$/;
    return regex.test(value);
};

export default valideteCEPHelper;