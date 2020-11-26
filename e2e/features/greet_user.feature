Feature: Greet user
    Every user should be greeted with their name

Scenario: Entered name is Beth Harmon
    Given name is "Beth Harmon"
    When I tap Greet button
    Then I should be greeted with "Hello, Beth Harmon!"