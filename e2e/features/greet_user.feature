Feature: Greet user
    Every user should be greeted with their name

Scenario: Entered name is John Doe
    Given name is "John Doe"
    When I tap Greet button
    Then I should be greeted with "Hello, John Doe!"