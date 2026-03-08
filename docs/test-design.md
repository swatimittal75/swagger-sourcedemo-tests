
# Test Design Explanation

## Implemented Tests

### API Test – Create Pet
Endpoint: POST /pet

Positive Scenario:
Create a pet with valid data and verify:
- Status code = 200
- Response body contains expected values

Why API Layer?
Testing this functionality via UI would require:
- UI interaction
- Slower execution
- Potential UI flakiness

API tests are faster, more stable and isolate backend logic.

---

### UI Test – Successful Login

Scenario:
User logs into SauceDemo with valid credentials.

Steps:
1. Open login page
2. Enter username/password
3. Click login
4. Verify inventory page loads

Pattern Used:
Page Object Model to keep selectors separate from tests.

---

# Additional Test Scenarios (Priority Order)

## API Tests

High Priority

1. Create Pet with Invalid Data
- Missing required fields
- Expect validation error

2. Get Pet By ID
- Verify created pet can be retrieved

3. Delete Pet
- Verify deletion success
- Confirm pet no longer exists

Medium Priority

4. Update Pet
- Modify name or status

5. Non‑existent Pet ID
- Expect 404 response

---

## UI Tests

High Priority

1. Invalid Login
- Incorrect username/password
- Verify error message

2. Add Product to Cart
- Add item
- Verify cart count updates

3. Checkout Flow
- Add item
- Complete purchase
- Verify order confirmation

Medium Priority

4. Remove Item From Cart

5. Sort Products

---

# API vs UI Testing Strategy

UI tests are slower and more fragile because they depend on:

- Browser rendering
- UI selectors
- Network latency

API tests are preferable when validating:

- Business logic
- Data creation
- Backend workflows

Therefore:

UI tests should focus on **critical user journeys**
API tests should cover **functional backend logic**.

---

# Trade‑offs

Due to the time constraint:

- Only one API test implemented
- Only one UI test implemented

However the framework structure allows easy expansion.
