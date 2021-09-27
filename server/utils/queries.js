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
        color: [req.query.black, req.query.white],
      }
    : {};
};

export const Gender = (req) => {
  return req.query.men || req.query.women || req.query.kid
    ? {
        category: [req.query.men, req.query.women, req.query.kid],
      }
    : {};
};

export const MultipleQueries = (req) => {
  return req.query.black ||
    req.query.white ||
    req.query.men ||
    req.query.women ||
    req.query.kid
    ? {
        $and: [
          {
            $or: [
              { color: [req.query.black, req.query.white] },
              { category: [req.query.men, req.query.women, req.query.kid] },
            ],
          },
        ],
      }
    : {};
};

export const Price = (req) => {
  return req.query.lowPrice || req.query.highPrice
    ? {
        price: {
          $gte: +req.query.lowPrice,
          $lte: +req.query.highPrice,
        },
      }
    : {};
};
