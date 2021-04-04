import playwright from 'playwright';

let browser;
let page;

beforeAll(async () => {
  browser = await playwright.webkit.launch();
//   browser = await playwright.webkit.launch({ headless: false, slowMo: 200 });
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000/');
});

describe('index.html', () => {
  it('zero', async () => {
    expect(await page.textContent('#result')).toBe('0');

    await page.click('[data-test-id=op-3]');
    await page.click('[data-test-id=op-2]');
    await page.click('[data-test-id=plus]');
    await page.click('[data-test-id=op-2]');
    await page.click('[data-test-id=op-8]');
    expect(await page.textContent('#result')).toBe('32+28');

    await page.click('[data-test-id=equal]');
    expect(await page.textContent('#result')).toBe('60');

    await page.click('[data-test-id=clear]');
    expect(await page.textContent('#result')).toBe('0');
  });

  it('renders a heading element', async () => {
    await page.click('[data-test-id=op-3]');
    await page.click('[data-test-id=plus]');
    await page.click('[data-test-id=op-2]');
    await page.click('[data-test-id=equal]');
    const content = await page.textContent('#result');
    expect(content).toBe('5');
  });
});

afterEach(async () => {
  await page.close();
});

afterAll(async () => {
  await browser.close();
});
