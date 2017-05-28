import { NycDynamicFormsPage } from './app.po';

describe('nyc-dynamic-forms App', () => {
  let page: NycDynamicFormsPage;

  beforeEach(() => {
    page = new NycDynamicFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
