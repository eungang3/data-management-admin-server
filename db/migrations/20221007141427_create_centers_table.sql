-- migrate:up
CREATE TABLE centers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    region_id INT,
    cnterNm VARCHAR(200) NOT NULL,
    cnterSe VARCHAR(200) NOT NULL,
    doctrCo VARCHAR(200) NOT NULL,
    nurseCo VARCHAR(200) NOT NULL,
    scrcsCo VARCHAR(200) NOT NULL,
    rprsntvNm VARCHAR(200) NOT NULL,
    operPhoneNumber VARCHAR(200) NOT NULL,
    lnmadr VARCHAR(200) NOT NULL,
    FOREIGN KEY (region_id) REFERENCES regions(id)
);

-- migrate:down
DROP TABLE centers;
