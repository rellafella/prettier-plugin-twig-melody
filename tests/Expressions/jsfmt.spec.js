import { run_spec } from "tests_config/run_spec";
import { describe, expect, it } from "vitest";

describe("Comments", () => {
    it("handle array expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "arrayExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle binary expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "binaryExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle call expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "callExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle conditional expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "conditionalExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle filter expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "filterExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle member expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "memberExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle object expressions", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "objectExpression.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle operators", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "operators.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle string concatenation", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "stringConcat.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle string literals", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "stringLiteral.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle unary not", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "unaryNot.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
});
