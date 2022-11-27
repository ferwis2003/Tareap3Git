function Resultado()
{
    var Creditos = Number(document.getElementById('ingresar').value);
    const Sumatoria = 520;
    var Total = Creditos * Sumatoria
    document.getElementById('pago').value = Total;
}

