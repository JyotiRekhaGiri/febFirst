/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map(student => {
        if(student.marks > 50){
            console.log(student);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach(student => {
        if(student.marks > 50){
            console.log(student);
        }
    });
  }
  
  function addData() {
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45};
    arr.push(newStudent);
    console.log("Added student:", newStudent);
  }
  
  function removeFailedStudent() {
    arr = arr.filter(student => student.marks > 50);
    console.log("Student after removing failed:",arr);
  }
  
  function concatenateArray() {
    const newArray = [
        { id: 5, name: "emma", age: "21", marks: 65 },
        { id: 6, name: "mike", age: "22", marks: 75 },
        { id: 7, name: "lisa", age: "20", marks: 55 } 
    ];
    arr = arr.concat(newArray);
    console.log("Concatenated array:", arr);
  }