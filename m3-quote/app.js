import GenerateBtn from "./button.js";
import QuoteDetail from "./quotedetail.js";

export default function App({ target }) {
  const quoteDetail = new QuoteDetail({ target });
  new GenerateBtn({
    target,
    onClick: () => {
      quoteDetail.render();
    },
  });
}
