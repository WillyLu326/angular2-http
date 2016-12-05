import { Angular2StarterBasicPage } from './app.po';

describe('angular2-starter-basic App', function() {
  let page: Angular2StarterBasicPage;

  beforeEach(() => {
    page = new Angular2StarterBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
