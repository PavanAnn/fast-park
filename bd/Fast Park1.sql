CREATE TABLE entrance (
    id VARCHAR2(36) CONSTRAINT pk_entrance_id PRIMARY KEY,
    license_plate VARCHAR2(7),
    entrance_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP NULL,
    entrance_type VARCHAR2(10)
);

CREATE TABLE payment (
    id VARCHAR2(36) CONSTRAINT pk_payment_id PRIMARY KEY,
    entrance_id VARCHAR2(36),
    payment_type VARCHAR2(10),
    payment_value FLOAT,
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(entrance_id) REFERENCES entrance(id)
);

CREATE TABLE operator (
    id VARCHAR2(8) CONSTRAINT pk_operator_id PRIMARY KEY,
    password varchar2(16)
);

select * from entrance