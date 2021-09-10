export default function GenerateBtn({ target, onClick }) {
  const nextButton = document.createElement("button");
  target.appendChild(nextButton);
  nextButton.innerText = "▶";

  nextButton.addEventListener("click", () => {
    onClick();
  });
}
