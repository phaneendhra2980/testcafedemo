import { Selector, t } from 'testcafe';

class ExamplePage {
    constructor() {
        this.nameInputBox = Selector('#developer-name');
        this.submitbutton = Selector('#submit-button');
    }

    async clicksubmitName(name) {
        await t
            .typeText(this.nameInputBox, name)
            .click(this.submitbutton);
    }
}

export default new ExamplePage();