import request from 'supertest';
import app from '../app.js';

describe('Complaint API', () => {
  it('should get all complaints', async () => {
    const res = await request(app).get('/api/complaints');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should get a complaint by ID', async () => {
    const res = await request(app).get('/api/complaints/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should create a new complaint', async () => {
    const res = await request(app)
      .post('/api/complaints')
      .send({
        user_id: 'unique_user_id',
        title: 'Complaint Title',
        description: 'Detailed description of the issue being reported.',
        category: 'Government Policy/Action/Service',
        department: 'Concerned Government Department',
        location: {
          country: 'India',
          state: 'State Name',
          city: 'City Name',
          zip_code: 'Postal Code'
        },
        attachments: [
          {
            type: 'image',
            file_name: 'image.jpg',
            file_url: 'https://example.com/image.jpg'
          }
        ],
        status: 'submitted',
        submission_date: '2024-09-08',
        last_updated: '2024-09-08',
        anonymous: false
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('insertId');
  });

  it('should update a complaint', async () => {
    const res = await request(app)
      .put('/api/complaints/1')
      .send({
        title: 'Updated Complaint Title'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a complaint', async () => {
    const res = await request(app).delete('/api/complaints/1');
    expect(res.statusCode).toEqual(200);
  });
});
