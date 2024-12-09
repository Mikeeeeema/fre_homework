//hw3
// 1, myReduce,
// 2, check the following doc, you should create tables on page,
//  since our course briefly discusses how to create web pages, you
//  can do some research on your own.

let arr = [1, 2, 3, 4, 5, 6];

//foreach
// arr.forEach((ele, i, arrself) => {
//   console.log(ele, i, arrself);
// });

// Array.prototype.myForEach = function (fn) {
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   }
// };

// arr.myForEach(function (e, i, a) {
//   console.log(e, i, a);
// });

//map
// let b = arr.map(function (e, i, a) {
//   return e * 2;
// });
// console.log(b);

// Array.prototype.myMap = function (fn) {
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(fn(this[i], i, this));
//   }
//   return res;
// };

// let b1 = arr.myMap(function (e, i, a) {
//   return e * 2;
// });

// console.log(b1);

// filter

// let c = arr.filter(function (e, i, a) {
//   return e <= 3;
// });
// console.log(c);

// Array.prototype.myFilter = function (fn) {
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i], i, this)) res.push(this[i]);
//   }
//   return res;
// };

// let c1 = arr.myFilter(function (e, i, a) {
//   return e <= 3;
// });

// console.log(c1);

//reduce
let s = arr.reduce(function (acc, e, i, a) {
  return acc - e;
});

console.log(s);

Array.prototype.myReduce = function (fn, acc) {
  if (this.length === 0 && acc === undefined) {
    throw new TypeError("Reduce of empty array with no initial value ");
  }
  let res = acc;
  let startIndex;

  if (acc === undefined) {
    res = this[0];
    startIndex = 1;
  } else {
    res = acc;
    startIndex = 0;
  }

  for (let i = startIndex; i < this.length; i++) {
    res = fn(res, this[i], i, this);
  }

  return res;
};

let s1 = arr.myReduce(function (acc, e, i, a) {
  return acc - e;
});
console.log(s1);

// interview question~~~~~~~~~~~~~~~
// const names = [
//   { userid: 2, name: "Velen" },
//   { userid: 56, name: "Illidan" },
//   { userid: 23, name: "Muradin" },
//   { userid: 12, name: "Sylvanas" },
//   { userid: 44, name: "Cenarius" },
//   { userid: 4, name: "Gul'Dan" },
// ];
// const roles = [
//   { userid: 2, role: "Mage" },
//   { userid: 4, role: "Worlock" },
//   { userid: 56, role: "Demon Hunter" },
//   { userid: 66, role: "Druid" },
//   { userid: 87, role: "Shaman" },
//   { userid: 12, role: "Hunter" },
// ];

// function solution(...args) {
//   const arr = args.reduce(function (acc, ele) {
//     return [...acc, ...ele];
//   }, []);

//   return arr;
// }
// let arr3 = solution(names, roles);
// console.log(arr3);

// const map = {};

// arr3.forEach(function (ele, i, a) {
//   map[ele.userid] = {
//     ...{ userid: null, role: null, name: null },
//     ...map[ele.userid],
//     ...ele,
//   };
// });

// console.log(map);

// function solution(...args) {
//   const arr = args.reduce(function(acc, cur) {
//     return [...acc, ...cur];
//   }, []);

// const map = {};
//   arr.forEach(function(ele, i) {
//     map[ele.userid] = {
//       ...{userid: null, name: null, role: null},
//       ...map[ele.userid],
//       ...ele,
//     }
//   });

//   console.log(Object.values(map));
// }
// solution(names, roles);

// [
//   { userid: 2, name: "Velen", role: "Mage" },
//   { userid: 44, name: "Cenarius", role: null },
//   { userid: 87, name: null, role: "Shaman" },
// ]

