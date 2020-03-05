let step = 1;

const next = () => {
  if (step === 3) return;
  step++;
};

const back = () => {
  if (step === 1) return;
  step--;
};

const nextBtn = document.getElementsByClassName("next-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];

nextBtn.addEventListener("click", () => {
  next();
  console.log("next , step:", step);
});

backBtn.addEventListener("click", () => {
  back();
  console.log("back , step:", step);
});
