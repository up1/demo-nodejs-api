const request = require('supertest');
const app = require('../app');

describe('GET /products/:id', () => {
  test('should return product 1 with status 200', async () => {
    const response = await request(app)
      .get('/products/1')
      .expect(200);

    expect(response.body).toEqual({
      id: 1,
      name: 'product 01',
      price: 100.50
    });
  });

  test('should return 404 for product 2 with not found message', async () => {
    const response = await request(app)
      .get('/products/2')
      .expect(404);

    expect(response.body).toEqual({
      message: 'Product is=2 not found in system'
    });
  });

  test('should return 500 for product 3 with system error message', async () => {
    const response = await request(app)
      .get('/products/3')
      .expect(500);

    expect(response.body).toEqual({
      message: 'System error'
    });
  });

  test('should return 404 for any other product id', async () => {
    const response = await request(app)
      .get('/products/999')
      .expect(404);

    expect(response.body).toEqual({
      message: 'Product is=999 not found in system'
    });
  });

  test('should handle non-numeric id', async () => {
    const response = await request(app)
      .get('/products/abc')
      .expect(404);

    expect(response.body).toEqual({
      message: 'Product is=NaN not found in system'
    });
  });
});
