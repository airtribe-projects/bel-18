class Employee {
  constructor(name) {
    this.name = name;
  }

  clockIn() {
    console.log(`${this.name} clocked in`);
  }
}

class CanWriteCode {
    writeCode() {
        console.log(`${this.name} is writing code`);
    }
}

class CanReviewCode {
    reviewCode() {
        console.log(`${this.name} is reviewing work`);
    }
}

class CanPlanSprint {
    planSprint() {
        console.log(`${this.name} is planning the sprint`);
    }
}

class Developer extends Employee {
    #writeCode;
    constructor() {
        this.#writeCode = new CanWriteCode();
    }
  
    writeCode() {
        this.#writeCode.writeCode();
    }
}

class TechLead extends Employee {
    #planSprint;
    #writeCode;
    constructor() {
        this.#planSprint = new CanPlanSprint();
        this.#writeCode = new CanWriteCode();
    }
  
    planSprint() {
        this.#planSprint.planSprint();
    }
    
    writeCode() {
        this.#writeCode.writeCode();
    }
}


class Manager extends Employee {
    #reviewCode;
    constructor() {
        this.#reviewCode = new CanReviewCode();
    }
  
    planSprint() {
        this.#planSprint.planSprint();
    }
    
    writeCode() {
        this.#writeCode.writeCode();
    }
}


