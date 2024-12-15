import { useEffect, useState } from "react";

export default function useQuizInfo(reset) {
  const [isLoading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [dates, setDates] = useState({ from: "", to: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let [articles, topics] = await getData();
      let max = articles.length - 101;
      let startIdx = Math.floor(Math.random() * max);
      let endIdx = startIdx + 100;
      let articlePopularity = {};
      articles = articles.slice(startIdx, endIdx + 1);

      const dateFrom = articles[0].article_date;
      const dateTo = articles[articles.length - 1].article_date;
      let from = `${dateFrom.Year} ${dateFrom.Month} ${dateFrom.Day}`;
      let to = `${dateTo.Year} ${dateTo.Month} ${dateTo.Day}`;
      from = from.charAt(0).toUpperCase() + from.slice(1);
      to = to.charAt(0).toUpperCase() + to.slice(1);

      articles.forEach((article) => {
        const topicNum = String(article.assigned_topic_num);
        const topicProb = article.topic_probability;
        if (topicNum in articlePopularity) {
          articlePopularity[topicNum] += topicProb;
        } else {
          articlePopularity[topicNum] = topicProb;
        }
      });

      const sortedKeys = Object.keys(articlePopularity).sort(
        (a, b) => articlePopularity[a] - articlePopularity[b]
      );

      const popularKey = sortedKeys[0];
      const selectedKeys = [0];
      const candidates = [topics[popularKey]];
      while (candidates.length <= 4) {
        let idx = Math.floor(Math.random() * sortedKeys.length);
        if (!selectedKeys.includes(idx)) {
          candidates.push(topics[sortedKeys[idx]]);
        }
      }

      const shuffledCandidates = shuffleArray(candidates);
      setCandidates(shuffledCandidates);
      setAnswer(topics[popularKey][0]);
      setDates({ to: to, from: from });
      setLoading(false);
    };
    fetchData();
  }, [reset]);

  return [isLoading, candidates, answer, dates];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function getData() {
  let resp = await fetch("/topical_output.json");
  let articles = await resp.json();
  resp = await fetch("/topics.json");
  let topics = await resp.json();
  return [articles, topics];
}
