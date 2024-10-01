// 1. უსასრულო რიცხვების გენერატორი
function* infiniteNumbers() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  // 2. ლუწი რიცხვების გენერატორი
  function* evenNumbers() {
    let i = 0;
    while (true) {
      yield i;
      i += 2;
    }
  }
  
  // 3. შემთხვევითი რიცხვების გენერატორი
  function* randomNumbers() {
    while (true) {
      yield Math.random();
    }
  }
  
  // 4. სიტყვების თითო ასო-ასო დაბეჭდვა
  function* wordLetters(word) {
    for (let letter of word) {
      yield letter;
    }
  }
  
  // 5. 8 ციფრისგან შემდგარი პაროლი
  function* generateNumericPassword() {
    const numbers = "0123456789";
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    yield password;
  }
  
  // 6. უფრო გაუმჯობესებული პაროლი (ციფრები, ასოები და სიმბოლოები)
  function* generateComplexPassword() {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    yield password;
  }

  // 1. უსასრულო რიცხვების გენერატორი
  let generator = infiniteNumbers();
  console.log(generator.next().value); // 0
  console.log(generator.next().value); // 1
  
  // 2. ლუწი რიცხვების გენერატორი
  let evenGen = evenNumbers();
  console.log(evenGen.next().value); // 0
  console.log(even
  )  