/// <reference types="cypress" />

describe("SignUpForm", ()=>{
    it("valid input in fields", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get(".trems > input").click();
        cy.get("button").click();               

    })
    it("valid input in fields", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get(".trems > input").click();
        cy.get("button").click();               

    })
    it("empty input in fields", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get("button").click();               

    })
    it("username field", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get("button").click(); 
    })
    it("email field",()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get("button").click(); 
    })
    it("password field", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get("button").click(); 
    })
    it("agreement field",()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".trems > input").click();
        cy.get("button").click(); 
    })

    it("username and email fields", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get("button").click(); 
       
    })
    it("username and password", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get("button").click(); 
    })
    it("username and agreement", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(2)").type("Bismark Frimpong")
        cy.get(".trems > input").click();
        cy.get("button").click();   
    })
    it("email and password", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get("button").click();   
    })
    it("email and agreement", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(3)").type("bismark.frimpong@amalitech.org")
        cy.get(".trems > input").click();
        cy.get("button").click();   
    })
    it("password and agreement", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(4)").type("1234567");
        cy.get(".trems > input").click();
        cy.get("button").click();

    })
    it("password validation (less that 6)",()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(4)").type("12345");
        cy.get("button").click();
    })
    it("password validation (greater than 12)",()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html")
        cy.contains("Hello,Friend")
        cy.get(".sign-up > :nth-child(4)").type("1234567145623");
        cy.get("button").click();
    })
    it("select admin", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html");
        cy.contains("Hello,Friend");
        cy.get("#admin").click();
        cy.get("button").click();

    })
    it("select user", ()=>{
        cy.viewport(1270, 700)
        cy.visit("http://localhost/sign-up/index.html");
        cy.contains("Hello,Friend");
        cy.get("#user").click();
        cy.get("button").click();

    })
})