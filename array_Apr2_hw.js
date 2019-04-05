//defining the array
let my_array = [1, 3, 7, 9, 8, 10, 11, 11, 7];
//initialisation of a variable
let repeat = 0;

//For readline prompt
const readline = require('readline');
const read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Tries to prompt for input by printing following line.
read_line.question('Please input a number: ', (answer) => {
    // checks whether the array has the input value or not
    for (let i = 0; i < my_array.length; i++) {
        if (answer == my_array[i]) {
            repeat += 1;
        }
        else {
            repeat += 0;
        }
    }
    //if the array has the value, following message prints out.
    if (repeat > 0) {
        console.log('Yes, the number has repetition.');
        console.log(`The number "${answer}" has repetition of ${repeat} time(s).`);
    }
    //if the array doesn't have the value, following message prints out.
    else {
        console.log('No, the number has no repetition.');
    }
    //closes the prompt of number.
    read_line.close();

    //These code prints the value of biggest and smallest number in the array.
    let small = my_array[0];
    let big = my_array[0];
    for (let i = 0; i < my_array.length; i++) {

        if (small >= my_array[i]) { //checks whether the value in small is greater than value in the array
            small = my_array[i]; //if found true, the value from array is set to the small variable.
        }
        else if (big <= my_array[i]) { //checks whether the value in small is smaller than value in the array
            big = my_array[i];  //if found true, the value from array is set to the big variable.
        }

    }
    //Prints the smallest and biggest value in the array.
    console.log(`The biggest value of the array is "${big}".`);
    console.log(`The smallest value of the array is "${small}".`);
});




