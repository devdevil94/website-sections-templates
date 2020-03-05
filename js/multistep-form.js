let stepNum = 1;
let steps;

const next = () => {
  if (stepNum === 3) return;
  stepNum++;
};

const back = () => {
  if (stepNum === 1) return;
  stepNum--;
};

const update = () => {
  steps.forEach(step => {
    if (step.classlist.contains("active")) step.classlist.remove("active");
  });
  const currentStep = steps[stepNum - 1];
  currentStep.classlist.add("active");
};

const nextBtn = document.getElementsByClassName("next-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];

steps = document.querySelectorAll(".multistep-form .step");

nextBtn.addEventListener("click", () => {
  next();
  console.log("next , step:", stepNum);
  update();
});

backBtn.addEventListener("click", () => {
  back();
  console.log("back , step:", stepNum);
  update();
});
