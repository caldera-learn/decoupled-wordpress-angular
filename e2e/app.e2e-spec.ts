import { DecoupledPage } from './app.po';

describe('decoupled App', function() {
  let page: DecoupledPage;

  beforeEach(() => {
    page = new DecoupledPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
