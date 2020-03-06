const startStep = 1;
const endStep = 3;

let stepNum = startStep;

const nextBtn = document.getElementsByClassName("next-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];

const steps = document.querySelectorAll(".multistep-form .step");
const progressDots = document.querySelectorAll(".progress-bar li");

const next = () => {
  if (stepNum === endStep) return;
  stepNum++;
};

const back = () => {
  if (stepNum === startStep) return;
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

  if (stepNum === startStep) {
    nextBtn.style.display = "inline-block";
    backBtn.style.display = "none";
    submitBtn.style.display = "none";
  } else if (stepNum === endStep) {
    nextBtn.style.display = "none";
    backBtn.style.display = "inline-block";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    backBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
};

nextBtn.addEventListener("click", () => {
  next();
  update();
});

backBtn.addEventListener("click", () => {
  back();
  update();
});
