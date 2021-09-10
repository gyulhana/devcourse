import { request } from "./api.js";

export default function QuoteDetail({ target }) {
  const quotearea = document.createElement("div");
  const authorarea = document.createElement("div");
  quotearea.className = "quote";
  authorarea.className = "author";
  target.appendChild(quotearea);
  target.appendChild(authorarea);

  this.render = async () => {
    const randomQuote = await request();
    const { quote, author } = randomQuote;
    quotearea.innerText = `${quote.replace(/\uFFFD/g, "-")}`;
    authorarea.innerText = `by. ${author.length > 0 ? author.replace(/\uFFFD/g, "-") : "Unknown"}`;
  };

  this.render();
}
