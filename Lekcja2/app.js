//deklaracje zmiennych
// var a_1231 = true; //nazwa zmiennej musi zaczynać się od litery, cyfry też mogą być, ale nie jako pierwsze
//o var należy zapomnieć, zaszłośc w js - przykładowo nie może być zadeklarowanych dwóch takich samych zmeinnych w różnych skryptach

// const b = true; //gwarancja przypisania tylko raz wartości do zmiennej (w typie złozonym wartość można zmieniać)
//zasięg lokalny const oznacza, że tyczy się to wszystkie w klamrach, poza nimi można deklarować takie same zmienne i będzie działać
// let c = true; // można nadpisywać ile razy chcemy
//najlepiej zawsze stosować const, a przy błędzie zamienić na let

// console.log (c);

// const b = !true; //! to negacja, czyli !true = nie true, czyli false
// if (true) {
//     let c = true;
//     console.log(c);
// }
// let c = false;

// console.log(c);

// const b = true || false; // || oznacza lub

// const b = true || alert('to jest false'); // jeżeli będzie true to reszta się nie wykona
// true && true; //jeżeli z jednej i z drugiej strony będzie true to całe wyrażenie będzie prawdą (&& - i)

// const b = Boolean('0');
// console.log(b);

// const b = 1.2; //zwraca jako number

// console.log(typeof b);
// console.log(Number.isInteger(b));
// console.log(0.1 + 0.2); // wartości przybliżone przy wartościach rzeczywistych. W przypadku całkowitych będą dokładne wyniki.

// let b = 1;

// console.log(b++, ++b); //najpierw zwraca wartośc, później zwiększa o 1 / ++b - najpierw zwiększa o 1, później zwraca wartość
// console.log(b--, --b);

// let a = 1;
// let b = 2;

// console.log(b < a);

// let a = 0;
// let b = '0';

// console.log(b == a);
// console.log(b === a);

// let a = 'Ala ma kota';
// let b = a;
// let c = 'Nie ma, że się nie da';

// let d = 'Ala \n\
// ma \n\
// kota';

// let e = 'Ala' +
// 'ma' +
// 'kota';

// let f = `Ala
// ma
// kota`;

// let g = `fdsgdsf ${d} a kot ma Alę`; // łączenie stringów

// let h = `${a} ${d}`;

// console.log(h)

let a = 'Ala ma kota';

console.log(a.length);
console.log(a.charAt(0)); // pierwszy znak zmiennej a
console.log(a[a.length-1]); // ostatni znak zmiennej a
console.log(a.indexOf('Ala')); // w przypadku szukania pojedyńczego znaku zwórci pierwszy znaleziony, dodanie last przed Index szuka od tyłu

if (a.indexOf('Ala') >= 0) {
    console.log('Jest');
} else {
    console.log('Nie ma');
}

console.log(a.includes('a'));
console.log(a.startsWith('A')); // wielkość liter ma znaczenie
console.log(a.endsWith('a'));
console.log(a.substr(4, 2));
console.log(a.substring(4, 6));
console.log(a.replace('a', 'c')); // zamienia tylko pierwszy odnaleziony znak
console.log(a.replace(/a/g, 'c')); // zamienia wszystkie znaki
console.log(a.repeat(10));

/* Zadanie domowe
Pobrać od użytkownika jedną liczbę (pobieranie poprzez funkcję promt) - const liczba = Number(prompt('podaj liczbę));
po podaniu liczby należy wyświetlić 5 ciekaowstek na jej temat
np. przy liczbie 5 jeżeli drabina będzie miała 5cm to odległośc do księżyca wyniesie x czyli będzie trzeba x drabin żeby dostać się do księżyca lub jeżeli pizza będzie mieć 5 cm promień to jej powierzchnia wyniesie xx
należy wziąć pod uwagę to, że ktoś może podać liczbę ujemną
musi wystąpić instrukcja warunkowa if (czy jest ujemna czy dodatnia)
wyświetlić w indexie - document.writeln('text);
warto dodać też if sprawdzający czy liczba jest całkowita
zrobić ochronę przed wpisywanie NaN */