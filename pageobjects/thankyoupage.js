import { Selector, t } from 'testcafe';

class ThankYouPage {
    constructor() {
        this.header = Selector('#article-header');

    }

    async verifyheader(name) {
        await t
            .expect(this.header.innerText).eql('Thank you, '+ name+'!');

    }
}

export default new ThankYouPage();