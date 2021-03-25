const liczba = Number(prompt('podaj liczbę'));

if (isNaN(liczba)) {

    alert('Wpisana wartość nie jest liczbą, spróbuj ponownie!');
    window.location.reload();
}

    if (liczba == 0) {
        alert('Wpisana wartość wynosi 0, podaj inną liczbę');
        window.location.reload();
    }

if (liczba >=0) {
    document.writeln('Jeżeli zarabiałbym ', liczba, ' zł na godzinę, to musiałbym pracować ', 364990/liczba, ' godzin na Teslę Model S w cenie 364 990 zł.');
    document.writeln('<br>Jeżeli każdego dnia poświęciłbym ', liczba, ' minut. To nauczyłbym się nowego języka w ciągu ', (7200-liczba)/24, ' dni.');
    document.writeln('<br>Jeżeli biegłbym ze średnią prędkością ', liczba, 'km/h. To w ciągu ', 6636/liczba, ' godzin dobiegłbym do Chin.');
    document.writeln('<br>Jeżeli codziennie dostawałbym ', liczba, ' zł. To potrzebowałbym ', 70000000-liczba, ' dni żeby wydać tyle co Sasin na wybory, które się nie odbyły.');
    document.writeln('<br>Jeżeli odkładałbym raz w miesiącu ', liczba, ' zł. To po roku udałoby mi się zebrać ', liczba*12, ' zł.');

} else {
    
    document.writeln('Jeżeli temperatura wynosi  ', liczba, ' stopni Fahrenheita, to jest to ', (liczba-32)/1.8, ' stopni celcjusza.');
    document.writeln('<br>Jeżeli Twój debet na koncie wynosi ', liczba, ' zł to do spłaty kolejnej raty musisz dopłacić ', 700-liczba, ' zł (przy wysokości raty 700 zł).');
    document.writeln('<br>Jeżeli będziesz znajdować się ', liczba, ' metrów pod ziemią to będziesz oddalony od szczytu Mount Everest o ', 8849-liczba, ' metrów.');
    document.writeln('<br>Podniesienie liczby ', liczba, ' do kwadratu da identyczny wynik jak podniesienie liczby |',liczba, '|.');
    document.writeln('<br>Jeżeli soczewki w okularach mają moc ', liczba, ' dioptrii, to odległość ogniska od środka optycznego soczewki wynosi ', 1/liczba, ' metra.');
}