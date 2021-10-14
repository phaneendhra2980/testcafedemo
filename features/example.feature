Feature: Example Page User Details
    Scenario: The one where user enters all the details on Example Page

        Given user navigates to the example form page
        When user enters "<username>" in the name field
        And user selects "JavaScript API" as TestCafe Interface
        And user checks the I have tried TestCafe checkbox
        And user enters "Good Tool" in feedback description field
        And user clicks on Submit button
        Then "<expectedheader>" message appears

        Examples:
            | username    | expectedheader      |
            | Vishruth    | Welcome Vishruth    |
            | Sriansh     | Welcome Sriansh     |
            | Lalitaditya | Welcome Lalitaditya |
            | Phaneendhra | Welcome Phaneendhra |