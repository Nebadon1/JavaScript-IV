// CODE here for your Lambda Classes
 
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
         return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.favLanguage}`
    };
    grade(Student){
        return `${Student.name} receives a perfect score on ${this.favLanguage}`
    }
};


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        return `I'm ${this.name} and my favority subjects are, ${this.favSubjects}`
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}` 
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

class Project_Manager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        
    }
    standUp(slackchannel){
        return `${this.name} announces to ${slackchannel}, @channel standy times!​​​​​`
    };
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    };
   
};


// OBJECTS 
  const elena = new Person({
    name: 'Elena',
    age: 30,
    location: 'NY',
  });

  const mike = new Person({
    name: 'Mike',
    age: 33,
    location: 'LA',
  });

  const sofia = new Person({
    name: 'Sofia',
    age: 37,
    location: 'Denver',
  });


  const pedro = new Student({
    name: 'Pedro',
    age: 37,
    location: 'Narnia',
    previousBackground: 'Mechanic',
    className: 'CS12',
    favSubjects: ['Html', 'CSS', 'JavaScript']
    });

  const jake = new Student({
    name: 'Jake',
    age: 43,
    location: 'Huston',
    previousBackground: 'Highschool',
    className: 'CS13',
    favSubjects: ['Html', 'rubi', 'C++']
    });

  const  dora = new Student({
    name: 'Dora',
    age: 25,
    location: 'Seattle',
    previousBackground: 'Explorer',
    className: 'CS02',
    favSubjects: ['cocoa', 'Java', 'Basic']
    });
  

  const carlos = new Instructor({
    name: 'Carlos',
    location: 'Tampa',
    age: 42,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: ` Shoot for the moon. Even if you miss, you'll land among the stars.`
  });

  const deva = new Instructor({
    name: 'Deva',
    location: 'Miami',
    age: 37,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Friends are Friends  `
  });

  const carl = new Instructor({
    name: 'Carl',
    location: 'Ft Lauderdale',
    age: 39,
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: ` work work work `
  });


  const dan = new Project_Manager({
    name: 'Dan',
    location: 'Ft Lauderdale',
    age: 39,
    gradClassName: 'CS20'   ,
    favInstructor: 'Carlos',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: ` work `
  });

  const jeff = new Project_Manager({
    name: 'Jeff',
    location: 'Ft Lauderdale',
    age: 39,
    gradClassName: 'CS21'   ,
    favInstructor: 'Carl',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `  work work `
  });

  
  const scotty = new Project_Manager({
    name: 'Scotty',
    location: 'Ft Lauderdale',
    age: 39,
    gradClassName: 'CS22'   ,
    favInstructor: 'Deva',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: ` work work work `
  });

// TESTS

     console.log(elena.speak()); 
     console.log(carlos.demo());
     console.log(deva.grade(pedro));
     console.log(dora.listsSubjects());
     console.log(jake.PRAssignment('Javascript'));
     console.log(pedro.sprintChallenge('CSS'))
     console.log(dan.standUp('webpt7_jeffery'))
     console.log(scotty.debugsCode(jake, 'HTML'));


  



  