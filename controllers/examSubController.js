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
    results20:s20.length,
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

exports.get2019Subjects = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
exports.get2020Subjects = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.getSubject = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
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
