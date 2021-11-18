CREATE TABLE entrance (
    id VARCHAR2(36) CONSTRAINT pk_entrance_id PRIMARY KEY,
    license_plate VARCHAR2(7),
    entrance_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    exit_time TIMESTAMP NULL,
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
insert into entrance (id, license_plate, exit_time, entrance_type) values ('idteste', 'ABCD123', null, 'teste');
insert into entrance (id, license_plate, exit_time, entrance_type) values ('idteste2', 'EFGH123', null, 'teste2');
describe entrance

CREATE TABLE payment (
    id VARCHAR2(36) CONSTRAINT pk_payment_id PRIMARY KEY,
    entrance_id VARCHAR2(36),
    payment_type VARCHAR2(10),
    payment_value FLOAT,
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(entrance_id) REFERENCES entrance(id)
);

select * from payment;
insert into payment (id, entrance_id, payment_type, payment_value) values('idpagamento', 'idteste', 'CARTAO', 20.99);

CREATE TABLE operator (
    id VARCHAR2(8) CONSTRAINT pk_operator_id PRIMARY KEY,
    password varchar2(16)
);
select * from operator;
insert into operator values('operador', 'senha123');