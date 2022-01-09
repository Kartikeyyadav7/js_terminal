const serverAddress = "http://localhost:8080";

// function connectToSocket(serverAddress) {
// 	return new Promise((res) => {
// 		const socket = io(serverAddress);
// 		res(socket);
// 	});
// }

function startTerminal(container, socket) {
	const terminal = new TerminalUI(socket);
	terminal.attachTo(container);
	terminal.startListening();
}

function start() {
	const container = document.getElementById("terminal");

	connectToSocket(serverAddress).then((socket) => {
		startTerminal(container, socket);
	});
}

// Better to start on DOMContentLoaded. So, we know terminal-container is loaded
start();

// const term = new Terminal();
// term.open(document.getElementById("terminal"));
// term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
