CREATE TABLE entrance (
    id VARCHAR2(36) CONSTRAINT pk_entrance_id PRIMARY KEY,
    license_plate VARCHAR2(7),
    entrance_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP NULL,
    payment_value FLOAT,
    entrance_type VARCHAR2(10),
    pos number
);

create sequence SEQ_POS_ENTRANCE minvalue 1 maxvalue 1000000000 increment by 1;

create trigger "TRIG_POS_ENTRANCE" before insert on "ENTRANCE"
for each row
begin
select "SEQ_POS_ENTRANCE".nextval into:new.pos
from dual;
end;

SELECT * FROM entrance where entrance_time>'17/11/21 22:04:26,880000000';
insert into entrance (id, license_plate, exit_time, payment_value, entrance_type) values ('6c0a8d5b-5204-423e-858c-786b47d2eef0', 'ABCD123', null, 0, 'CCSP');
insert into entrance (id, license_plate, exit_time, payment_value, entrance_type) values ('ab6cdeb0-6865-4e87-8901-ab4aa93b2d6e', 'EFGH123', null, 0, 'CSSP');
describe entrance

CREATE TABLE payment (
    id VARCHAR2(36) CONSTRAINT pk_payment_id PRIMARY KEY,
    entrance_id VARCHAR2(36),
    payment_type VARCHAR2(10),
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_value FLOAT,
    FOREIGN KEY(entrance_id) REFERENCES entrance(id)
);

select * from payment;
insert into payment (id, entrance_id, payment_type, payment_value) values('2e2bd586-2e8d-4f59-87bf-e7f5ea530986', '6c0a8d5b-5204-423e-858c-786b47d2eef0', 'CC', 0);

CREATE TABLE operator (
    id VARCHAR2(8) CONSTRAINT pk_operator_id PRIMARY KEY,
    password varchar2(16)
);
select * from operator;
insert into operator values('operador', 'senha123');