Feature: Robobar cart
  Scenario: user add one cola
    Given user opens robobar website
    When user adds a cola
    Then total should be €1.25

  Scenario Outline: user adds a specific number of cola
    Given user opens robobar website
    When user adds <n> cola
    Then total should be €<total>
    Examples:
      | n | total |
      | 3 | 3.75  |
      | 4 | 5.00  |

  Scenario Outline: user buy a several drinks
    Given user opens robobar website
    When user adds <cola> cola
    When user adds <beer> beer
    When user adds <wine> wine
    Then total should be €<total>
    Examples:
      | cola | beer | wine | total |
      | 1    | 0    | 0    | 1.25  |
      | 1    | 1    | 1    | 6.25  |

  Scenario: user add two colas
    Given user opens robobar website
    When user adds a cola
    And user adds a cola
    Then total should be €2.50

  Scenario: user add one cola and one beer
    Given user opens robobar website
    When user adds a cola
    And user adds a beer
    Then total should be €3.25

  Scenario: user add one cola, one beer, and one wine
    Given user opens robobar website
    When user adds a cola
    And user adds a beer
    And user adds a wine
    Then total should be €6.25

  Scenario Outline: user adds several drinks in one line
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    Examples:
      | cola | beer | wine | total |
      | 1    | 0    | 0    | 1.25  |
      | 0    | 1    | 0    | 2.00  |
      | 0    | 0    | 1    | 3.00  |
      | 1    | 1    | 1    | 6.25  |

  Scenario: user add one beer and age is 17
    Given user opens robobar website
    When user adds a beer
    Then total should be €2.00
    When user press submit button
    And user enter her age is 17
    And user press order button
    Then alert is active

  Scenario: user add one beer and age is 20
    Given user opens robobar website
    When user adds a beer
    Then total should be €2.00
    When user press submit button
    And user enter her age is 20
    And user press order button
    Then order is confirmed

  Scenario Outline: user adds several drinks in one line and age
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    When user press submit button
    When user enter her age is <age>
    And user press order button
    But checkout result is "<expected>"
    Examples:
      | cola | beer | wine | age | total | expected |
      | 1    | 1    | 0    | 10  | 3.25  | fail     |
      | 0    | 1    | 0    | 10  | 2.00  | fail     |
      | 0    | 0    | 1    | 21  | 3.00  | pass     |
      | 1    | 1    | 1    | 22  | 6.25  | pass     |