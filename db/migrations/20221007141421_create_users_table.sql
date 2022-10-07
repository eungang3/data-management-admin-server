-- migrate:up
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    account VARCHAR(200) NOT NULL,
    password VARCHAR(255) NULL,
    phone_number VARCHAR(200) NOT NULL, 
    region_id INT,
    role VARCHAR(200),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE(account),
    FOREIGN KEY (region_id) REFERENCES regions(id)
);

-- migrate:down
DROP TABLE users;
