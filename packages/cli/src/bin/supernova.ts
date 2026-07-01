#!/usr/bin/env node
import { parseArgs } from 'node:util';

import { createSite, formatDryRunPlan } from '../create-site.js';

const HELP_TEXT = `Supernova Site Platform CLI

Usage:
  supernova create-site --name <name> --slug <slug> --vertical <vertical> [options]

Commands:
  create-site    Generate a client site skeleton

Options:
  --name         Business display name (required)
  --slug         URL slug in kebab-case (required)
  --vertical     Site vertical, e.g. landscaping (required)
  --output       Destination directory (default: ./generated/<slug>)
  --dry-run      Print planned files without writing
  -h, --help     Show this help message

Examples:
  supernova create-site --name "Blue Ridge Outdoor Living" --slug blue-ridge-outdoor-living --vertical landscaping
  supernova create-site --name "Blue Ridge Outdoor Living" --slug blue-ridge-outdoor-living --vertical landscaping --dry-run
`;

async function main(): Promise<void> {
  const { values, positionals } = parseArgs({
    options: {
      name: { type: 'string' },
      slug: { type: 'string' },
      vertical: { type: 'string' },
      output: { type: 'string' },
      'dry-run': { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
    allowPositionals: true,
  });

  if (values.help || positionals.length === 0) {
    process.stdout.write(HELP_TEXT);
    return;
  }

  const command = positionals[0];

  if (command !== 'create-site') {
    process.stderr.write(`Unknown command "${command}".\n\n`);
    process.stderr.write(HELP_TEXT);
    process.exitCode = 1;
    return;
  }

  if (!values.name || !values.slug || !values.vertical) {
    process.stderr.write(
      'Missing required flags: --name, --slug, and --vertical are required.\n\n',
    );
    process.stderr.write(HELP_TEXT);
    process.exitCode = 1;
    return;
  }

  try {
    const result = await createSite({
      name: values.name,
      slug: values.slug,
      vertical: values.vertical,
      output: values.output,
      dryRun: values['dry-run'],
    });

    if (result.dryRun) {
      process.stdout.write(`${formatDryRunPlan(result.destination, result.files)}\n`);
      return;
    }

    process.stdout.write(`Created site at ${result.destination}\n`);
    process.stdout.write(`Files written (${result.files.length}):\n`);
    for (const file of result.files) {
      process.stdout.write(`  - ${file.relativePath}\n`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`Error: ${message}\n`);
    process.exitCode = 1;
  }
}

await main();
