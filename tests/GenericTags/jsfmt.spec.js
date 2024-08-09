import { run_spec } from "tests_config/run_spec";
import { describe, expect, it } from "vitest";

/** @type {import('tests_config/run_spec').PrettierOptions} */
const formatOptions = {};

describe("Failing", () => {
    it("handle cache tags", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "cache.twig",
            formatOptions: {
                twigMultiTags: ["cache,endcache"]
            }
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle header tags", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "header.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle include css file tag", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "includeCssFile.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle nav tag", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "nav.twig",
            formatOptions: {
                twigMultiTags: ["nav,endnav", "ifchildren, endifchildren"]
            }
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle paginate tag", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "paginate.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle redirect tag", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "redirect.twig"
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
    it("handle switch tag", async () => {
        const { actual, snapshotFile } = await run_spec(import.meta.url, {
            source: "switch.twig",
            formatOptions: {
                twigMultiTags: ["switch,case,default,endswitch"]
            }
        });
        await expect(actual).toMatchFileSnapshot(snapshotFile);
    });
});
