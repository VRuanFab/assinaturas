
function clicar() {
    var inputnome = document.getElementById('nome');
    var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${inputnome}`
    document.getElementById('QRCodeImage').src = GoogleChartAPI;
}