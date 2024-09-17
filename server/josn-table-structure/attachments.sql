CREATE TABLE attachments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT,
    type ENUM('image', 'video', 'audio', 'document'),
    file_name VARCHAR(255),
    file_url VARCHAR(255),
    FOREIGN KEY (complaint_id) REFERENCES complaints(id) ON DELETE CASCADE
);
