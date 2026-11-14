import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Interpreter" — one poem, one act of agency.
const poem: string[] = [
  "The interpreter wore headphones",
  "and repeated everything, word for word.",
  "That was the job: carry the words across,",
  "be nobody.",
  "",
  "The witness said, he did it.",
  "She said, he was there.",
  "",
  "Nobody in the room spoke her language.",
  "The judge wrote it down.",
  "The sentence changed.",
  "",
  "She took off her headphones",
  "and went home to make dinner.",
];

const text = poem.join("\n") + "\n";

// The entry must be 1–1000 characters (Unicode code points, line ends count).
// Fail loudly instead of writing an invalid entry.
const length = [...text].length;
if (length < 1 || length > 1000) {
  console.error(`error: poem is ${length} characters, must be 1-1000`);
  process.exit(1);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
