# Landscaping Package Boundaries

| Package                | Owns                                             | Does not own                   |
| ---------------------- | ------------------------------------------------ | ------------------------------ |
| `content-schema`       | Generic entity schemas                           | Page layout or vertical routes |
| `vertical-landscaping` | Landscaping site schema, routes, fixtures, audit | Visual presentation            |
| `ui-sections`          | Reusable Astro sections                          | Business-specific copy         |
| `forms`                | Quote validation + adapters                      | AWS Lambda implementation      |
| `seo`                  | Metadata builders                                | Page templates                 |
| `structured-data`      | JSON-LD factories                                | Marketing claims               |
| `cli`                  | Skeleton generation                              | GitHub repo creation           |
| `apps/demo-*`          | Fictional content + thin routes                  | Shared component logic         |
