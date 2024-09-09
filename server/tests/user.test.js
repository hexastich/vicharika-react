import request from 'supertest';
import app from '../app.js';

describe('User API', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should get a user by ID', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '+91-1234567890',
        location: {
          country: 'India',
          state: 'State Name',
          city: 'City Name',
          zip_code: ['Postal Code']
        },
        account_type: 'registered',
        anonymous: false,
        joined_date: '2024-09-08',
        status: 'Active'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('insertId');
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/api/users/1')
      .send({
        first_name: 'Jane',
        last_name: 'Doe'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/api/users/1');
    expect(res.statusCode).toEqual(200);
  });
});
