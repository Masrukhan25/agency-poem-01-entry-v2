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

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem.join("\n") + "\n", "utf8");
