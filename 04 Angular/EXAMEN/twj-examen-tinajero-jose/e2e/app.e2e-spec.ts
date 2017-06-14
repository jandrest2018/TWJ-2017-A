import { TwjExamenTinajeroJosePage } from './app.po';

describe('twj-examen-tinajero-jose App', () => {
  let page: TwjExamenTinajeroJosePage;

  beforeEach(() => {
    page = new TwjExamenTinajeroJosePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
