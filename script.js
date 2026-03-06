const jobCards = [
  {
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$900 - $1200/month",
    description: "Develop and maintain responsive web applications using React and Tailwind CSS.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "InnoSoft Ltd.",
    position: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$1200 - $1600/month",
    description: "Build REST APIs using Node.js and Express. Work with MongoDB and authentication systems.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "Creative Minds",
    position: "UI/UX Designer",
    location: "Rajshahi, Bangladesh",
    type: "Part-time",
    salary: "$600 - $800/month",
    description: "Design modern user interfaces and create interactive prototypes using Figma.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "DataCore Analytics",
    position: "Junior Data Analyst",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    salary: "$700 - $1000/month",
    description: "Analyze datasets, create dashboards, and generate business insights using Python and SQL.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "CloudNet Systems",
    position: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$1500 - $2000/month",
    description: "Manage CI/CD pipelines, Docker containers, and cloud infrastructure on AWS.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "Bright Future Tech",
    position: "WordPress Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$800 - $1100/month",
    description: "Develop custom WordPress themes and plugins. Optimize websites for performance and SEO.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "NextGen Labs",
    position: "Software Engineer Intern",
    location: "Narayanganj, Bangladesh",
    type: "Internship",
    salary: "$300 - $400/month",
    description: "Assist in developing web applications and fixing bugs under senior developer supervision.",
    status: 'NOT APPLIED'
  },
  {
    companyName: "Digital Edge",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$1400 - $1800/month",
    description: "Work on both frontend and backend using React, Node.js, and PostgreSQL.",
    status: 'NOT APPLIED'
  }
];


const cardsDiv = document.getElementById('cards')

let filterValue = "all";

const filterBtns = document.querySelectorAll(".filter-btn");
for (const btn of filterBtns) {
  btn.addEventListener("click", () => {
    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    filterValue = btn.value;
    filterOut(filterValue);
    updateCount();
  });
}


const countValue = document.getElementById('span-count');
countValue.style.color = '#64748B';
countValue.style.fontWeight = '500';
const countAll = document.getElementById('count-all')
const countInterview = document.getElementById('count-interview')
const countRejected = document.getElementById('count-rejected')

let countAllValue = 0;
let countInterviewValue = 0;
let countRejectedValue = 0;

function updateCount(){
  countAllValue = jobCards.length;
  countAll.textContent = countAllValue;
  const filterInterview = [];
  const filterRejected = [];
  for(const item of jobCards){
    if(item.status === 'INTERVIEW'){
      filterInterview.push(item);
    }
    else if(item.status === 'REJECTED'){
       filterRejected.push(item);
    }
  }
  countInterviewValue = filterInterview.length;
  countInterview.textContent = countInterviewValue;
  countRejectedValue = filterRejected.length;
  countRejected.textContent = countRejectedValue;
  if(filterValue === 'INTERVIEW'){
    countValue.textContent = `${countInterviewValue} of ${countAllValue} jobs` 
  }
  else if(filterValue === 'REJECTED'){
    countValue.textContent = `${countRejectedValue} of ${countAllValue} jobs`
  }
  else{
    countValue.textContent = `${countAllValue} jobs`
  }
}



// filter function
function filterOut(value) {
  
  const query = value.toLowerCase();
  const filteredArr = [];
  if (query === "all") {
    renderJob(jobCards);
  } else {
    for (const item of jobCards) { 

      if (query === item.status.toLowerCase()) {
        filteredArr.push(item);
      }
    }
    renderJob(filteredArr);
  }
}


