import { TwjExamenApiVegaFernandaPage } from './app.po';

describe('twj-examen-api-vega-fernanda App', () => {
  let page: TwjExamenApiVegaFernandaPage;

  beforeEach(() => {
    page = new TwjExamenApiVegaFernandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
