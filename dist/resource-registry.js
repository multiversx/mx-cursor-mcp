// resources-registry.ts
import { promises as fs } from "fs";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { markdownResources } from "./docs-resources.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Function to register all resources
export function registerResources(server) {
    // 1. Register each individual markdown resource
    markdownResources.forEach((resource) => {
        server.resource(resource.name, `resource://docs/${resource.name}`, async (uri) => {
            try {
                const resourcePath = path.join(__dirname, "..", "docs", resource.uri + ".md");
                const resourceContent = await fs.readFile(resourcePath, "utf8");
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: resourceContent,
                        },
                    ],
                };
            }
            catch (error) {
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: `Error reading ${resource.name}: ${error instanceof Error ? error.message : "Unknown error"}`,
                        },
                    ],
                };
            }
        });
    });
    // 2. Register a resource directory that the LLM can query to discover available resources
    server.resource("ResourceDirectory", "resource://docs-directory", async (uri) => {
        return {
            contents: [
                {
                    uri: uri.href,
                    text: JSON.stringify({
                        availableResources: markdownResources.map((r) => ({
                            name: r.name,
                            url: `resource://docs/${r.name}`,
                            description: r.description,
                        })),
                    }, null, 2),
                },
            ],
        };
    });
    // 3. Register a resource finder that helps the LLM choose the right resource
    server.resource("ResourceFinder", "resource://docs-finder", async (uri, request) => {
        // Extract the query from the request
        const query = request?.body?.query || "";
        if (!query) {
            return {
                contents: [
                    {
                        uri: uri.href,
                        text: "Please provide a query to find the relevant documentation.",
                    },
                ],
            };
        }
        // Simple keyword matching to find the most relevant resource
        const matches = markdownResources
            .map((resource) => {
            const keywordMatches = query
                .toLowerCase()
                .split(/\s+/)
                .filter((word) => resource.description?.toLowerCase().includes(word) ||
                resource.name.toLowerCase().includes(word)).length;
            return {
                resource,
                relevance: keywordMatches,
            };
        })
            .sort((a, b) => b.relevance - a.relevance);
        const bestMatch = matches[0]?.resource;
        let response;
        if (bestMatch && matches[0].relevance > 0) {
            response = {
                recommendedResource: {
                    name: bestMatch.name,
                    url: `resource://docs/${bestMatch.name}`,
                    description: bestMatch.description,
                    message: `Based on your query, I recommend using the ${bestMatch.name} documentation.`,
                },
            };
        }
        else {
            response = {
                message: "No matching documentation found for your query.",
                availableResources: markdownResources.map((r) => ({
                    name: r.name,
                    url: `resource://docs/${r.name}`,
                    description: r.description,
                })),
            };
        }
        return {
            contents: [
                {
                    uri: uri.href,
                    text: JSON.stringify(response, null, 2),
                },
            ],
        };
    });
}
export { markdownResources };
