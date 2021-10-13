import { Selector } from 'testcafe';

import examplepage from '../pageobjects/examplepage';
import thankyoupage from '../pageobjects/thankyoupage';


fixture`Structured Page Model`
    .page`https://devexpress.github.io/testcafe/example/`;


test('Submit a name and check the header', async t => {
    
    await examplepage.clicksubmitName('Phaneendhra Aswani Kumar');

    await thankyoupage.verifyheader('Phaneendhra Aswani Kumar');
});