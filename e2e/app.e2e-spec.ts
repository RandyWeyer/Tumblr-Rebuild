import { TumblrRebuildPage } from './app.po';

describe('tumblr-rebuild App', () => {
  let page: TumblrRebuildPage;

  beforeEach(() => {
    page = new TumblrRebuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
