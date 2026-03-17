import chalk from "chalk";

export function printColorfulMessage() {
	const colorMessg =
		chalk.bold(chalk.blue("Hello ")) +
		chalk.underline(chalk.bgRed("this ")) +
		chalk.italic(chalk.yellow("is ")) +
		chalk.overline(chalk.bgBlue("a ")) +
		chalk.strikethrough(chalk.green("colorful ")) +
		chalk.inverse(chalk.bgRed("message!"));

	console.log(colorMessg);
}
