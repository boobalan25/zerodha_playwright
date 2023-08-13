import { test, expect } from '@playwright/test';
import * as data from '../data/zerodha_input.json';
import Xpaths from '../xpaths/xpaths';
import CommonService from '../service/common-service';

const segmentValues = ['EQ', 'FO', 'CDS', 'COM', 'MF', 'EQX', 'MFX']

test('get started link', async ({ page }) => {
  await page.goto(data.openLink);  
  await page.fill(Xpaths.userId, data.userId);
  await page.fill(Xpaths.password, data.password);
  await page.click(Xpaths.submit);
  await page.waitForTimeout(1000);
  await page.fill(Xpaths.mobileAppCode, data.mobileAppCode);
  await page.waitForTimeout(3000);
  await page.click(Xpaths.reportTab);
  await page.click(Xpaths.tradebook);
  await page.waitForTimeout(5000);

  let fromDate = new Date(data.dateFrom);
  let date = fromDate.getDate();;
  let year = fromDate.getFullYear();
  let month = fromDate.toLocaleString('en-US', { month: 'short' });

  let toDay = new Date(data.dateTo);
  let toDate = toDay.getDate();;
  let toYear = toDay.getFullYear();
  let toMonth = toDay.toLocaleString('en-US', { month: 'short' });
  for(let i = 0; i < segmentValues.length; i++) {
    await CommonService.takeSegmentScreenshot(page, year, month, date, toYear, toMonth, toDate, segmentValues[i]);
  }
});
