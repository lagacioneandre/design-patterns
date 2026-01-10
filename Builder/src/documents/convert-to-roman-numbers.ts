export const CONVERT_TO_ROMAN_NUMBERS = (number: number) => {
    if (typeof number !== 'number' || number < 1 || number > 3999) {
        return number; // Retorna o número ou algo para indicar erro/limite
    }

    const valores = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    const simbolos = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];
    
    let roman = '';

    for (let i = 0; i < valores.length; i++) {
        while (number >= valores[i]) {
            roman += simbolos[i];
            number -= valores[i];
        }
    }
    
    return roman;
}