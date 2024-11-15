class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const excludedFields = ["sort", "page", "limit", "fields"];

    const queryObj = { ...this.queryStr };
    if (queryObj.city) {
      const city = queryObj.city;
      this.query = this.query.find({
        "address.city": { $regex: city, $options: "i" },
      });
      excludedFields.push("city");
    }

    if (queryObj.name) {
      const name = queryObj.name;
      this.query = this.query.find({ name: { $regex: name, $options: "i" } });
      excludedFields.push("name");
    }

    if (queryObj.categories) {
      const categories = queryObj.categories.split(",");
      categories.forEach((category) => {
        this.query = this.query.find({
          categoriesList: { $regex: new RegExp(category, "i") },
        });
      });
      excludedFields.push("categories");
    }

    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  filterDishes() {
    const excludedFields = ["sort", "page", "limit", "fields"];

    const queryObj = { ...this.queryStr };
    if (queryObj.city) {
      const city = queryObj.city;
      this.query = this.query.find({
        "address.city": { $regex: city, $options: "i" },
      });
      excludedFields.push("city");
    }

    if (queryObj.name) {
      const name = queryObj.name;
      this.query = this.query.find({ name: { $regex: name, $options: "i" } });
      excludedFields.push("name");
    }

    if (queryObj.categories) {
      const categories = queryObj.categories.split(",");
      categories.forEach((category) => {
        this.query = this.query.find({
          categories: { $regex: new RegExp(category, "i") },
        });
      });
      excludedFields.push("categories");
    }

    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    }
    return this;
  }

  limit() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    // pagination
    const page = this.queryStr.page * 1 || 1;
    const limit = this.queryStr.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
