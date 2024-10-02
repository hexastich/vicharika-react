INSERT INTO users (name, email, phone, country, state, city, zip_code, account_type) VALUES
('John Doe', 'john.doe@example.com', '+91-9876543210', 'India', 'Maharashtra', 'Mumbai', '400001', 'registered'),
('Jane Smith', 'jane.smith@example.com', '+91-9123456789', 'India', 'Karnataka', 'Bangalore', '560001', 'registered'),
('Anil Kapoor', 'anil.kapoor@example.com', '+91-9812345678', 'India', 'Delhi', 'New Delhi', '110001', 'guest'),
('Sita Sharma', 'sita.sharma@example.com', '+91-9923456781', 'India', 'Uttar Pradesh', 'Lucknow', '226001', 'registered'),
('Ravi Patel', 'ravi.patel@example.com', '+91-9876567890', 'India', 'Gujarat', 'Ahmedabad', '380001', 'registered'),
('Neha Gupta', 'neha.gupta@example.com', '+91-9112345678', 'India', 'West Bengal', 'Kolkata', '700001', 'guest'),
('Vikram Singh', 'vikram.singh@example.com', '+91-9898989898', 'India', 'Rajasthan', 'Jaipur', '302001', 'registered'),
('Priya Kumar', 'priya.kumar@example.com', '+91-9234567890', 'India', 'Tamil Nadu', 'Chennai', '600001', 'registered'),
('Rahul Mehta', 'rahul.mehta@example.com', '+91-9123456765', 'India', 'Madhya Pradesh', 'Bhopal', '462001', 'guest'),
('Aishwarya Rai', 'aishwarya.rai@example.com', '+91-9876543231', 'India', 'Punjab', 'Amritsar', '143001', 'registered');


INSERT INTO users (name, email, phone, country, state, city, zip_code, account_type) VALUES
('John Doe', 'john.doe@example.com', '+91-9876543210', 'India', 'Maharashtra', 'Mumbai', '400001', 'registered'),
('Jane Smith', 'jane.smith@example.com', '+91-9123456789', 'India', 'Karnataka', 'Bangalore', '560001', 'registered'),
('Anil Kapoor', 'anil.kapoor@example.com', '+91-9812345678', 'India', 'Delhi', 'New Delhi', '110001', 'guest'),
('Sita Sharma', 'sita.sharma@example.com', '+91-9923456781', 'India', 'Uttar Pradesh', 'Lucknow', '226001', 'registered'),
('Ravi Patel', 'ravi.patel@example.com', '+91-9876567890', 'India', 'Gujarat', 'Ahmedabad', '380001', 'registered'),
('Neha Gupta', 'neha.gupta@example.com', '+91-9112345678', 'India', 'West Bengal', 'Kolkata', '700001', 'guest'),
('Vikram Singh', 'vikram.singh@example.com', '+91-9898989898', 'India', 'Rajasthan', 'Jaipur', '302001', 'registered'),
('Priya Kumar', 'priya.kumar@example.com', '+91-9234567890', 'India', 'Tamil Nadu', 'Chennai', '600001', 'registered'),
('Rahul Mehta', 'rahul.mehta@example.com', '+91-9123456765', 'India', 'Madhya Pradesh', 'Bhopal', '462001', 'guest'),
('Aishwarya Rai', 'aishwarya.rai@example.com', '+91-9876543231', 'India', 'Punjab', 'Amritsar', '143001', 'registered');

INSERT INTO complaints (user_id, title, description, category, department, country, state, city, zip_code, status, submission_date, last_updated, anonymous) VALUES 
(1, 'Noise Complaint', 'Loud music from neighbors at night.', 'Noise', 'Community Services', 'USA', 'California', 'Los Angeles', '90001', 'submitted', CURDATE(), CURDATE(), FALSE),
(2, 'Road Damage', 'Potholes on main street causing accidents.', 'Infrastructure', 'Public Works', 'USA', 'Texas', 'Houston', '77001', 'in_review', CURDATE(), CURDATE(), FALSE),
(3, 'Water Supply Issue', 'Irregular water supply in the area.', 'Utilities', 'Water Department', 'USA', 'New York', 'New York City', '10001', 'submitted', CURDATE(), CURDATE(), TRUE),
(4, 'Trash Collection', 'Garbage not collected for two weeks.', 'Waste Management', 'Public Services', 'USA', 'Florida', 'Miami', '33101', 'resolved', CURDATE(), CURDATE(), FALSE),
(5, 'Street Lighting', 'Street lights are not functioning properly.', 'Public Safety', 'City Planning', 'USA', 'Illinois', 'Chicago', '60601', 'closed', CURDATE(), CURDATE(), TRUE),
(6, 'Public Transport Delay', 'Buses are frequently delayed.', 'Transport', 'Transportation Services', 'USA', 'Washington', 'Seattle', '98101', 'submitted', CURDATE(), CURDATE(), FALSE),
(7, 'Parking Problem', 'Insufficient parking space in the area.', 'Parking', 'City Planning', 'USA', 'Arizona', 'Phoenix', '85001', 'in_review', CURDATE(), CURDATE(), FALSE),
(8, 'Internet Service', 'Slow internet service in the neighborhood.', 'Utilities', 'Telecom', 'USA', 'Ohio', 'Cleveland', '44101', 'submitted', CURDATE(), CURDATE(), TRUE),
(9, 'Fire Safety', 'Need more fire safety measures in buildings.', 'Safety', 'Fire Department', 'USA', 'Nevada', 'Las Vegas', '89101', 'resolved', CURDATE(), CURDATE(), FALSE),
(10, 'Flooding Issues', 'Frequent flooding during rain in the area.', 'Disaster Management', 'Emergency Services', 'USA', 'New Jersey', 'Newark', '07101', 'closed', CURDATE(), CURDATE(), TRUE);


INSERT INTO attachments (complaint_id, type, file_name, file_url) VALUES 
(1, 'image', 'noise_complaint.jpg', 'https://example.com/attachments/noise_complaint.jpg'),
(2, 'document', 'road_damage_report.pdf', 'https://example.com/attachments/road_damage_report.pdf'),
(3, 'image', 'water_supply_issue.jpg', 'https://example.com/attachments/water_supply_issue.jpg'),
(4, 'document', 'trash_collection_issue.pdf', 'https://example.com/attachments/trash_collection_issue.pdf'),
(5, 'image', 'street_lighting_issue.jpg', 'https://example.com/attachments/street_lighting_issue.jpg'),
(6, 'video', 'public_transport_delay.mp4', 'https://example.com/attachments/public_transport_delay.mp4'),
(7, 'document', 'parking_problem_report.pdf', 'https://example.com/attachments/parking_problem_report.pdf'),
(8, 'image', 'internet_service_issue.jpg', 'https://example.com/attachments/internet_service_issue.jpg'),
(9, 'document', 'fire_safety_report.pdf', 'https://example.com/attachments/fire_safety_report.pdf'),
(10, 'video', 'flooding_issues.mp4', 'https://example.com/attachments/flooding_issues.mp4');




