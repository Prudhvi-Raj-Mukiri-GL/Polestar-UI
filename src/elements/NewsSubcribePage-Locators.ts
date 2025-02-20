export class Locators {
    firstname = {
        xpath: "//input[@name='firstName']",
        description: "first name field for news subcription form"
    }
    lastname = {
        xpath: "//input[@name='lastName']",
        description: "last name field for news subcription form"
    }
    email = {
        xpath: "//input[@name='email']",
        description: "email field for news subcription form"
    }
    postcode = {
        xpath: "//input[@name='zipCode']",
        description: "post code filed for news subcription form"
    }
    checkbox = {
        xpath: "(//div[@class='css-1wvirmd'])[1]",
        description: "accept checkbox for polestar data policy"
    }
    submit = {
        xpath: "//button[@type='submit']/descendant::span[contains(text(), 'Submit')]",
        description: "submit button for news subcription"
    }
    subcriptionConfirmationMessage = {
        xpath: "//*[contains(text(), 'Confirm your subscription')]",
        description: "confirmation success message for subcription of news"
    }
}