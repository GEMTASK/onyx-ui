import ReactMarkdown, { type Components } from "react-markdown";

import { View, Text } from "..";

import styles from "./Markdown.module.scss";
import { useEffect, useState } from "react";

const components: Components = {
  h1({ node, className, children, ...props }) {
    return (
      <Text as="h1" fontSize="32px" fontWeight="300">
        {children}
      </Text>
    );
  },
  h2({ node, className, children, ...props }) {
    return (
      <Text as="h2" fontSize="24px" fontWeight="600">
        {children}
      </Text>
    );
  },
  h3({ node, className, children, ...props }) {
    return (
      <Text as="h2" fontSize="18px" fontWeight="500">
        {children}
      </Text>
    );
  },
  p({ node, className, children, ...props }) {
    return (
      <Text as="p">
        {children}
      </Text>
    );
  },
  ul({ node, className, children, ...props }) {
    return (
      <View as="ul">
        {children}
      </View>
    );
  },
  li({ node, className, children, ...props }) {
    return (
      <Text as="li">
        {children}
      </Text>
    );
  },
  code({ node, className, children, ...props }) {
    return (
      <Text border as="code" fillColor="panel" cornerRadius="2px" padding="16px">
        {children}
      </Text>
    );
  }
};

function Markdown() {
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    (async () => {
      // const markdown = await fetch(`/docs/${teamKeySeqId ? "item-details" : page}.md`);
      const markdown = await fetch("https://webdav.mike-austin.com/Learning Kopi.md");

      setMarkdown(await markdown.text());
    })();
  });

  return (
    <View flex padding="16px" className={styles.Markdown}>
      <ReactMarkdown components={components}>
        {markdown}
      </ReactMarkdown>
    </View>
  );
}

export default Markdown;
