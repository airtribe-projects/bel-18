/*
Employee --> Developer --> Tech Lead
         --> Manager   
*/

class Employee {
  constructor(name) {
    this.name = name;
  }

  clockIn() {
    console.log(`${this.name} clocked in`);
  }
}

class Developer extends Employee {
  writeCode() {
    console.log(`${this.name} is writing code`);
  }

  writeTest() {
    console.log(`${this.name} is writing Test`);
  }

}

class Manager extends Employee {
  reviewWork() {
    console.log(`${this.name} is reviewing work`);
  }
}

class TechLead extends Developer {
  planSprint() {
    console.log(`${this.name} is planning the sprint`);
  }

  writeTest() {
    throw new Error("TL Don';'t write tests")
  }
}

//DRY
class TechLeadWhoDontWriteTest extends Employee {
    writeCode() {
        console.log(`${this.name} is writing code`);
    }

    planSprint() {
        console.log(`${this.name} is planning the sprint`);
    }
}



