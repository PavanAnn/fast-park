//const express = require('express')
const oracledb = require('oracledb');
oracledb.autoCommit = true;
//oracledb.initOracleClient({ libDir: "C:\\Users\\Cliente Preferencial\\Documents\\instantclient_19_6" });
//connection = await oracledb.getConnection({ user: "admin", password: "XXXX", connectionString: "XXX_high" });
var password = 'oracle123';
//https://blogs.oracle.com/opal/post/how-to-connect-to-oracle-autonomous-cloud-databases
//OPERATORS
exports.selectAllOperators = async() => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password, 
      connectString: "localhost:1521/xe"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM operator`);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }

  }
}

exports.selectOperatorById = async (req) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`SELECT * FROM operator where id=:id`, [req.query.id]);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
      } catch (err) {
        return console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }
  }
}

exports.createOperator = async (data) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`insert into operators values (:id, :password)`, [data.query.id, data.query.password]);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
      } catch (err) {
        return console.error(err.message);
      }
    }
    
    return result;
  }
}

//ENTRANCE REGISTERS

exports.selectAllActiveRegisters = async(req) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });

    console.log('connected to database');
    if (req.query.active) result = await connection.execute(`SELECT * FROM entrance where exit_time is null`);// where entrance_time>=:entrance_time`, [req.query.entrance_time]);
    else result = await connection.execute(`SELECT * FROM entrance`);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
    if (!result) return 'Response is undefined';
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }

  }
}

exports.insertRegister = async (req) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    result = await connection.execute(`insert into entrance (id, license_plate, exit_time,  entrance_type) values (:id, :license_plate, :exit_time, :entrance_type)`, [req.query.id, req.query.license_plate, req.query.exit_time, req.query.entrance_type]);

  } catch (err) {
    //send error message
    console.log(err.message);
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        return console.error(err.message);
      }
    }
    
    return result;
  }
}

exports.updateRegister = async (req) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`update entrance set exit_time=(:exit_time) where license_plate=(:license) and entrance_time=(:entrance_time);`, [req.query.exit_time, req.query.license, req.query.entrance_time]);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        return console.error(err.message);
      }
    }
    
    return result;
  }
}

//PAYMENTS
exports.selectPayments = async() => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM payment`);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }    
    if (!result) return 'Response is undefined';
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }

  }
}

exports.selectPaymentByEntranceId = async (req) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    
    result = await connection.execute(`SELECT * FROM payment where entrance_id=:entrance_id`, [req.query.entrance_id]);

  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        return console.error(err.message);
      }
    }    
    
    if (!result) return 'Response is undefined';
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }
  }
}

exports.insertPayment = async (req) => {
  console.log(req.query.id + " " + req.query.entrance_id + " " + req.query.payment_type + " " + req.query.payment_value)
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`insert into payment (id, entrance_id, payment_type, payment_value) values(:id, :entrance_id, :payment_type, :payment_value)`, [req.query.id, data.entrance_id, req.query.payment_type, req.query.payment_value]);
    console.log("Resultado do insert de payment: "+result)
  } catch (err) {
    //send error message
    return err.message;
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        return console.error(err.message);
      }
    }
    
    return result;
  }
}