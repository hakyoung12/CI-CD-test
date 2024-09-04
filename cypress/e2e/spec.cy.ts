describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('“Get started by” 라는 텍스트가 존재하는 것 검증', () => {
    cy.contains('Get started by editing');
  });

  it('“Docs”라는 anchor heading이 있고 이 anchor의 href 속성이 정확하게 설정돼 있는지 검증', () => {
    cy.contains('Docs')
      .should('have.attr', 'href')
      .and('include', 'https://nextjs.org/docs');
  });
});
