import { test, expect } from '@playwright/test';

const baseURL = 'https://petstore.swagger.io/v2';

test('Create → Get → Delete → Verify Deletion (single test)', async ({ request }) => {
  const petId = Date.now();

  // POST - create pet
  const createResponse = await request.post(`${baseURL}/pet`, {
    data: {
      id: petId,
      name: "Cow",
      status: "available"
    }
  });

  expect(createResponse.status()).toBe(200);

  // GET - verify creation
  const getResponse = await request.get(`${baseURL}/pet/${petId}`);
  const getBody = await getResponse.json();

  expect(getResponse.status()).toBe(200);
  expect(getBody.name).toBe("Cow");

  // DELETE - remove pet
  const deleteResponse = await request.delete(`${baseURL}/pet/${petId}`);

  expect(deleteResponse.status()).toBe(200);

  // GET - verify deletion (should return 404)
  const finalGet = await request.get(`${baseURL}/pet/${petId}`);

  expect(finalGet.status()).toBe(404);
});
