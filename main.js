const readlineSync = require('readline-sync');
const fs = require('fs');
let data = fs.readFileSync('data.json', 'utf8');
data = JSON.parse(data);

function showMenu() {
	console.log("1.Show all students");
	console.log("2.Create a new student");
	console.log("3.Exit");
	console.log("-----------------------------");
	let numberChoose = readlineSync.question("Please enter a number: ");
	switch(numberChoose) {
		case '1':
			showStudents(data.students);
			showMenu();
		case '2':
			createStudent();
			let jsonData = JSON.stringify(data);
			fs.writeFile('data.json', jsonData, (err) => {
				if(err) throw err;
				console.log('The file had been saved');
			});
			break;
		case '3':
			break;
		default:
			console.log("Please enter a another number: ");
			showMenu();
	}
}

showMenu();


function showStudents(studentList) {
	for(let student of studentList) {
		console.log(student.studentID + ' ' + student.studentName + ' ' + student.studentPhone);
	}
	console.log("-----------------------------");
}

function createStudent() {
	let id = readlineSync.question("Please enter a id: ");
	let name = readlineSync.question("Please enter a name: ");
	let phone = readlineSync.question("Please enter a phone: ");
	
	let student = {};
	student.studentID = id;
	student.studentName = name;
	student.studentPhone = phone;
	data.students.push(student);
}