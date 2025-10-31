/*
Bir üniversitenin not sistemi için program geliştiriyoruz. Vize ve final notlarını kullanarak dönem sonu notunu hesaplayan ve harf notunu belirleyen bir kod yazmanı istiyoruz.

Kodun öğrencinin dönem sonu notunu hesaplayacak.
Dönem sonu notu, öğrencinin final ve vize notundan hesaplanacak. Vizenin ağırlığı %30, finalin ise %70. Örneğin, vizeden 50, finalden 100 almışsa, notu 85 olacak.
Projede kodların uyumlu olması için ekibin kullandığı değişken adlarını kullan. Vize notunu, final notunu, dönem sonu ortalamasını ve harf notunu temsilen sırayla vize, final, donemNotu, harfNotu adlarında değişkenler oluşturalım.
Okulda notlar A, B, C, D, E, ya da F şeklinde veriliyor:
Eğer dönem puanı 90(dahil)-100(dahil) arasında ise harfNotu değerini 'A' yapalım.
Eğer dönem puanı 80(dahil)-90(hariç) arasında ise harfNotu değerini 'B' yapalım.
70-80 arasında ise 'C',
60-70 arasında ise 'D'.
50-60 arasında ise 'E',
50'nin altında ise harfNotu değerini 'F' yapalım.

vize = 50, final = 100
sonuç = (50 × 0.3) + (100 × 0.7) = 85 → B
*/

let vize = 50;
let final = 100;
let donemNotu = (vize * 0.3) + (final * 0.7);
let harfNotu = "";
if(donemNotu >= 90 && donemNotu <= 100){
    harfNotu = "A";
}else if(donemNotu >= 80 && donemNotu < 90){
    harfNotu = "B";
}else if(donemNotu >= 70 && donemNotu < 80){
    harfNotu = "C";
}else if(donemNotu >= 60 && donemNotu < 70){
    harfNotu = "D";
}else if(donemNotu >= 50 && donemNotu < 60){
    harfNotu = "E";
}else{
    harfNotu = "F";
}
console.log(harfNotu);
