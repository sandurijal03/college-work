// helper function
let len = function (obj) {
  let length = 0;
  for (let i in obj) {
    length++;
  }
  return length;
};

// pearson coorelation
let pearsonCorrelation = function (dataset, p1, p2) {
  let existp1p2 = {};
  for (let item in dataset[p1]) {
    if (item in dataset[p2]) {
      existp1p2[item] = 1;
    }
  }
  let num_existence = len(existp1p2);
  if (num_existence == 0) {
    return 0;
  }

  let p1_sum = 0,
    p2_sum = 0,
    p1_sq_sum = 0,
    p2_sq_sum = 0,
    prod_p1p2 = 0;

  for (let item in existp1p2) {
    p1_sum += dataset[p1][item];
    p2_sum += dataset[p2][item];
    p1_sq_sum += Math.pow(dataset[p1][item], 2);
    p2_sq_sum += Math.pow(dataset[p2][item], 2);
    prod_p1p2 += dataset[p1][item] * dataset[p2][item];
  }

  let numerator = prod_p1p2 - (p1_sum * p2_sum) / num_existence;
  let st1 = p1_sq_sum - Math.pow(p1_sum, 2) / num_existence;
  let st2 = p2_sq_sum - Math.pow(p2_sum, 2) / num_existence;
  let denominator = Math.sqrt(st1 * st2);

  if (denominator == 0) {
    return 0;
  } else {
    let val = numerator / denominator;
    return val;
  }
};

// recommendation Engine
let recommendationEngine = function (dataset, person, distance) {
  let totals = {
    setDefault: function (props, value) {
      if (!this[props]) {
        this[props] = 0;
      }
      this[props] += value;
    },
  };

  let simsum = {
    setDefault: function (props, value) {
      if (!this[props]) {
        this[props] = 0;
      }
      this[props] += value;
    },
  };

  let rankList = [];
  for (let other in dataset) {
    if (other === person) continue;

    let similar = distance(dataset, person, other);
    if (similar <= 0) continue;

    for (let item in dataset[other]) {
      if (!(item in dataset[person]) || dataset[person][item] == 0) {
        totals.setDefault(item, dataset[other][item] * similar);
        simsum.setDefault(item, similar);
      }
    }
  }

  for (let item in totals) {
    if (typeof totals[item] != 'function') {
      let val = totals[item] * simsum[item];
      rankList.push({ val, items: item });
    }
  }

  rankList.sort(function (a, b) {
    return b.val < a.val ? -1 : b.val > a.val ? 1 : b.val >= a.val ? 0 : NaN;
  });

  let recommend = [];
  for (let i in rankList) {
    recommend.push(rankList[i].items);
  }
  return [rankList, recommend];
};

module.exports = {
  recommendationEngine,
  pearsonCorrelation,
};
