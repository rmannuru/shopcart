import { MyNewDemoPage } from './app.po';

describe('my-new-demo App', () => {
  let page: MyNewDemoPage;

  beforeEach(() => {
    page = new MyNewDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
