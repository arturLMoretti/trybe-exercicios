function encode(frase) {
    let fraseEncode = frase;
  
    // Utiliza o método replace, conforme descrito em https://www.w3schools.com/js/js_string_methods.asp
  
    fraseEncode = fraseEncode.replace(/a/g, '1');
    fraseEncode = fraseEncode.replace(/e/g, '2');
    fraseEncode = fraseEncode.replace(/i/g, '3');
    fraseEncode = fraseEncode.replace(/o/g, '4');
    fraseEncode = fraseEncode.replace(/u/g, '5');
  
    return fraseEncode;
  }
  function decode(frase) {
    let fraseDecode = frase;
  
    // Utiliza o método replace, conforme descrito em https://www.w3schools.com/js/js_string_methods.asp
  
    fraseDecode = fraseDecode.replace(/1/g, 'a');
    fraseDecode = fraseDecode.replace(/2/g, 'e');
    fraseDecode = fraseDecode.replace(/3/g, 'i');
    fraseDecode = fraseDecode.replace(/4/g, 'o');
    fraseDecode = fraseDecode.replace(/5/g, 'u');
  
    return fraseDecode;
  }

  module.exports = { encode, decode };