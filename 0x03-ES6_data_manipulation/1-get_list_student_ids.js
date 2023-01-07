const getListStudentIds = (args) => {
  if (!Array.isArray(args)) {
    return [];
  }
  return args.filter((arg) => arg.id);
};

export default getListStudentIds;