const data = [
  { region: "US", model: "A", sales: 150 },
  { region: "US", model: "B", sales: 120 },
  { region: "US", model: "C", sales: 350 },
  { region: "EU", model: "A", sales: 200 },
  { region: "EU", model: "B", sales: 100 },
  { region: "EU", model: "C", sales: 250 },
  { region: "CA", model: "A", sales: 200 },
  { region: "CA", model: "B", sales: 100 },
  { region: "CA", model: "C", sales: 230 },
  { region: "CA", model: "D", sales: 400 },
];

function addSum(data) {
  const region = [];
  data.forEach(function (ele, i, a) {
    if (region.indexOf(ele.region) == -1) region.push(ele.region);
  });

  // console.log(region);

  const sum = region.map(function (e, i, a) {
    return { region: e, model: "sum", sales: 0 };
  });
  // console.log(sum);

  for (let ele of sum) {
    ele.sales = data.reduce(function (acc, e, l, a) {
      if (ele.region === e.region) return (acc += e.sales);
      return acc;
    }, ele.sales);
  }

  // console.log(sum);

  const res = [...data, ...sum];
  res.sort(function (a, b) {
    // return a.region < b.region;
    if (a.region < b.region) return 1;
    if (a.region > b.region) return -1;
    if (a.region === b.region) {
      if (a.model === "sum") return -1;
      if (b.model === "sum") return -1;
      return a.model < b.model ? -1 : 1;
    }
  });

  return res;
}
let res = addSum(data);
// console.log(res);

const tableBody1 = document.getElementById("tbody1"); //document in lopwercase
// console.log(tableBody1);

res.forEach((ele) => {
  const row = document.createElement("tr");

  const regionCell = document.createElement("td");
  regionCell.textContent = ele.region;
  row.append(regionCell);

  const modelCell = document.createElement("td");
  modelCell.textContent = ele.model;
  row.append(modelCell);

  const salesCell = document.createElement("td");
  salesCell.textContent = ele.sales;
  row.append(salesCell);

  tableBody1.append(row);
});

//table2
const tableBody2 = document.getElementById("tbody2"); //document lopwercase
const regionFilter = document.getElementById("region-filter");
const modelFilter = document.getElementById("model-filter");

// console.log("22222222222");
// console.log(regionFilter);
// console.log(modelFilter);

const region = [];
const model = [];

data.forEach(function (e, i, a) {
  if (region.indexOf(e.region) === -1) region.push(e.region);
});

// console.log(region);

data.forEach((e, i, a) => {
  if (model.indexOf(e.model) === -1) model.push(e.model);
});

// console.log(model);

function filterData() {
  const selectedRegion = regionFilter.value;
  const selectedModel = modelFilter.value;
  // console.log(selectedRegion);
  // console.log(selectedModel);

  const filteredData = data.filter((e, i, a) => {
    if (selectedRegion === "all" && selectedModel === "all") {
      return true;
    } else if (selectedRegion !== "all" && selectedModel === "all") {
      return selectedRegion === e.region;
    } else if (selectedRegion === "all" && selectedModel !== "all") {
      return selectedModel === e.model;
    } else {
      return e.region === selectedRegion && e.model === selectedModel;
    }
  });

  renderTable(filteredData);
}

function renderTable(data) {
  tableBody2.innerHTML = "";
  data.forEach((ele) => {
    const row = document.createElement("tr");

    const regionCell = document.createElement("td");
    regionCell.textContent = ele.region;
    row.append(regionCell);

    const modelCell = document.createElement("td");
    modelCell.textContent = ele.model;
    row.append(modelCell);

    const salesCell = document.createElement("td");
    salesCell.textContent = ele.sales;
    row.append(salesCell);

    tableBody2.append(row);
  });
}

regionFilter.addEventListener("change", filterData);
modelFilter.addEventListener("change", filterData);

function populateFilters() {
  region.forEach((r) => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    regionFilter.append(option);
  });

  model.forEach((m) => {
    const option = document.createElement("option");
    option.value = m;
    option.textContent = m;
    modelFilter.append(option);
  });
}

populateFilters();
renderTable(data);
