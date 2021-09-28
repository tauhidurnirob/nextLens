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

export const LenseType = (req) => {
  return req.query.frame ||
    req.query.basic ||
    req.query.standard ||
    req.query.premium ||
    req.query.blue
    ? {
        typeLense: [
          req.query.frame,
          req.query.basic,
          req.query.standard,
          req.query.premium,
          req.query.blue,
        ],
      }
    : {};
};

export const FrameStyle = (req) => {
  return req.query.halfFrame || req.query.fullFrame || req.query.rimless
    ? {
        frameStyle: [
          req.query.halfFrame,
          req.query.fullFrame,
          req.query.rimless,
        ],
      }
    : {};
};

export const FrameShape = (req) => {
  return req.query.round ||
    req.query.retroSquare ||
    req.query.clubMaster ||
    req.query.oval ||
    req.query.rectangle ||
    req.query.catEye
    ? {
        frameShape: [
          req.query.round,
          req.query.retroSquare,
          req.query.clubMaster,
          req.query.oval,
          req.query.rectangle,
          req.query.catEye,
        ],
      }
    : {};
};
