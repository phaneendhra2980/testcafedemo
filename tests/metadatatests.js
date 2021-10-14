import { Selector } from 'testcafe';

fixture.meta('version','1') `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test.meta('env','test')('MetaData test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .takeScreenshot()
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});