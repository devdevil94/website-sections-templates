let stepNum = 1;

const nextBtn = document.getElementsByClassName("next-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];

const steps = document.querySelectorAll(".multistep-form .step");
const progressDots = document.querySelectorAll(".progress-bar li");

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

  progressDots.forEach(dot => {
    if (dot.classList.contains("active")) dot.classList.remove("active");
  });
  const currentDot = progressDots[stepNum - 1];
  currentDot.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  next();
  update();
});

backBtn.addEventListener("click", () => {
  back();
  update();
});
