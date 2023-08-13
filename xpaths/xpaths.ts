export default class Xpaths {
    static readonly userId: string = '//input[@id="userid"]';
    static readonly password: string = '//input[@id="password"]';
    static readonly mobileAppCode: string = '//input[@label="Mobile App Code"]';
    static readonly submit: string = '//button[@type="submit"]';
    static readonly reportTab: string = '//a//span[@class="reports-id"]';
    static readonly tradebook: string = '//a//span[text()="Tradebook"]';
    static readonly segmentSelect: string = '//label[text()="Segment"]/following-sibling::select';
    static readonly dateBoxClick: string = '//input[@name="date"]';
    static readonly fromCurrentYearClick: string = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-header")]//a[@class="mx-current-year"]';
    static readonly fromYearClick: string = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="FROM_YEAR"]';
    static readonly fromMonthClick: string = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="FROM_MONTH"]';
    static readonly fromDateClick: string = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//td[@title="FROM_FULL_DATE" and text()="FROM_DATE"]';
    static readonly toCurrentYearClick: string = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-header")]//a[@class="mx-current-year"]';
    static readonly toYearClick: string = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="TO_YEAR"]';
    static readonly toMonthClick: string = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="TO_MONTH"]';
    static readonly toDateClick: string = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//td[@title="TO_FULL_DATE" and text()="TO_DATE"]';
}