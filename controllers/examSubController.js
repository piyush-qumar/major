const sub19 = require("./../models/e2019model");
const sub20 = require("./../models/e2020model");
const User = require("./../models/userModel");
const catchAsync = require("./..//utils///catchAsync");
const AppError = require("./..//utils///AppError");

exports.addSubject = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.body.year == 2019) {
    filter = { year: 2019 };
    const newSubject = await sub19.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newSubject },
    });
  } else {
    filter = { year: 2020 };
    const newSubject = await sub20.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newSubject },
    });
  }
});
exports.getAllSubjects = catchAsync(async (req, res) => {
  const s19 = await sub19.find();
  const s20 = await sub20.find();
  res.status(200).json({
    status: "success",
    results19: s19.length,
    results20: s20.length,
    data: {
      s19,
      s20,
    },
  });
});
exports.get2019Subjects = catchAsync(async (req, res) => {
  const s19 = await sub19.find();
  res.status(200).json({
    status: "success",
    results: s19.length,
    data: {
      s19,
    },
  });
});
exports.get2020Subjects = catchAsync(async (req, res) => {
  const s20 = await sub20.find();
  res.status(200).json({
    status: "success",
    results: s20.length,
    data: {
      s20,
    },
  });
});

exports.getrandomstring = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  // const s19 = await sub19.find();
  // const s20 = await sub20.find();
  var pos1 = ["Galleria", "Atrium", "Core", "Octagon", "LHC"];
  var pos2 = ["floor 1", "floor 2", "floor 3", "floor 4", "floor 5"];
  var pos3 = [
    "room 1",
    "room 2",
    "room 3",
    "room 4",
    "room 5",
    "room 6",
    "room 7",
    "room 8",
    "room 9",
    "room 10",
  ];
  var seat = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  var pos1index = Math.floor(Math.random() * pos1.length);
  var pos2index = Math.floor(Math.random() * pos2.length);
  var pos3index = Math.floor(Math.random() * pos3.length);
  var seatindex = Math.floor(Math.random() * seat.length);
  var pos1value = pos1[pos1index];
  var pos2value = pos2[pos2index];
  var pos3value = pos3[pos3index];
  var seatvalue = seat[seatindex];
  var randomstring =
    pos1value + " " + pos2value + " " + pos3value + " " + seatvalue;
  user.randomstring = randomstring;
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    randomstring,
  });
});
exports.createSubject = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
exports.updateSubject = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
exports.deleteSubject = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.body.year == 2019) {
    filter = { year: 2019 };
    const newSubject = await sub19.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: newSubject,
    });
  } else {
    filter = { year: 2020 };
    const newSubject = await sub20.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: newSubject,
    });
  }
});
// exports.deleteSubject = (req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"This route is not yet defined"
//     })
// }
