import { error_log, success_log } from "@/utils/logger";

export const copy_env_fn = async () => {
  const envContent = await Bun.file(`${__dirname}/../.env`)
    .text()
    .then((r) =>
      r
        .trim()
        .split("\n")
        .map((z) => z.split("=")[0]),
    );
  let envExampleContent = envContent
    .map(
      (z) =>
        `${z}=${
          z.toLowerCase() === "database_url"
            ? `"postgresql://postgres:PASSWORD@localhost:5432/virosa"`
            : ""
        }`,
    )
    .join("\n")
    .trim();
  let envTypings = `
declare module "bun" {
  interface Env {
    ${envContent
      .map((z) => `${z}: string\n`.trim())
      .join()
      .trim()}
  }
} `.trim();

  new Promise((resolver, reject) => {
    try {
      Bun.file(`${__dirname}/../.env.example`)
        .writer()
        .write(envExampleContent);
      Bun.file(`${__dirname}/../env.d.ts`).writer().write(envTypings);
      resolver(1);
    } catch (e) {
      reject(0);
    }
  })
    .then(() => {
      success_log(`Written .env boilerplate to ".env.example" & "env.d.ts"`);
      return;
    })
    .catch(() => {
      error_log(
        `Unable to write .env boilerplate to ".env.example" & "env.d.ts"`,
      );
      return;
    });
  return;
};

copy_env_fn();
