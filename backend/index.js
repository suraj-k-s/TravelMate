const express = require("express");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("https");
const port = 4000;

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

//use express static folder
app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_travelmate",
  port: 3306,
});

//Check Database Connection

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("Server is Running");
});

//Admin Booking View

app.get("/adminbookinglist", (req, res) => {
  let qry = `SELECT booking_id,user_name,packager_name,bus_name,package_name,booking_date,booking_tripdate,booking_status FROM tbl_user,tbl_packager,tbl_package,tbl_busreg,tbl_booking WHERE tbl_booking.user_id=tbl_user.user_id AND tbl_booking.package_id=tbl_package.package_id and tbl_package.packager_id=tbl_packager.packager_id AND tbl_booking.bus_id=tbl_busreg.bus_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Booking View By Id

app.get("/booking/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_booking where booking_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin Packager View

app.get("/adminpackagerlist", (req, res) => {
  let qry = `SELECT * from tbl_packager,tbl_location WHERE tbl_packager.location_id=tbl_location.location_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/adminpackagerlist/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_packager where packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Admin Packager View By Id Details

app.get("/packagerinfo/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_packager,tbl_location,tbl_district WHERE tbl_packager.location_id=tbl_location.location_id AND tbl_location.district_id=tbl_district.district_id AND packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin Packager View By Id Package List

app.get("/packagerpackagelist/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT package_id,package_name,package_noofdays,package_rate,package_description from tbl_package where packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Package View

app.get("/package", (req, res) => {
  let qry = `select * from tbl_package`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Package View By Id

app.get("/package/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_package where package_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin User View

app.get("/adminuserlist", (req, res) => {
  let qry = `SELECT user_id,user_name,user_contact,user_email,user_profession FROM tbl_user`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/adminuserlist/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_user where user_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//User View By Id

app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_user where user_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin Bookpayment View

app.get("/admintransactionlist", (req, res) => {
  let qry = `SELECT bookpayment_id,user_name,packager_name,bookpayment_date,bookpayment_amount,bookpayment_status FROM tbl_user,tbl_packager,tbl_package,tbl_booking,tbl_bookpayment WHERE tbl_bookpayment.booking_id=tbl_booking.booking_id AND tbl_booking.user_id=tbl_user.user_id AND tbl_booking.package_id=tbl_package.package_id AND tbl_package.packager_id=tbl_packager.packager_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Bookpayment View By Id

app.get("/bookpayment/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_bookpayment where bookpayment_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin Packager Approval View

app.get("/adminpackagerapprovallist", (req, res) => {
  let qry = `SELECT packager_id,packager_logo,packager_name,location_name,packager_contact,packager_email,packager_doj FROM tbl_packager,tbl_location WHERE tbl_packager.location_id=tbl_location.location_id AND packager_status="Pending"`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/adminpackagerapprovallist/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_packager where packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

app.put("/adminpackagerapprovallist/:id", (req, res) => {
  let id = req.params.id;
  let qry = `UPDATE tbl_packager SET packager_status="Active" WHERE packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Admin Complaint View

app.get("/admincomplaintlist", (req, res) => {
  let qry = `SELECT complaint_id,user_name,packager_name,complaint_date,complaint_replydate,complaint_status FROM tbl_user,tbl_packager,tbl_complaint WHERE tbl_complaint.user_id=tbl_user.user_id AND tbl_complaint.packager_id=tbl_packager.packager_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Complaint View By Id Info

app.get("/admincomplaintinfo/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT user_name,packager_name,complaint_date,complaint_status,complaint_content,complaint_reply FROM tbl_user,tbl_packager,tbl_complaint WHERE tbl_complaint.user_id=tbl_user.user_id AND tbl_complaint.packager_id=tbl_packager.packager_id AND complaint_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Complaint View By Id Details
app.get("/admincomplaintdetails/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT complaint_content,complaint_reply FROM tbl_complaint WHERE complaint_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Feedback View

app.get("/adminfeedbacklist", (req, res) => {
  let qry = `SELECT feedback_id,user_name,packager_name,feedback_date,feedback_content FROM tbl_user,tbl_packager,tbl_feedback WHERE tbl_feedback.user_id=tbl_user.user_id AND tbl_feedback.packager_id=tbl_packager.packager_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Feedback View By Id Info

app.get("/adminfeedbackinfo/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT user_name,packager_name,feedback_date,feedback_content FROM tbl_user,tbl_packager,tbl_feedback WHERE tbl_feedback.user_id=tbl_user.user_id AND feedback_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Feedback View By Id Details

app.get("/adminfeedbackdetails2/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT feedback_content FROM tbl_feedback WHERE feedback_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin Rating View

app.get("/rating", (req, res) => {
  let qry = `SELECT rating_id,user_name,packager_name,rating_date,rating FROM tbl_user,tbl_packager,tbl_rating WHERE tbl_rating.user_id=tbl_user.user_id AND tbl_rating.packager_id=tbl_packager.packager_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Rating View By Id

app.get("/rating/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_rating where rating_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Admin District View

app.post("/district", (req, res) => {
  let qry = `select * from tbl_district where district_name='${req.body.district_name}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Name Already Exist",
      });
    } else {
      let qry3 = `insert into tbl_district(district_name)values('${req.body.district_name}')`;
      db.query(qry3, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Saved",
          });
        }
      });
    }
  });
});
app.get("/district", (req, res) => {
  let qry = `select * from tbl_district`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retreived",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/district/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_district where district_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Admin Location View

app.post("/location", (req, res) => {
  let qry = `select * from tbl_location where location_name='${req.body.location_name}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Name Already Exist",
      });
    } else {
      let qry2 = `select * from tbl_location where location_pincode='${req.body.location_pincode}'`;
      db.query(qry2, (err, result) => {
        if (err) {
          console.log("Error");
        } else if (result.length > 0) {
          res.send({
            message: "Pincode Already Exist",
          });
        } else {
          let qry3 = `insert into tbl_location(district_id,location_name,location_pincode)values('${req.body.district_id}','${req.body.location_name}','${req.body.location_pincode}')`;
          console.log(req);
          db.query(qry3, (err, result) => {
            if (err) {
              console.log("Error");
            } else {
              res.send({
                message: "Data Saved",
              });
            }
          });
        }
      });
    }
  });
});

app.get("/location", (req, res) => {
  let qry = `SELECT location_id,location_name,district_name,location_pincode FROM tbl_location,tbl_district WHERE tbl_location.district_id=tbl_district.district_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retreived",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.get("/location/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_location where district_id=${id}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retreived",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/location/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_location where location_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Admin Busmodel View

app.post("/busmodel", (req, res) => {
  let qry = `select * from tbl_busmodel where busmodel_name='${req.body.busmodel_name}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Name Already Exist",
      });
    } else {
      let qry3 = `insert into tbl_busmodel(busmodel_name)values('${req.body.busmodel_name}')`;
      db.query(qry3, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Saved",
          });
        }
      });
    }
  });
});
app.get("/busmodel", (req, res) => {
  let qry = `select * from tbl_busmodel`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retreived",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/busmodel/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_busmodel where busmodel_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Busmodel View By Id

app.get("/busmodel/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_busmodel where busmodel_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Bus View

app.get("/bus", (req, res) => {
  let qry = `select * from tbl_busreg`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Bus View By Id

app.get("/bus/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_busreg where bus_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//PACKAGER

//Packager Profile

app.get("/packagerprofile/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_packager p INNER JOIN tbl_location l INNER JOIN tbl_district d ON p.district_id=d.district_id AND p.location_id=l.location_id WHERE p.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

app.put("/packagerprofile", (req, res) => {
  let qry = `UPDATE tbl_packager SET packager_name='${req.body.packager_name}',packager_contact='${req.body.packager_contact}',packager_email='${req.body.packager_email}',packager_instagram='${req.body.packager_instagram}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Packager Package View

app.get("/packagerpackage/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_package WHERE packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/packagerpackage/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_package where package_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

app.post("/packagerpackage", (req, res) => {
  let qry = `select * from tbl_package where package_name='${req.body.package_name}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Name Already Exist",
      });
    } else {
      let qry = `insert into tbl_package(package_name,packager_id,package_noofdays,package_rate,package_description)values('${req.body.package_name}','${req.body.packager_id}','${req.body.package_noofdays}','${req.body.package_rate}','${req.body.package_description}')`;
      console.log(req);
      db.query(qry, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Saved",
          });
        }
      });
    }
  });
});

app.put("/packagerpackage/:id", (req, res) => {
  let id = req.params.id;
  let qry = `UPDATE tbl_package SET package_name='${req.body.package_name}',package_noofdays='${req.body.package_noofdays}',package_rate='${req.body.package_rate}',package_description='${req.body.package_description}' where package_id='${id}'`;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Packager Package View Details

app.get("/packagerpackageview/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_package WHERE package_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Packager Bus View

app.get("/packagerbus/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_busreg,tbl_busmodel WHERE tbl_busreg.busmodel_id=tbl_busmodel.busmodel_id AND tbl_busreg.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.delete("/packagerbus/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_busreg where bus_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

app.post("/packagerbus", upload.single("bus_image"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  let qry = `insert into tbl_busreg(bus_name,packager_id,bus_capacity,busmodel_id,bus_features,bus_year,bus_image)
    values('${req.body.bus_name}','${req.body.packager_id}','${req.body.bus_capacity}',
    '${req.body.busmodel_id}','${req.body.bus_features}','${req.body.bus_year}','${imgsrc}')`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.put("/packagerbus/:id", (req, res) => {
  let id = req.params.id;
  let qry = `UPDATE tbl_busreg SET bus_name='${req.body.bus_name}',busmodel_id='${req.body.busmodel_id}',bus_features='${req.body.bus_features}' where bus_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Packager Bus View Details

app.get("/packagerbusview/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_busreg b inner join tbl_busmodel bm on bm.busmodel_id=b.busmodel_id WHERE  bus_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    }
  });
});

//Packager Package Booking

//Packager Booking Report Table

app.get("/packagerreportbooking/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_booking b INNER JOIN tbl_package p INNER JOIN tbl_busreg bu INNER JOIN tbl_user u on b.package_id=p.package_id AND b.bus_id=bu.bus_id AND b.user_id=u.user_id where p.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Packager Transaction Report Table

app.get("/packagerreporttransaction/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_booking b INNER JOIN tbl_package p INNER JOIN tbl_user u INNER JOIN tbl_bookpayment bp on b.package_id=p.package_id AND b.booking_id=bp.booking_id AND b.user_id=u.user_id where p.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Packager Notification Complaint Table

app.get("/packagernotificationcomplaint/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_complaint c INNER JOIN tbl_user u INNER JOIN tbl_package p on c.package_id=p.package_id AND c.user_id=u.user_id where c.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.get("/packagernotificationcomplaintview/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_complaint c INNER JOIN tbl_user u INNER JOIN tbl_package p on c.package_id=p.package_id AND c.user_id=u.user_id where c.complaint_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.put("/complaintreplyupdate/:id", (req, res) => {
  let id = req.params.id;
  let qry = `UPDATE tbl_complaint SET complaint_reply='${req.body.complaint_reply}',complaint_status='${req.body.complaint_status}',complaint_replydate=curdate() WHERE complaint_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Packager Notification Feedback Table

app.get("/packagernotificationfeedback/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_feedback f INNER JOIN tbl_user u INNER JOIN tbl_package p on f.package_id=p.package_id AND f.user_id=u.user_id where f.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.get("/packagernotificationfeedbackview/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_feedback f INNER JOIN tbl_user u INNER JOIN tbl_package p on f.package_id=p.package_id AND f.user_id=u.user_id where f.feedback_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.get("/packagernotificationfeedback/", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_feedback f INNER JOIN tbl_user u INNER JOIN tbl_package p on f.package_id=p.package_id AND f.user_id=u.user_id`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//Packager Notification Rating Table

app.get("/packagernotificationrating/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_rating r INNER JOIN tbl_user u INNER JOIN tbl_package p on r.user_id=u.user_id AND r.package_id=p.package_id where r.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//GUEST

//User Registration
app.post("/userregistration", (req, res) => {
  let qry = `select * from tbl_user where user_email='${req.body.user_email}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Email Already Exist",
      });
    } else {
      let qry2 = `select * from tbl_user where user_contact='${req.body.user_contact}'`;
      db.query(qry2, (err, result) => {
        if (err) {
          console.log("Error");
        } else if (result.length > 0) {
          res.send({
            message: "Number Already Exist",
          });
        } else {
          let qry = `insert into tbl_user(user_name,user_email,user_contact,user_password,user_profession)values('${req.body.user_name}','${req.body.user_email}','${req.body.user_contact}','${req.body.user_password}','${req.body.user_profession}')`;
          console.log(req);
          db.query(qry, (err, result) => {
            if (err) {
              console.log("Error");
            } else {
              res.send({
                message: "Data Saved",
              });
            }
          });
        }
      });
    }
  });
});

//Packager Registration
app.post("/packagerregistration", (req, res) => {
  let qry = `select * from tbl_packager where packager_email='${req.body.packager_email}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Email Already Exist",
      });
    } else {
      let qry2 = `select * from tbl_packager where packager_contact='${req.body.packager_contact}'`;
      db.query(qry2, (err, result) => {
        if (err) {
          console.log("Error");
        } else if (result.length > 0) {
          res.send({
            message: "Number Already Exist",
          });
        } else {
          let qry = `insert into tbl_packager(packager_name,district_id,location_id,packager_contact,packager_email,packager_instagram,packager_password,packager_noofbus,packager_doj)values('${req.body.packager_name}','${req.body.district_id}','${req.body.location_id}','${req.body.packager_contact}','${req.body.packager_email}','${req.body.packager_instagram}','${req.body.packager_password}','${req.body.packager_noofbus}',curdate())`;
          console.log(req);
          db.query(qry, (err, result) => {
            if (err) {
              console.log("Error");
            } else {
              res.send({
                message: "Data Saved",
              });
            }
          });
        }
      });
    }
  });
});
//Login

app.post("/login", (req, res) => {
  let id = req.params.id;
  let qry1 = `SELECT user_id from tbl_user WHERE user_email='${req.body.email}' AND user_password='${req.body.password}'`;
  let qry2 = `SELECT packager_id from tbl_packager WHERE packager_email='${req.body.email}' AND packager_password='${req.body.password}'`;
  let qry3 = `SELECT admin_id from tbl_admin WHERE admin_email='${req.body.email}' AND admin_password='${req.body.password}'`;
  db.query(qry1, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
        type: "user",
      });
    }
  });
  db.query(qry2, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
        type: "packager",
      });
    }
  });
  db.query(qry3, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
        type: "admin",
      });
    } else {
      res.end();
    }
  });
});

//Login Check

app.get("/logincheck/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_packager where packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//USER

//User Search

app.post("/usersearch", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT DISTINCT(r.package_id) FROM tbl_rating r INNER JOIN tbl_package p on p.package_id=r.package_id WHERE p.package_name='${req.body.x}'`;
  
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      let qry2;
      let qry3;
      let arr = [];
      let arr1 = [];
      let i = 0;
      result.map((dat) => getAvg(dat.package_id));

      function getAvg(avg) {
        qry2 = `SELECT AVG(rating) as avgp from tbl_rating where package_id=${avg}`;
        
        db.query(qry2, (err, result1) => {
          qry3 = `SELECT * from tbl_package p INNER JOIN tbl_packager pr INNER JOIN tbl_location l INNER JOIN tbl_district d ON p.packager_id=pr.packager_id AND pr.location_id=l.location_id AND l.district_id=d.district_id where package_id=${avg}`;
          db.query(qry3, (err, result3) => {
            arr1.push(result1);
            arr.push(result3);
            i++;
            if (i === result.length) {
              res.send({
                message: "Data Retrieved",
                data: arr1,
                data1: arr,
              });
            }
          });
        });
      }
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//User Package Details

app.post("/userpackagedetails", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_package p INNER JOIN tbl_packager pr ON p.packager_id=pr.packager_id INNER JOIN tbl_location l ON pr.location_id=l.location_id INNER JOIN tbl_district d on pr.district_id=d.district_id WHERE p.package_id='${req.body.x}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.post("/userpackagedetailsplaces/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * from tbl_tplaces WHERE tplace_name='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//User Booking

app.post("/userbookingpackager/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_package WHERE package_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.get("/userbookingbus/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT DISTINCT(bus_name),bus_id FROM tbl_busreg b INNER JOIN tbl_package p INNER JOIN tbl_packager pr ON p.packager_id=pr.packager_id AND b.packager_id=pr.packager_id WHERE p.packager_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.post("/userbooking", (req, res) => {
  var x = req.body.booking_tripdate;
  var y = req.body.package_noofdays;
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  var date = new Date(x);
  var calDate = formatDate(date.addDays(parseInt(y)));

  let qry = `insert into tbl_booking(booking_tripenddate,booking_tripdate,booking_triptime,booking_startpoint,booking_noofpeople,bus_id,user_id,package_id,booking_date)values('${calDate}','${req.body.booking_tripdate}','${req.body.booking_triptime}','${req.body.booking_startpoint}','${req.body.booking_noofpeople}','${req.body.bus_id}','${req.body.user_id}','${req.body.package_id}',curdate())`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      let qry2 = `select max(booking_id) as id from tbl_booking`;
      db.query(qry2, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Retreived",
            data: result,
          });
        }
      });
    }
  });
});

// User Payment

app.get("/userpayment/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT *, (p.package_rate*b.booking_noofpeople)/10 as amount FROM tbl_booking b INNER JOIN tbl_user u INNER JOIN tbl_package p ON b.user_id=u.user_id AND b.package_id=p.package_id WHERE b.booking_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

app.post("/userpayment", (req, res) => {
  let qry = `insert into tbl_bookpayment(booking_id,bookpayment_amount,bookpayment_date)values('${req.body.booking_id}','${req.body.bookpayment_amount}',curdate())`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//User Booking Success

app.get("/userbookingsuccess/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_booking b INNER JOIN tbl_package p ON b.package_id=p.package_id WHERE b.booking_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//User My Bookings
app.get("/usermybookings/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_booking b INNER JOIN tbl_bookpayment bp INNER JOIN tbl_package p INNER JOIN tbl_packager pr ON b.booking_id=bp.booking_id AND b.package_id=p.package_id AND p.packager_id=pr.packager_id WHERE b.user_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//User My Bookings View
app.get("/userbookingview/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_booking b INNER JOIN tbl_user u INNER JOIN tbl_packager pr INNER JOIN tbl_package p INNER JOIN tbl_bookpayment bp ON b.user_id=u.user_id AND b.package_id=p.package_id AND p.packager_id=pr.packager_id AND b.booking_id=bp.booking_id WHERE b.booking_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        data: result,
      });
    } else {
      res.send({
        message: "No Data Found",
        data: result,
      });
    }
  });
});

//User Feedback,Rating and Complaint

app.post("/userfeedbackrating", (req, res) => {
  let qry = `insert into tbl_feedback(packager_id,package_id,user_id,feedback_content,feedback_date)values('${req.body.packager_id}','${req.body.package_id}','${req.body.user_id}','${req.body.feedback_content}',curdate())`;
  let qry2 = `insert into tbl_rating(packager_id,package_id,user_id,rating,rating_date,booking_id)values('${req.body.packager_id}','${req.body.package_id}','${req.body.user_id}','${req.body.rating}',curdate(),'${req.body.booking_id}')`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      db.query(qry2, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Saved",
          });
        }
      });
    }
  });
});

app.post("/usercomplaint", (req, res) => {
  let qry = `insert into tbl_complaint(packager_id,package_id,user_id,complaint_content,complaint_date,complaint_reply,complaint_replydate,booking_id)values('${req.body.packager_id}','${req.body.package_id}','${req.body.user_id}','${req.body.complaint_content}',curdate(),'','','${req.body.booking_id}')`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});
