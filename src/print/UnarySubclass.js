import { doc } from "prettier";
import { Node } from "../melody/melody-types/index.js";
import {
    firstValueInAncestorChain,
    findParentNode,
    isMultipartExpression,
    IS_ROOT_LOGICAL_EXPRESSION,
    GROUP_TOP_LEVEL_LOGICAL
} from "../util/index.js";

const { softline, indent, group } = doc.builders;

const argumentNeedsParentheses = node => isMultipartExpression(node);

const isLogicalOperator = operator => operator === "not";

const printLogicalExpression = (node, path, print) => {
    const foundRootAbove = firstValueInAncestorChain(
        path,
        IS_ROOT_LOGICAL_EXPRESSION,
        false
    );
    if (!foundRootAbove) {
        node[IS_ROOT_LOGICAL_EXPRESSION] = true;
    }
    const parentNode = findParentNode(path);
    const shouldGroupOnTopLevel = parentNode[GROUP_TOP_LEVEL_LOGICAL] !== false;

    const parts = [node.operator, " "];
    const needsParentheses = argumentNeedsParentheses(node.argument);
    const printedArgument = path.call(print, "argument");
    if (needsParentheses) {
        parts.push("(", indent([softline, printedArgument]), [softline, ")"]);
    } else {
        parts.push(printedArgument);
    }
    const result = parts;
    const shouldCreateTopLevelGroup = !foundRootAbove && shouldGroupOnTopLevel;

    return shouldCreateTopLevelGroup ? group(result) : result;
};

const p = (node, path, print) => {
    const parts = [];
    // Example: a is not same as ... => Here, the "not" is printed "inline"
    // Therefore, we do not output it here
    const hasTestExpressionArgument = Node.isTestExpression(node.argument);
    if (isLogicalOperator(node.operator) && !hasTestExpressionArgument) {
        return printLogicalExpression(node, path, print);
    }
    if (!hasTestExpressionArgument) {
        parts.push(node.operator, " ");
    }
    parts.push(path.call(print, "argument"));
    return parts;
};

export { p as printUnarySubclass };
