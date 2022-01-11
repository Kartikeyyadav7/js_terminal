import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { io } from "socket.io-client";

const serverAddress = "http://localhost:8080";

const term = new Terminal();

const createTerminal = () => {
	term.open(document.getElementById("terminal"));
	term.options = {
		background: "#202B33",
		foreground: "#F5F8FA",
	};
	term.write("Hello");
	term.write(`\r\n$ `);
};

const connectToSocket = (serverAddress) => {
	return new Promise((res) => {
		const socket = io(serverAddress);
		res(socket);
	});
};

connectToSocket(serverAddress).then((socket) => {
	socket.on("connect", () => {
		console.log("Id", socket.id);
		createTerminal();
		term.onData((data) => socket.emit("input", data));
		socket.on("output", (data) => {
			// When there is data from PTY on server, print that on Terminal.
			term.write(data);
		});
	});
});
