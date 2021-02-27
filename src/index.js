module.exports = function toReadable (number) {
    if(number===0)return 'zero';
    let units, tens, hundreds, res, support,  space;
    units = number % 10;
    tens = Math.floor((number % 100)/10 );
    hundreds = Math.floor(number / 100 );

    let base = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let t = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    support = units + tens *10;

    if((9 < support) && (support < 20)) units = support;

    hundreds = ((hundreds === 0)? '':`${base[hundreds]} hundred `);
    res = hundreds + t[tens] + base[units];
     return res.trim();
}
