import { FieldBookingSystemPage } from './app.po';

describe('field-booking-system App', () => {
  let page: FieldBookingSystemPage;

  beforeEach(() => {
    page = new FieldBookingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
