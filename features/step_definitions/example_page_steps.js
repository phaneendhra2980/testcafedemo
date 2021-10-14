/*
1. Import module from newly created page object file.
2. Import the required keywords from Cucumber.
3. Import the Selector from TestCafe.
*/

const { Selector } = require('testcafe');
const examplePage = require('../../pageobjects/example_pageObjects');
const { Given, When, Then } = require('cucumber');



Given('user navigates to the example form page', async function () {

    await testController.navigateTo('https://devexpress.github.io/testcafe/example/');

});

When('user enters {string} in the name field', async function (string) {

    const nameField = examplePage.elements.nameTxtBox();

    await testController.typeText(nameField, string);

});

When('user selects {string} as TestCafe Interface', async function (string) {

    const interfaceField = examplePage.elements.interfaceMenu();

    const interfaceOption = interfaceField.find('option');

    await testController.click(interfaceField).click(interfaceOption.withExactText(string));

});


When('user checks the I have tried TestCafe checkbox', async function () {

    const triedTestCafeCheckBox = examplePage.elements.testCafeCheckBox();

    await testController.click(triedTestCafeCheckBox);

});

When('user enters {string} in feedback description field', async function (string) {

    const descriptionField = examplePage.elements.descriptionTxtBox();

    await testController.typeText(descriptionField, string);

});


When('user clicks on Submit button', async function () {

    const submitButton = examplePage.elements.submitBtn();

    await testController.click(submitButton);

});

Then('{string} message appears', async function (string) {

    const welcomeMessageElement = examplePage.elements.messageElement();

    await testController.expect(welcomeMessageElement.innerText).contains(string);

});