function renderJob(arr){
   cardsDiv.innerHTML = '';
   if(arr.length > 0){
    for(const item of arr){
     const childDiv = document.createElement('div');
     childDiv.classList.add('card')
     
     const headerButtonDiv = document.createElement('div');
     headerButtonDiv.style.display = 'flex';
     headerButtonDiv.style.alignItems = 'center';
     headerButtonDiv.style.justifyContent = 'space-between';
     
     childDiv.append(headerButtonDiv);
     const headerDiv = document.createElement('div');
     headerButtonDiv.append(headerDiv);

     const companyNameH1 = document.createElement('h1');
     companyNameH1.textContent = item.companyName; 
     companyNameH1.style.color = '#002C5C';
     companyNameH1.style.fontSize = '1.125rem';
     companyNameH1.style.fontWeight = '600'    
    //  childDiv.append(companyNameH1);
     headerDiv.append(companyNameH1);

     const positionH2 = document.createElement('h2');
     positionH2.textContent = item.position;
     positionH2.style.color = '#64748B';
     positionH2.style.marginBottom = '20px';
    //  childDiv.append(positionH2);
     headerDiv.append(positionH2);

    //////////////

    const deleteCart = document.createElement('button');
    // deleteCart.textContent = 'delete';
    deleteCart.innerHTML = `<i class="fa-regular fa-trash-can" style="color: #64748B;"></i>`
    deleteCart.style.border = '1px solid #F1F2F4';
    deleteCart.style.borderRadius = '100%';
    deleteCart.style.padding = '4px 6px';
    headerButtonDiv.append(deleteCart)
    // childDiv.append(deleteCart);
    deleteCart.addEventListener('click', function(){
      jobCards.splice(jobCards.indexOf(item), 1)
      updateCount();
      filterOut(filterValue);
    })


    ///////////


     const locationTypeSalary = document.createElement("p");
     locationTypeSalary.textContent = `${item.location} | ${item.type} | ${item.salary}`
     locationTypeSalary.style.color = '#64748B';
     locationTypeSalary.style.fontSize = '14px';
     locationTypeSalary.style.marginBottom = '20px';
     childDiv.append(locationTypeSalary)



     const buttonStatus = document.createElement('button');
     const buttonSpan = document.createElement('span');
     buttonSpan.textContent = item.status;
     buttonSpan.style.backgroundColor = '#EEF4FF';
     buttonSpan.style.padding = '12px';
     buttonSpan.style.color = '#002C5C';
     buttonSpan.style.fontWeight = '500';
     buttonSpan.style.borderRadius = '4px';

     if(item.status === 'INTERVIEW'){
      buttonSpan.style.backgroundColor = '#52f4be58';
      buttonSpan.style.color = '#10B981';
      buttonSpan.style.border = '1px solid #10B981';
      buttonSpan.style.borderRadius = '4px';
      buttonSpan.style.padding = '10px 18px';
     }
     if(item.status === 'REJECTED'){
     buttonSpan.style.backgroundColor = 'rgba(239, 68, 68, 0.35)';
     buttonSpan.style.color = '#EF4444';
     buttonSpan.style.border = '1px solid #EF4444';
     buttonSpan.style.borderRadius = '4px';
     buttonSpan.style.padding = '10px 24px';

     }
    
     childDiv.append(buttonSpan)



     const descriptionP = document.createElement('p');
     descriptionP.textContent = item.description;
     descriptionP.style.color = '#323B49';
     descriptionP.style.margin = '16px 0 20px 0'
     childDiv.append(descriptionP);


     const buttonDiv = document.createElement('div');

     const buttonInterview = document.createElement('button');
     buttonInterview.textContent = 'INTERVIEW'
     buttonInterview.style.padding = '9px 12px';
     buttonInterview.style.border = '3px solid #10B981';
     buttonInterview.style.borderRadius = '4px';
     buttonInterview.style.fontWeight = '600';
     buttonInterview.classList.add('interview-btn')

     buttonInterview.classList.add("button-div")
     buttonInterview.addEventListener("click", () => {
        item.status = "INTERVIEW";
        filterOut(filterValue);
        updateCount()
        
      });
      
     buttonDiv.append(buttonInterview);

     const buttonRejected = document.createElement('button');
     buttonRejected.textContent = 'REJECTED';
     buttonRejected.style.padding = '9px 16px';
     buttonRejected.style.border = '3px solid #EF4444';
     buttonRejected.style.borderRadius = '4px';
     buttonRejected.style.fontWeight = '600';
     buttonRejected.classList.add('rejected-btn')

     buttonRejected.classList.add("button-div")
     buttonRejected.addEventListener("click", () => {
        item.status = "REJECTED";
       filterOut(filterValue);
       updateCount();

      });

     buttonDiv.append(buttonRejected);
    

     childDiv.append(buttonDiv)

     cardsDiv.append(childDiv);

    }


   }
   else{
     cardsDiv.innerHTML = `
       <div class="container py-[110px] bg-white flex justify-center">
        <div class="text-center">
          <img class="mx-auto mb-5" src="./assets/jobs.png" alt="" />
          <h3 class="font-semibold text-2xl text-[#002C5C]">
            No jobs available
          </h3>
          <p class="text[1rem] text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>
      </div>
     `
   }
}

renderJob(jobCards)

updateCount()