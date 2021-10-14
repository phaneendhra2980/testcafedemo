import { userVariables } from 'testcafe';


fixture("Test user variables")
    .page(userVariables.url);

test('Type text', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});
