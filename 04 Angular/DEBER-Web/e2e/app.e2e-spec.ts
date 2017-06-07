import { BWebPage } from './app.po';

describe('b-web App', () => {
  let page: BWebPage;

  beforeEach(() => {
    page = new BWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
