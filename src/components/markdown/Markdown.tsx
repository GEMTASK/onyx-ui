import ReactMarkdown from "react-markdown";

import View from "../view";
import Text from "../text";

import styles from "./Markdown.module.scss";

function Markdown() {
  return (
    <View flex padding="16px" className={styles.Markdown}>
      <ReactMarkdown components={{
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
            <Text border as="code" fontWeight="600" fillColor="panel" cornerRadius="2px" padding="16px" {...props}>
              {children}
            </Text>
          );
        }
      }}>
        {`
# Learning Kopi

## Introduction

Kopi is a small, immutable, 100% async programming language. It provides several literal types, uses patterns for destructuring and matching values, and supports lazy streams and coroutines.

Within this document, you can edit any code which has a value just below it and see the updated result.

### Small

Kopi is a small language, meanining it has a minimum of syntax. In fact, there are no keywords, just patterns and functions which take values. It doesn't take long to fully understand the language.

- EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE
- EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE EEEEE

## Kopi Basics

### Literal Types

Common to most languages, Kopi has Number, String, and Boolean literal types. They are all represented internally as JavaScript primitives. We'll see later which operations are available on each, and what other literal types are available.

\`\`\`
1, -2.5, 3.14       Number        A floating point or integer value
\`\`\`
        `}
      </ReactMarkdown>
    </View>
  );
}

export default Markdown;
