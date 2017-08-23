import { Week1GitPracPage } from './app.po';

describe('week1-git-prac App', () => {
  let page: Week1GitPracPage;

  beforeEach(() => {
    page = new Week1GitPracPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
