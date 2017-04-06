import { DumpstermapAngularTry2Page } from './app.po';

describe('dumpstermap-angular-try2 App', () => {
  let page: DumpstermapAngularTry2Page;

  beforeEach(() => {
    page = new DumpstermapAngularTry2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
