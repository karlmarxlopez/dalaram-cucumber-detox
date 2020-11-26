Feature: Hello Button
    Every user should see a Hello! text

Scenario: First open
    Given a user opened the newly installed app
    When I tap Hello button
    Then I should see "Hello!"