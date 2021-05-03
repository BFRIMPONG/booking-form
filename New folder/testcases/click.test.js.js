/// <reference types="cypress" />

describe("ClickEvent",() =>{
    beforeEach(() => {
       
        cy.visit('http://www.webdriveruniversity.com/Click-Buttons/index.html')
    })
    it("first case", () =>{
        cy.get("#button1").click()
        cy.get("#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
    it("second case", () =>{
        cy.get("#button2").click()
                cy.get("#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
    it("third case", () =>{
        cy.get("#button3").click()
        cy.get("#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
})