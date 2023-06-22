const f2 = "BEGIN:VCARD\nVERSION:3.0\nN:Ruan Fabricio\nORG:Fornecedora\nTEL:85989387167\nEMAIL:victor.cavalcante@grupofornecedora.com.br\nEND:VCARD"
const encoded = encodeURIComponent(f2);
var link = "https://quickchart.io/qr?text="  + encoded
console.log(link)
