// 1 დავალება დაწერეთ ფუნქცია processArray, რომელიც იღებს მასივსა და კოლბექ ფუნქციას. processArray ფუნქცია უნდა გამოიყენოს კოლბექ ფუნქცია თითოეულ ელემენტზე და დაბრუნოს ახალი მასივი შედეგებით.(უნდა დააბრუნოს მიღებული შედეგი)

function processArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

// 2 დავალება შექმენით ფუნქცია squareNumbers, რომელიც იღებს ნომერების მასივს და აბრუნებს ახალ მასივს, სადაც თითოეული ნომერი გაწვდილი იქნება map მეთოდის გამოყენებით.

function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}


// 3 დავალება დაწერეთ ფუნქცია uniqueElements, რომელიც იღებს მასივს, რომელშიც აქვს გამეორებები, და აბრუნებს ახალ მასივს მხოლოდ უნიკალური ელემენტებით Set-ის გამოყენებით.(ანუ დარჩეს მხოლოდ თითო რიცხვი) მაგალითად არ უნდა იყოს 2 ცალი '2' ან მეტი....

function uniqueElements(array) {
    return [...new Set(array)];
}



// 4 დავალება დაწერეთ JavaScript პროგრამა, რომელიც შეიცავს ფუნქციას calculateSum, რომელიც იღებს ორი რიცხვი და აბრუნებს მათ ჯამს. ახსენით როგორ მუშაობს ეს ფუნქცია.

function calculateSum(a, b) {
    return a + b;
}



// 5 დავალება---სტუდენტების შეფასების სისტემა

// ინსტრუქცია: დაწერეთ JavaScript პროგრამა, რომელიც გამოიყენებს ქოლბექ ფუნქციას სტუდენტების შეფასების სისტემის გასამართავად.
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// დაწერეთ ფუნქცია gradeStudent, რომელიც იღებს სტუდენტის ქულებს და ქოლბექ ფუნქციას, რომელიც დაადგენს შეფასებას based on ქულებზე. gradeStudent უნდა გამოიძახოს ქოლბექ ფუნქცია თითოეულ ქულაზე და გამოუცხადოს ახალი მასივი შეფასებებით.

// დაწერეთ ქოლბექ ფუნქცია assignGrade, რომელიც მიიღებს ქულას და დააბრუნებს შესაბამის შეფასებას:

// 90 - 100: A
// 80 - 89: B
// 70 - 79: C
// 60 - 69: D
// ქვედა 60: F  js
// ?