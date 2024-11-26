package OneShot;
import OneShot.bank;

class Pen {
    String type;
    Number Price;

    public void printInfo() {
        system.out.println(this.type, this.Price);
    }
}

public class class {
    public static void main(String[] arrgs){
        // Obj 1
        Pen p1 = new Pen();
        p1.type = "BallPoint";
        p1.Price = 1200;

        //Obj 2
        Pen p2 = new Pen();
        p2.Price = 12;
        p2.type = "Ballpoint";

        p2.printInfo();
    }
}

//Constructor

class Student {
    String name;
    Number age;

    public void stuInfo(){
        system.out.println(this.name, this.age);
    }

    Student(){ //Contructor without parameters
        system.out.println("contructor called");
    }

    Student(String name, Number age){  //Contructor with parameters
        this.name = name;
        this.age = age;
    }

    Student(Student s3){ //copy 
        this.name = this.name;
        this.age = this.age;
    }

    Student(){

    }
}

public class class {
    public static void main(String[] arrgs){
        Student s1 = new Student();
        s1.name = "Ujjwal singh";
        s1.age = 18;

        Student s2 = new Student("Ujju", 18);//with parameters

        Student s3 = new Student(s2);//Copy constructor
    }
}


//Polymorphism

class Book {
    String bookName;
    int Price;

    public void bookInfo(String bookName){
       system.out.println(bookName);
    }

    public void bookInfo(Number Price){
        system.out.println(Price);
    }

    public void bookInfo(String bookName, Number Price){
        system.out.println(bookName + " "+ Price)
    }
}
public class class {
    public static void main(String[] arrgs){
        Book b1 = new Book();
        b1.bookName = "R.C sinha";
        b1.Price = 300;


        b1.bookInfo(b1.bookName);//polymorphism
        b1.bookInfo(b1.bookName, b1.Price);//polymorphism

        //packages -> bank
        bank.Account a1 = new bank.Account();
        a1.name = "customer1";
    }
}

//Inheritance -> SingleLevelInheritance,MultiLevelInheritance, Hierarchial Inheritance , hybrid

class person { 
    String name;
    int age;
}

class Studnet extends person {
    public void StudInfo(){
        system.out.println("Student Name:",this.name, "Age:",this.age);
    }
}

public class class {
    Student s1 = new Student();
    s1.name ="Ujjwal singh";
    s1.age = 17;
    systym.out.println(s1.name,s1.age);
}

//Packages

package bank; //Page-1
class Account {
    public String name;
}
public class bank {

}

import bank; //Page-2

//Access modifiers

class Account {
    public String name;
    protected String email;
    private String password;

    //Getters and setters
    public String getPassword(){
        return this.password;
    }

    public void setPassword(String pass){
        this.password = pass;
    }
}

public class class {
    public static void main(String[] arrgs){
        Account a1 = new Account();
        a1.name = "ujjwal singh";
        a1.email = "ujjwal@gmail.com";
        a1.password = "1m2m2mfa";//Error

        a1.setPassword("2bsbdf");
        system.out.println(a1.getPassword());
    }
}

//Abstraction

Abstract class Animal(){
    Abstract void walk(){

    }
}

class Horse extends Animal {
    public void walk(){
        system.out.println("Walks on 4 legs");
    }
}

class Chiken extends Animal {
    public void walk(){
        system.out.println("walks on 2 legs");
    }
}

public class class {
    public static void main(String[] arrgs){
        Horse h1 = new Horse();
        h1.walk();

        Chiken c1 = new Chiken();
        c1.walk();
    }
}


//Interfaces 

interface Animal {
    public void walk();
}

class Horse implements Animal {
    public void walk(){
        system.out.println("Walk on 4 legs");
    }
}

public class class {
    public static void main(String[] arrgs){
        Horse horse = new Horse();
        horse.walk();
    }
}

//Static keyword

class Student {
    String name;
    Static String school;
}

public class class {
    public static void main(String[] arrgs){
        Student.school = "Shri ram janki";
        Student s1 = new Student();
        s1.name = "Ujjwal";
    }
}


//Arrays
public class class {
    public static void main(String[] arrgs){
        int[] marks = new int[3];
        marks[0] = 70; //Math
        marks[1] = 82; //Hindi
        marks[2] = 68; //Physics
        systym.out.println(marks);
        systym.out.println(marks[0]);
        systym.out.println(marks[1]);
        systym.out.println(marks[2]);
    }
}

//2D Arrays

int[][] marks = new int[3][5];//first -> rows, second -> columns