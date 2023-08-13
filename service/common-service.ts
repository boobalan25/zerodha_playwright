import { Page } from "@playwright/test";
import * as data from '../data/zerodha_tinput.json';
import Xpaths from "../xpaths/xpaths";

export default class CommonService {

    static async takeSegmentScreenshot(page: Page, year: number, month: string, date: number,
        toYear: number, toMonth: string, toDate: number, segmentValue: string) {
        await page.selectOption(Xpaths.segmentSelect, segmentValue);
        await page.click(Xpaths.dateBoxClick);
        await page.click(Xpaths.fromCurrentYearClick);
        await page.click(Xpaths.fromYearClick.replace("FROM_YEAR", year.toString()));
        await page.click(Xpaths.fromMonthClick.replace("FROM_MONTH", month));
        await page.click(Xpaths.fromDateClick.replace("FROM_DATE", date.toString()).replace("FROM_FULL_DATE", data.dateFrom));
      
        await page.click(Xpaths.toCurrentYearClick);
        await page.click(Xpaths.toYearClick.replace("TO_YEAR", toYear.toString()));
        await page.click(Xpaths.toMonthClick.replace("TO_MONTH", toMonth));
        await page.click(Xpaths.toDateClick.replace("TO_DATE", toDate.toString()).replace("TO_FULL_DATE", data.dateTo));
      
        await page.click(Xpaths.submit);
        await page.waitForTimeout(3000);
        await page.screenshot({ path: 'screenshot/' + segmentValue.toLowerCase() + '.png', fullPage: true });
    }
}