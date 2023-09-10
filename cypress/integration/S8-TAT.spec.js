///<reference types="cypress"/>

describe('Seção 7', () =>{
    
    beforeEach(()=>{
        cy.visit('../../src/index.html');
    });

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{ 

        cy.get('#privacy>a')
            .should('have.attr','target','_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
        cy.get('#privacy>a')
        .invoke('removeAttr','target')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
        cy.get('#privacy>a')
        .invoke('removeAttr','target')
        .click()
    })

    it('testa a página da política de privacidade de forma independente',()=>{
        cy.get('#privacy>a')
        .invoke('removeAttr','target')
        .click()

        cy.get('#title').should((title)=>{
            expect(title[0].outerText).to.equal('CAC TAT - Política de privacidade')
        })

        cy.get('#white-background>p:nth-child(1)')
        .should((title)=>{
            expect(title[0].outerText).to.equal('Não salvamos dados submetidos no formulário da aplicação CAC TAT.')
        })
        
        cy.get('#white-background>p:nth-child(2)')
        .should((title)=>{
            expect(title[0].outerText).to.equal('Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.')
        })
        
        cy.get('#white-background>p:nth-child(3)')
        .should((title)=>{
            expect(title[0].outerText).to.equal('No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')
        })

        cy.get('#white-background>p:nth-child(5)')
        .should((title)=>{
            expect(title[0].outerText).to.equal('Talking About Testing')
        })
    })
})