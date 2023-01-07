const getListStudentIds = (args) => {
  if (!Array.isArray(args)) {
    return [];
  }
  return args.map((arg) => {
    return arg.id;
  });
};

export default getListStudentIds;
