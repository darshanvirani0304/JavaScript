let student = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 20,
        "grade": "Sophomore",
        "courses": ["Mathematics", "History", "Computer Science"]
    },
    {
        "id": 2,
        "name": "Alice Smith",
        "age": 21,
        "grade": "Junior",
        "courses": ["Biology", "Chemistry", "Physics"]
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "age": 19,
        "grade": "Freshman",
        "courses": ["English", "Art History", "Geography"]
    },
    {
        "id": 4,
        "name": "Ella Davis",
        "age": 22,
        "grade": "Senior",
        "courses": ["Psychology", "Sociology", "Anthropology"]
    },
    {
        "id": 5,
        "name": "Michael Wilson",
        "age": 20,
        "grade": "Sophomore",
        "courses": ["Economics", "Political Science", "Statistics"]
    },
    {
        "id": 6,
        "name": "Sophia Brown",
        "age": 21,
        "grade": "Junior",
        "courses": ["Chemistry", "Biology", "Biochemistry"]
    },
    {
        "id": 7,
        "name": "David Lee",
        "age": 19,
        "grade": "Freshman",
        "courses": ["Physics", "Mathematics", "Engineering"]
    },
    {
        "id": 8,
        "name": "Olivia Taylor",
        "age": 22,
        "grade": "Senior",
        "courses": ["History", "Philosophy", "Literature"]
    },
    {
        "id": 9,
        "name": "James Miller",
        "age": 20,
        "grade": "Sophomore",
        "courses": ["Computer Science", "Mathematics", "Data Science"]
    },
    {
        "id": 10,
        "name": "Emma Anderson",
        "age": 21,
        "grade": "Junior",
        "courses": ["Psychology", "Sociology", "Criminology"]
    }
]

// let studentInfo = student.filter((studentAge) => {
//     return studentAge.age === 20;
// })

// let studentInfo = student.filter((studentCourse) =>{
//     return studentCourse.courses[0] === "Computer Science";
// })

let studentInfo = student.filter((studentGread) =>{
    return studentGread.grade === "Junior";
})

console.log(studentInfo);


// Show only student name
studentInfo.forEach((studentName) =>{
    console.log(studentName.name);
})