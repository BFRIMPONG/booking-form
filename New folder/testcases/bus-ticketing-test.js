/// <reference types = "cypress" />


describe("Test bus ticketing form", () => {

    beforeEach(() => {
        cy.visit("http://localhost/contact/index.html");
    })

    // Positive test cases
    it("Fill form with one way trip", () => {
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.visit("http://localhost/contact/index.html");
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('.trip > :nth-child(1)').click()
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('.number-people > input').type(7)
        cy.get('textarea').type('I wanna go to Italy')
        cy.get('#submit').click()
    })
    it("Fill form with round way trip", () => {
        cy.visit("http://localhost/contact/index.html");
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#fName').type("John Mensah")
        cy.get('.trip > :nth-child(3)').click()
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('.number-people > input').type(7)
        cy.get('textarea').type('I wanna go to France')
        cy.get('#submit').click()
    })

    it("Submitting only date", ()=>{
        cy.visit("http://localhost/contact/index.html");
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('#submit').click()
    
    })


    it("Submitting fields one after the other - for a one way trip ", ()=>{
        cy.visit("http://localhost/contact/index.html");
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#submit').click()
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('#submit').click()
        cy.get('.trip > :nth-child(1)').click()
        cy.get('#submit').click()
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('#submit').click()
        cy.get('.number-people > input').type(7)
        cy.get('#submit').click()
        cy.get('textarea').type('I wanna go to Italy')
        cy.get('#submit').click()
    })
    it("Submitting fields one after the other - for a round way trip", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#submit').click()
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('#submit').click()
        cy.get('.trip > :nth-child(3)').click()
        cy.get('#submit').click()
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('#submit').click()
        cy.get('.number-people > input').type(7)
        cy.get('#submit').click()
        cy.get('textarea').type('I wanna go to Italy')
        cy.get('#submit').click()
    })

    it("Full name field test", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('#submit').click()

    })
    
    it("Select a one way trip", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.trip > :nth-child(1)').click()
        cy.get('#submit').click()
    
    })
    it("Select a round way trip", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.trip > :nth-child(3)').click()
        cy.get('#submit').click()
      
    })
    it("Select a valid date ", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('#submit').click()
        
    })

    it("Valid full name and date", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('.booking-date > input').type('2021-08-03')
        cy.get('#submit').click()
        
    })
    it("Enter valid number of people ", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.number-people > input').type(7)
        cy.get('#submit').click()
       
    })
    it("Enter invalid number of people (lower than 1)", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.number-people > input').type(-1)
        cy.get('#submit').click()
 
    })
    it("Number of passengers  field (greater than 30)", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('.number-people > input').type(35)
        cy.get('#submit').click()
 
    })
    it("Full name and one way trip", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('.trip > :nth-child(1)').click()
        cy.get('#submit').click()
       
    })
    it("Full name and round way trip", ()=>{
        // cy.url().should('include', 'Bus%20Ticketing%20System')
        cy.get('#fName').type("Bismark Frimpong")
        cy.get('.trip > :nth-child(3)').click()
        cy.get('#submit').click()
       
    })
 

})

