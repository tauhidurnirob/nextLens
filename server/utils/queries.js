export const Category = (req) => {
  req.query.category
    ? {
        category: req.query.category,
      }
    : {};
};

export const Keyword = (req) => {
  req.query.keyword
    ? {
        title: { $regex: req.query.keyword, $options: "i" },
      }
    : {};
};

export const Color = (req) => {
  return req.query.black || req.query.white
    ? {
        color: req.query.black || req.query.white,
      }
    : {};
};

export const ColorCon = (req) => {
  req.query.black === "black" && req.query.white === "white"
    ? { color: { $gte: "black", $lte: "white" } }
    : {};
};
