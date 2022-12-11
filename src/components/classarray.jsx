export const myClasses = [
  {
    year: "Fall 2018",
    short: "CHS",
    lvl: 1440,
    desc: "Principles of Chemistry",
    grade: "A",
  },
  {
    year: "Fall 2018",
    short: "EGS",
    lvl: 1006,
    desc: "Introduction to the Engineering Profession",
    grade: "A",
  },
  {
    year: "Fall 2018",
    short: "ENC",
    lvl: 1102,
    desc: "Composition II",
    grade: "A",
  },
  {
    year: "Fall 2018",
    short: "MAC",
    lvl: 2312,
    desc: "Calculus with Analytical Geometry II",
    grade: "B+",
  },
  {
    year: "Fall 2018",
    short: "PSY",
    lvl: 2012,
    desc: "General Psychology",
    grade: "B",
  },
  {
    year: "Spring 2019",
    short: "COM",
    lvl: 1000,
    desc: "Introduction to Communication",
    grade: "A",
  },
  {
    year: "Spring 2019",
    short: "EGN",
    lvl: 1007,
    desc: "Engineering Concepts & Methods",
    grade: "A",
  },
  {
    year: "Spring 2019",
    short: "MAC",
    lvl: 2313,
    desc: "Calculus with Analytical Geometry",
    grade: "B",
  },
  {
    year: "Spring 2019",
    short: "PHY",
    lvl: 2048,
    desc: "General Physics using Calculus I",
    grade: "A",
  },
  {
    year: "Fall 2019",
    short: "COP",
    lvl: 3223,
    desc: "Intro to Programming with C",
    grade: "A",
  },
  {
    year: "Fall 2019",
    short: "MAP",
    lvl: 2302,
    desc: "Ordinary Differential Equations",
    grade: "A",
  },
  {
    year: "Fall 2019",
    short: "EGN",
    lvl: 3310,
    desc: "Engineering Analysis-Statics",
    grade: "A",
  },
  {
    year: "Fall 2019",
    short: "PHY",
    lvl: 2049,
    desc: "General Physics using Calculus II",
    grade: "B",
  },
  {
    year: "Spring 2020",
    short: "COP",
    lvl: 3330,
    desc: "Object Oriented Programming",
    grade: "A",
  },
  {
    year: "Spring 2020",
    short: "EGN",
    lvl: 3321,
    desc: "Engineering Analysis-Dynamics",
    grade: "B",
  },
  {
    year: "Spring 2020",
    short: "EGN",
    lvl: 3365,
    desc: "Structures & Properties of Materials",
    grade: "A",
  },
  {
    year: "Spring 2020",
    short: "EGN",
    lvl: 3373,
    desc: "Principles of Electrical Engineering",
    grade: "A",
  },
  {
    year: "Spring 2020",
    short: "STA",
    lvl: 3032,
    desc: "Probability and Statistics for Engineers",
    grade: "A",
  },
  {
    year: "Summer 2020",
    short: "THE",
    lvl: 2000,
    desc: "Theatre Survey",
    grade: "A",
  },
  {
    year: "Summer 2020",
    short: "COP",
    lvl: 3502,
    desc: "Computer Science 1",
    grade: "A",
  },
  {
    year: "Summer 2020",
    short: "EGN",
    lvl: 3343,
    desc: "Thermodynamics",
    grade: "A",
  },
  {
    year: "Fall 2020",
    short: "EGM",
    lvl: 3601,
    desc: "Solid Mechanics",
    grade: "A",
  },
  {
    year: "Fall 2020",
    short: "EML",
    lvl: 3034,
    desc: "Modeling Methods in Mechanical Engineering",
    grade: "A",
  },
  {
    year: "Fall 2020",
    short: "EML",
    lvl: 3303,
    desc: "Mechanical Engineering Measurements",
    grade: "A",
  },
  {
    year: "Fall 2020",
    short: "EML",
    lvl: 3701,
    desc: "Fluid Mechanics",
    grade: "A",
  },
  {
    year: "Spring 2021",
    short: "ANT",
    lvl: 2511,
    desc: "Anthropology",
    grade: "A",
  },
  {
    year: "Spring 2021",
    short: "EML",
    lvl: 3500,
    desc: "Design & Analysis of Machine Components I",
    grade: "A",
  },
  {
    year: "Spring 2021",
    short: "EML",
    lvl: 4142,
    desc: "Heat Transfer",
    grade: "A",
  },
  {
    year: "Spring 2021",
    short: "EML",
    lvl: 4225,
    desc: "Intro to Vibrations & Controls",
    grade: "A",
  },
  {
    year: "Spring 2021",
    short: "MAD",
    lvl: 2104,
    desc: "Foundations of Discrete Math",
    grade: "A",
  },
  {
    year: "Summer 2021",
    short: "CDA",
    lvl: 3103,
    desc: "Computer Logic and Organization",
    grade: "A",
  },
  {
    year: "Summer 2021",
    short: "COP",
    lvl: 3503,
    desc: "Computer Science II",
    grade: "A",
  },
  {
    year: "Fall 2021",
    short: "AMH",
    lvl: 2010,
    desc: "US History",
    grade: "A",
  },
  {
    year: "Fall 2021",
    short: "EML",
    lvl: 3022,
    desc: "Intro to Computer Aided Engineering",
    grade: "A",
  },
  {
    year: "Fall 2021",
    short: "EML",
    lvl: 4301,
    desc: "Mechanical Systems Lab",
    grade: "A",
  },
  {
    year: "Fall 2021",
    short: "EML",
    lvl: 4501,
    desc: "Senior Engineering Design I",
    grade: "B+",
  },
  {
    year: "Spring 2022",
    short: "EML",
    lvl: 3101,
    desc: "Thermodynamics II",
    grade: "A",
  },
  {
    year: "Spring 2022",
    short: "EML",
    lvl: 4502,
    desc: "Senior Engineering Desing II",
    grade: "B+",
  },
  {
    year: "Spring 2022",
    short: "EML",
    lvl: 4504,
    desc: "Design & Analysis of Machine Components II",
    grade: "A",
  },
];

function addCategory(array) {
  const temp = [...array];
  for (let i in temp) {
    if (
      array[i].short === "EGN" ||
      array[i].short === "EML" ||
      array[i].short === "PHY" ||
      array[i].short === "MAC" ||
      array[i].short === "MAD" ||
      array[i].short === "STA" ||
      array[i].short === "EGS" ||
      array[i].short === "MAP" ||
      array[i].short === "EGM"
    ) {
      array[i].category = "Engineering";
    } else if (array[i].short === "COP" || array[i].short === "CDA") {
      array[i].category = "Computer Science";
    } else {
      array[i].category = "GenEd";
    }
  }

  return temp;
}

export const newArr = addCategory(myClasses);
