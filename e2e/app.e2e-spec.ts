import { Ng2deployPage } from './app.po';

describe('ng2deploy App', function() {
  let page: Ng2deployPage;

  beforeEach(() => {
    page = new Ng2deployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
