let stepNum = 1;

const nextBtn = document.getElementsByClassName("next-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];

const steps = document.querySelectorAll(".multistep-form .step");

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
    if (step.classList.contains("active")) step.classList.remove("active");
  });
  const currentStep = steps[stepNum - 1];
  currentStep.classList.add("active");
};

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
