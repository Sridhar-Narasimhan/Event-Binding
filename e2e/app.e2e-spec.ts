import { EventBindingPage } from './app.po';

describe('event-binding App', () => {
  let page: EventBindingPage;

  beforeEach(() => {
    page = new EventBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
