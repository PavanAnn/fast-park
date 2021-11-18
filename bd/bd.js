//const express = require('express')
const oracledb = require('oracledb');
var password = 'oracle123';

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

exports.selectOperatorById = async (id) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`SELECT * FROM operator where id=:id`, [id]);

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
    result = await connection.execute(`insert into operators values (:id, :password)`, [data.id, data.password]);

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

exports.selectAllActiveRegisters = async(entrance_time) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM entrance where entrance_time>='(:entrance_time)'`, [entrance_time]);

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

exports.insertRegister = async (data) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    result = await connection.execute(`insert into entrance (id, license_plate, entrance_type) values (:id, :license, :entrance_type)`, [data.id, data.license, data.entrance_type]);

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

exports.updateRegister = async (data) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`update entrance set exit_time=(:exit_time) where license_plate=(:license) and entrance_time=(:entrance_time);`, [data.exit_time, data.license, data.entrance_time]);

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
    if (result.rows.length == 0) {
      //query return zero employees
      return 'query send no rows';
    } else {
      //send all employees
      return result.rows;
    }

  }
}

exports.selectPaymentByEntranceId = async (entrance_id) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`SELECT * FROM payment where entrance_id=:entrance_id`, [entrance_id]);

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

exports.insertPayment = async (data) => {
  var result;
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: password,
      connectString: "localhost:1521/xe"
    });
    // run query to get employee with employee_id
    result = await connection.execute(`insert into payment (id, entrance_id, payment_type, payment_value) values(:id, :entrance_id, :payment_type, :payment_value)`, [data.id, data.entrance_id, data.payment_type, data.payment_value]);

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