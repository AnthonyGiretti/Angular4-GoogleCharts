import { Angular4GoogleChartsPage } from './app.po';

describe('angular4-google-charts App', () => {
  let page: Angular4GoogleChartsPage;

  beforeEach(() => {
    page = new Angular4GoogleChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
