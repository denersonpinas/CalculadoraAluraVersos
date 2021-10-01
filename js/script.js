function calcConvert(param) {
    /* ENTRADA DE DADOS */
    var valorInputado = document.getElementById("cvalor").value;
    var typeValor = document.getElementById("svalor").value;

    var result;
    var menssage;

    /* PROCESSAMENTO DE DADOS */
    if (param == "dolar") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 5.20).toFixed(2);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) * 1.18).toFixed(2);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado)).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button dolar" 
        }
    } else if (param == "real") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado)).toFixed(2);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 6.18).toFixed(2);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 5.24).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button real" 
        }
    } else if (param == "euro") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 6.16).toFixed(2);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado)).toFixed(2);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 1.18).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button euro" 
        }
    } else if (param == "btn") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 246176.74).toFixed(8);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 39874.96).toFixed(8);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 47066.40).toFixed(8);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button btc" 
        }
    } else if (param == "eth") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 17926.38).toFixed(8);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 2899.13).toFixed(8);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 3421.13).toFixed(8);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button btc" 
        }
    } else if (param == "cro") {
        if (typeValor == "real") {
            menssage = "R$ " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / 0.97).toFixed(8);
        } else if (typeValor == "euro") {
            menssage = "&#8364; " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / (0.97 / 6.18)).toFixed(8);
        } else if (typeValor == "dolar") {
            menssage = "&dollar;" + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) / (0.97 / 5.24)).toFixed(8);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button cro" 
        }
    }  else if (param == "celsius") {
        if (typeValor == "celsius") {
            menssage = parseFloat(valorInputado) +" °C";
            result = (parseFloat(valorInputado)).toFixed(2);
        } else if (typeValor == "kelvin") {
            menssage = parseFloat(valorInputado) + " K";
            result = (parseFloat(valorInputado) - 273.15).toFixed(2);
        } else if (typeValor == "fahren") {
            menssage = parseFloat(valorInputado) + " °F";
            result = ((parseFloat(valorInputado) - 32) * 5/9).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button celsius" 
        }
    }   else if (param == "kelvin") {
        if (typeValor == "celsius") {
            menssage = parseFloat(valorInputado) +" °C";
            result = (parseFloat(valorInputado) + 273.15).toFixed(2);
        } else if (typeValor == "kelvin") {
            menssage = parseFloat(valorInputado) + " K";
            result = (parseFloat(valorInputado)).toFixed(2);
        } else if (typeValor == "fahren") {
            menssage = parseFloat(valorInputado) + " °F"; // (32 °F − 32) × 5/9 + 273,15 = 273,15 K
            result = (((parseFloat(valorInputado) - 32) * 5/9 + 273.15) + 32).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button kelvin" 
        }
    }   else if (param == "fahren") {
        if (typeValor == "celsius") {
            menssage = parseFloat(valorInputado) +" °C";
            result = ((parseFloat(valorInputado) * 9/5) + 32).toFixed(2);
        } else if (typeValor == "kelvin") {
            menssage = parseFloat(valorInputado) + " K"; // (0 K − 273,15) × 9/5 + 32 = -459,7 °F
            result = ((parseFloat(valorInputado) - 273.15) * 9/5 + 32).toFixed(2);
        } else if (typeValor == "fahren") {
            menssage = parseFloat(valorInputado) + " °F";
            result = (parseFloat(valorInputado)).toFixed(2);
        } else {
            menssage = "Tipo informado não é aceito para a conversão com button kelvin" 
        }
    } else if (param == "km") {
        if (typeValor == "km") {
            menssage = parseFloat(valorInputado) +" Km";
            result = (parseFloat(valorInputado)).toFixed(10);
        } else if (typeValor == "aLuz") {
            menssage = "Anos Luz: " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado) * 9.461e+12).toFixed(10);
        }
    } else if (param == "aLuz") {
        if (typeValor == "km") {
            menssage = parseFloat(valorInputado) +" Km";
            result = (parseFloat(valorInputado) * 1.057e-13).toFixed(10);
        } else if (typeValor == "aLuz") {
            menssage = "Anos Luz: " + parseFloat(valorInputado);
            result = (parseFloat(valorInputado)).toFixed(10);
        }
    }

    document.getElementById("valorDigitado").innerHTML = menssage
    document.getElementById("cvalor").value = result
}