function CompareAges() {
    // Запросить у пользователя два возраста
    let  age1 = prompt("თქვენი წლოვანება(1)");
    let age2 = prompt("თქვენი წლოვანება(2)");


    let comparisonResult;
    if (age1 > age2) {
        comparisonResult = "პირველი დიდია მეორეზე";
    } else if (age1 < age2) {
        comparisonResult = "პირველი პატარაა მეორეზე";
    } else {
        comparisonResult = "ტოლი";
    }
}
alert(comparisonResult)
