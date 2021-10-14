const { Selector } = require('testcafe');

/*

Create and export a module with name "elements". This module contains functions.

Each function is returning a Selector for a particular web element and bind to testController.

This module can be imported and called from Step Definitions to access the web elements.

*/

exports.elements = {
    nameTxtBox: function () {

        return Selector('#developer-name').with({ boundTestRun: testController });

    },

    interfaceMenu: function () {

        return Selector('#preferred-interface').with({ boundTestRun: testController });

    },

    testCafeCheckBox: function () {

        return Selector('#tried-test-cafe').with({ boundTestRun: testController });

    },

    descriptionTxtBox: function () {

        return Selector('#comments').with({ boundTestRun: testController });

    },

    submitBtn: function () {

        return Selector('#submit-button').with({ boundTestRun: testController });

    },

    messageElement: function () {

        return Selector('#article-header').with({ boundTestRun: testController });

    }

}