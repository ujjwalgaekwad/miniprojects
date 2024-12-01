import 'dart:io';

void main() {
  // // Asking for user input
  // stdout.write('Enter your name: '); // Print without a new line
  // String? name = stdin.readLineSync(); // Read user input

  // stdout.write('Enter your age: ');
  // String? ageInput = stdin.readLineSync(); // Read user input
  // int age = int.parse(ageInput!); // Convert the input to an integer

  // // Display the output
  // print('Hello, $name! You are $age years old.');

  //Add two input numbers
  stdout.write("Enter number1");
  String? num1 = stdin.readLineSync();
  int num = int.parse(num1!);

  stdout.write("Enter number1");
  String? num2 = stdin.readLineSync();
  int nume = int.parse(num2!);

  int sum = nume + num;
  print(sum);

  //comments
  //-> single line
  /* Multiple line */

  //Data type
  
}
