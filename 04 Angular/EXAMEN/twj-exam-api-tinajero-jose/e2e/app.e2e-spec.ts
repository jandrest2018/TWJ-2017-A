import { TwjExamApiTinajeroJosePage } from './app.po';

describe('twj-exam-api-tinajero-jose App', () => {
  let page: TwjExamApiTinajeroJosePage;

  beforeEach(() => {
    page = new TwjExamApiTinajeroJosePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
