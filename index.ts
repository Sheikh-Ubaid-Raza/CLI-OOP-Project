#! /usr/bin/env node

import inquirer from "inquirer";

class Student  {
    name:string
     constructor(n:string){
        this.name = n;
     }
}

class Person {
    students:Student[] = [];
    addStudent(obj:Student){
      this.students.push(obj)
    }
}

const persons = new Person();

const programStart = async (persons:Person) => {
  do {
    
   console.log("\t Welcome To OOP Project! \t");
   
   const ans = await inquirer.prompt([
    {
      name:"select",
      message:"Whom would you like to interact with?",
      type:"list",
      choices:["staff","student","Exit"]
    }
   ])

   if (ans.select === "staff") {
    console.log("You approach the Staff Room,Feel Free To Ask Questions.");
   } else if(ans.select === "student"){
      const ans = await inquirer.prompt([
        {
            name:"student",
            type:"input",
            message:"Enter the Student's Name,You wish to engage with."
        }
      ])
      const student = persons.students.find(val => val.name == ans.student);
      //  For new Students
   if (!student) {
    const name = new Student(ans.student);
    persons.addStudent(name);
    console.log(`Hello,I am ${name.name}, Nice to meet you!`);
    console.log("Successfully, New Student Added!");
    console.log("Current Student List!");
    console.log(persons.students)
   }
   // For Existing Students
   else{
    console.log(`Hello,I am ${student.name}, Nice to See you Again!`);
    console.log("Existing Student List!");
    console.log(persons.students);
   }
   }else if(ans.select === "Exit"){
   console.log("\t Exiting Project ...");
   process.exit()
   }
  } while (true);
}

programStart(persons)
