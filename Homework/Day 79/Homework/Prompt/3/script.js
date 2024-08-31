function calculateCircleLength() {

    let radius = prompt("მითხარით რადუსის სიგრძე");

    let circumference = 2 * Math.PI * radius;

    alert("წრის სიგრძე " + radius + " რადიუსით არის " + circumference.toFixed(2));
}