import { DeberBPage } from './app.po';

describe('deber-b App', () => {
  let page: DeberBPage;

  beforeEach(() => {
    page = new DeberBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
