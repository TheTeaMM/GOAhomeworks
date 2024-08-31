function compareHeights() {
    // Запросить у пользователя два возраста
    let  age1 = prompt("სანტიმეტრი(1)");
    let age2 = prompt("სანტიმეტრი(2)");


    let comparisonResult;
    if (age1 > age2) {
        comparisonResult = "პირველი დიდია მეორეზე";
    } else if (age1 < age2) {
        comparisonResult = "პირველი პატარაა მეორეზე";
    } else {
        comparisonResult = "ტოლი";
    }
    alert(comparisonResult)

}
